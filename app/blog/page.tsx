import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import BlogIndex from "@/components/blog/BlogIndex";
import { getAllPosts } from "@/lib/blog";
import MEDIA from "@/lib/media";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Kır düğünü planlama, dekorasyon, fotoğraf ve misafir ağırlama üzerine ilham veren yazılar. Kemerburgaz'dan Anatolia Event blogu.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Anatolia Event",
    description: "Kır düğünü üzerine notlar, ilham ve bahçemizden hikâyeler.",
    url: "/blog",
    type: "website",
    locale: "tr_TR",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const categoryCount = new Set(posts.map((p) => p.category)).size;

  return (
    <>
      <Navbar />
      <main className="bg-stone-50 min-h-screen text-stone-900 font-light">
        <PageHero
          eyebrow="Anatolıa Notları"
          title="Blog"
          subtitle="Kır düğününe dair her şey"
          // İsterseniz burayı diğer sayfalardaki gibi MEDIA'dan bir görselle değiştirebilirsiniz
          image={MEDIA.photos.jpeg7}
          tags={[
            { label: "Yazı", value: `${posts.length} Makale` },
            { label: "Konu", value: `${categoryCount} Kategori` },
          ]}
          sideText="Anatolıa Event — Blog"
          height="75vh"
        />

        <BlogIndex posts={posts} />

        <Cta />
      </main>
    </>
  );
}
