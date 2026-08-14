export interface ExpertInsight {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const expertInsights: ExpertInsight[] = [
  {
    id: "1",
    slug: "huong-dan-tao-van-ban-bang-ai-trong-lark-base",
    title: "Hướng Dẫn Tạo Văn Bản Bằng AI Trong Lark Base Cho Doanh Nghiệp",
    description:
      "Bạn muốn tối ưu hóa quy trình làm việc? Bạn muốn tự động hóa việc sáng tạo nội dung? Chức năng tạo văn bản bằng AI trong Lark Base sẽ giúp bạn giải quyết điều đó.",
    date: "14/08/2026",
    author: "Cloudino Expert",
    category: "Lark",
    image: "/images/backgrounds/deco-1.png",
  },
];
