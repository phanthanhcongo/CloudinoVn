import insightsList from "./insights.json";
import article1 from "./huong-dan-tao-van-ban-bang-ai-trong-lark-base.json";
import article2 from "./amazon-quick-cho-microsoft-365-4-cach-dot-pha-hieu-suat-ai.json";
import article3 from "./amazon-bedrock-giup-phat-hien-gian-lan-tai-lieu-trong-90-giay-nhu-the-nao.json";
import article4 from "./kubernetes-digitalocean-spaces-loi-ich-vuot-troi-de-toi-uu-luu-tru.json";

export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  contentFile: string;
}

export const insights: InsightItem[] = insightsList;
export const insightsArticles: Record<string, any> = {
  [article1.slug]: article1,
  [article2.slug]: article2,
  [article3.slug]: article3,
  [article4.slug]: article4,
};
