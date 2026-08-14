# QUY CHUẨN MÃ NGUỒN RESPONSIVE & TYPOGRAPHY - CLOUDINO WEBSITE

Tài liệu chi tiết quy chuẩn kích thước font chữ (Typography Fluid Scale), lề chứa (Container Padding) và khoảng cách giao diện dành cho tất cả các trang và component của **Cloudino Website**.

---

## 1. Bảng Chi Tiết Kích Thước Chữ (Typography Size Chart)

Bảng dưới đây quy định chính xác kích thước font chữ (pixel/rem) cho từng loại thành phần giao diện theo từng mốc màn hình (Breakpoint):

| Loại Thành Phần | Mobile (<640px) | Tablet (640-1024px) | Desktop Nhỏ/Laptop (1024-1440px) ⭐ | Desktop Lớn / 2K+ (>=1536px) | Class Tailwind Chuẩn |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | 30px (`text-3xl`) | 48px - 60px (`text-5xl` - `6xl`) | **72px - 96px** (`text-7xl` - `8xl`) | **110px - 135px** (`text-[110px]` - `[135px]`) | `text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px]` |
| **Hero Subtitle** | 12px (`text-xs`) | 14px (`text-sm`) | **16px - 18px** (`text-base` - `lg`) | **18px - 20px** (`text-lg` - `xl`) | `text-xs sm:text-sm md:text-base lg:text-lg` |
| **Section Header (Pill)** | 14px (`text-sm`) | 16px (`text-base`) | **18px - 20px** (`text-lg` - `xl`) | **24px** (`text-2xl`) | `text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl` |
| **Tiêu đề Section (H2)** | 18px (`text-lg`) | 24px (`text-2xl`) | **30px** (`text-3xl`) | **36px** (`text-4xl`) | `text-lg sm:text-2xl lg:text-3xl` |
| **Tiêu đề Thẻ (Card H3)** | 16px (`text-base`) | 18px (`text-lg`) | **20px** (`text-xl`) | **20px - 24px** (`text-xl` - `2xl`) | `text-base sm:text-lg lg:text-xl` |
| **Mô tả Thẻ (Card Body)** | 12px (`text-xs`) | 14px (`text-sm`) | **14px** (`text-sm`) | **14px - 16px** (`text-sm` - `base`) | `text-xs sm:text-sm` |
| **Sticky Tabs Nav** | 12px (`text-xs`) | 14px (`text-sm`) | **16px** (`text-base`) | **16px - 18px** (`text-base` - `lg`) | `text-xs sm:text-sm lg:text-base` |
| **Nút bấm Hero (CTA)** | 14px (`text-sm`) | 14px (`text-sm`) | **16px** (`text-base`) | **16px** (`text-base`) | `text-sm sm:text-base` |
| **Nút bấm Thẻ (Card CTA)**| 12px (`text-xs`) | 14px (`text-sm`) | **14px** (`text-sm`) | **14px** (`text-sm`) | `text-xs sm:text-sm` |
| **FAQ Hỏi / Đáp** | 12px (`text-xs`) | 14px (`text-sm`) | **14px** (`text-sm`) | **14px** (`text-sm`) | `text-xs sm:text-sm` |

---

## 2. Chi Tiết Từng Loại Kích Thước Chữ & Ứng Dụng

### 2.1. Hero Title (H1 Super Large)
* **Kích thước pixel:** 30px ➔ 48px ➔ 60px ➔ 72px ➔ 96px ➔ 110px.
* **Line Height:** `leading-none` (1.0).
* **Ứng dụng:** Tiêu đề lớn trên cùng của trang Hero (VD: `AI & DATA`, `ABOUT US`, `CLOUD SOLUTIONS`).
* **Lưu ý:** Tuyệt đối không dán cứng `text-[135px]` ở màn Laptop (1280px - 1440px) vì sẽ làm tiêu đề ngốn hết chiều cao màn hình.

### 2.2. Section Header Pill Badge (`SectionHeader.tsx`)
* **Kích thước pixel:** 14px ➔ 16px ➔ 18px ➔ 20px ➔ 24px.
* **Font weight:** `font-normal` hoặc `font-light`.
* **Khung chứa Pill:**
  * Padding khung: `px-4 py-1.5 sm:px-5 sm:py-2`
  * Dải chấm sáng LED 2 đầu: `h-3.5 w-3.5` (chấm trong `h-1.5 w-1.5`).
  * Bottom margin: `mb-6 sm:mb-8`.

### 2.3. Tiêu đề Thẻ Card (Card Title H3)
* **Kích thước pixel:** 16px (Mobile) ➔ 18px (Tablet) ➔ 20px (Desktop).
* **Line Height:** `leading-snug` (1.375).
* **Font weight:** `font-bold` hoặc `font-medium`.
* **Ứng dụng:** Tiêu đề các ô card giải pháp, card tin tức, card quy trình 3 bước.
* **Số dòng tối đa:** Giới hạn 2 - 3 dòng tự nhiên, không tràn vỡ card.

### 2.4. Văn bản Mô tả Thẻ (Card Body Text / Subtext)
* **Kích thước pixel:** 12px (Mobile/Tablet) ➔ 14px (Desktop).
* **Line Height:** `leading-relaxed` (1.625).
* **Font weight:** `font-normal`, màu sắc `text-white/70` hoặc `text-white/80`.
* **Ứng dụng:** Đoạn văn chi tiết bên trong các thẻ, mô tả quy trình, nội dung chứng nhận.

---

## 3. Khung Chứa & Container Padding Standard

```tsx
className="mx-auto max-w-[1920px] px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-[285px]"
```

* **Desktop nhỏ / Laptop (1024px - 1440px):** `lg:px-12 xl:px-16` (padding 48px - 64px mỗi bên), giữ cho không gian làm việc của nội dung luôn **> 1200px**.
* **Desktop 2K/4K (>= 1536px):** `2xl:px-[285px]` kích hoạt lề 285px.

---

## 4. Quy Chuẩn Header Navigation Navbar (`Header.tsx`)

* **Height Header:** `h-[56px] md:h-[70px]`
* **Logo Height:** `h-6 md:h-9`
* **Padding Offset Top cho các trang:** `pt-[56px] md:pt-[70px]`
* **Sticky Navigation Offset Top:** `top-[56px] md:top-[70px]`
