import HomePage from "@/components/HomePage";
import { getLatestPosts } from "@/lib/blog";

// Ana sayfa artık sunucuda son blog yazılarını alıp görünen kısma iletiyor.
// Sayfanın tasarımı ve içeriği components/HomePage.tsx içinde, eskisiyle birebir aynı.
export default async function Page() {
  const latestPosts = await getLatestPosts(3);
  return <HomePage latestPosts={latestPosts} />;
}
