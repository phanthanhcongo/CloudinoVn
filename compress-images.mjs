import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname } from 'path';
import { execSync } from 'child_process';

const PUBLIC_DIR = './public';
const PNG_QUALITY = 80; // 0-100, lower = smaller
const JPEG_QUALITY = 75;
const MAX_WIDTH = 1920; // resize if wider than this

async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const fileStat = await stat(filePath);
  const originalSize = fileStat.size;

  // Skip tiny files (< 10KB)
  if (originalSize < 10 * 1024) {
    return { skipped: true, reason: 'too small' };
  }

  try {
    if (ext === '.png') {
      const tempPath = filePath + '.tmp';
      await sharp(filePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .png({ quality: PNG_QUALITY, compressionLevel: 9, effort: 10 })
        .toFile(tempPath);

      const newStat = await stat(tempPath);
      if (newStat.size < originalSize) {
        await unlink(filePath);
        await rename(tempPath, filePath);
        return {
          originalSize,
          newSize: newStat.size,
          saved: originalSize - newStat.size,
        };
      } else {
        await unlink(tempPath);
        return { skipped: true, reason: 'no improvement' };
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      const tempPath = filePath + '.tmp';
      await sharp(filePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toFile(tempPath);

      const newStat = await stat(tempPath);
      if (newStat.size < originalSize) {
        await unlink(filePath);
        await rename(tempPath, filePath);
        return {
          originalSize,
          newSize: newStat.size,
          saved: originalSize - newStat.size,
        };
      } else {
        await unlink(tempPath);
        return { skipped: true, reason: 'no improvement' };
      }
    } else if (ext === '.gif') {
      // Use ffmpeg to compress GIF: reduce colors, optimize, reduce fps
      const tempPath = filePath + '.optimized.gif';
      try {
        // Reduce to 128 colors, halve fps, scale down if too large
        execSync(
          `ffmpeg -y -i "${filePath}" -vf "fps=10,scale='min(800,iw)':'min(800,ih)':flags=lanczos:force_original_aspect_ratio=decrease,split[s0][s1];[s0]palettegen=max_colors=128:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3" "${tempPath}"`,
          { stdio: 'pipe', timeout: 120000 }
        );

        const newStat = await stat(tempPath);
        if (newStat.size < originalSize) {
          await unlink(filePath);
          await rename(tempPath, filePath);
          return {
            originalSize,
            newSize: newStat.size,
            saved: originalSize - newStat.size,
          };
        } else {
          await unlink(tempPath);
          return { skipped: true, reason: 'no improvement' };
        }
      } catch (e) {
        // Clean up temp file if it exists
        try { await unlink(tempPath); } catch {}
        return { skipped: true, reason: `ffmpeg error: ${e.message?.substring(0, 80)}` };
      }
    }
  } catch (e) {
    return { skipped: true, reason: `error: ${e.message?.substring(0, 80)}` };
  }

  return { skipped: true, reason: 'unsupported format' };
}

async function main() {
  console.log('📦 Scanning for images in', PUBLIC_DIR, '...\n');

  const allFiles = await getAllFiles(PUBLIC_DIR);
  const imageFiles = allFiles.filter((f) => {
    const ext = extname(f).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.gif'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} image files.\n`);

  let totalSaved = 0;
  let compressedCount = 0;

  for (const file of imageFiles) {
    const fileStat = await stat(file);
    const sizeMB = (fileStat.size / 1024 / 1024).toFixed(2);
    process.stdout.write(`Processing: ${file} (${sizeMB} MB) ... `);

    const result = await compressImage(file);

    if (result.skipped) {
      console.log(`⏭️  Skipped (${result.reason})`);
    } else {
      const savedMB = (result.saved / 1024 / 1024).toFixed(2);
      const newMB = (result.newSize / 1024 / 1024).toFixed(2);
      const pct = ((result.saved / result.originalSize) * 100).toFixed(1);
      console.log(`✅ ${sizeMB} MB → ${newMB} MB (saved ${savedMB} MB / ${pct}%)`);
      totalSaved += result.saved;
      compressedCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Done! Compressed ${compressedCount} files.`);
  console.log(
    `💾 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`
  );
}

main().catch(console.error);
