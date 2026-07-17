import { type Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { blogPosts } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "Healthcare Marketing Blog — AutovateNow",
  description: "Expert insights on healthcare SEO, GEO, doctor branding, performance ads, and clinic automation. Written for clinic owners and healthcare professionals in India.",
  alternates: { canonical: "https://autovaternow.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-6">Healthcare Marketing Insights</h1>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
              Expert perspectives on SEO, GEO, doctor branding, performance ads, and AI automation — written specifically for healthcare professionals and clinic owners.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="All Articles"
              title="Latest insights from our team"
              subtitle="Practical, data-grounded healthcare marketing content. No fluff."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
