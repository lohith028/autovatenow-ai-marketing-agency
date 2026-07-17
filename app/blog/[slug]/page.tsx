import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/lib/data/blog-posts";
import { Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://autovaternow.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length > 0 ? related : fallbackRelated;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Organization", name: post.author },
            publisher: { "@type": "Organization", name: "AutovateNow", logo: { "@type": "ImageObject", url: "https://autovaternow.com/images/logo.png" } },
            datePublished: post.date,
            keywords: post.tags.join(", "),
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://autovaternow.com/blog/${post.slug}` },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <Header />
      <main>
        {/* Article Hero */}
        <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-blue-mid pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-blue-100 line-clamp-1">{post.title}</span>
            </nav>
            <span className="inline-block px-3 py-1 bg-white/15 text-blue-200 text-xs font-semibold rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-5 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-blue-300">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
              <span>By {post.author} · {post.authorTitle}</span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <article>
              {/* Answer-first GEO block */}
              <div className="bg-brand-blue-light rounded-2xl p-6 border-l-4 border-brand-blue mb-8">
                <p className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-2">Quick Answer</p>
                <p className="text-text-primary text-base leading-relaxed">{post.excerpt}</p>
              </div>

              {/* Article Body */}
              <div
                className="prose-healthcare"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n## /g, '\n<h2>').replace(/\n### /g, '\n<h3>').replace(/\n\n/g, '<br/><br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>') }}
              />

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Tags</div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-brand-blue-light text-brand-blue text-xs font-medium rounded-full">{tag}</span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {post.faqs.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-heading font-bold text-xl text-text-primary mb-6">Frequently Asked Questions</h2>
                  <FAQAccordion items={post.faqs} />
                </div>
              )}

              {/* Author Box */}
              <div className="mt-10 bg-surface-gray rounded-2xl border border-border p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center font-heading font-bold text-brand-blue flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm text-text-primary">{post.author}</div>
                  <div className="text-xs text-text-muted mb-2">{post.authorTitle}</div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    AutovateNow is a healthcare-specialist digital marketing growth partner. We help clinics, hospitals, and healthcare professionals across India build their digital presence, authority, and patient pipeline.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Inline CTA */}
              <div className="bg-cta-gradient rounded-2xl p-6 text-center sticky top-24">
                <div className="font-heading font-bold text-lg text-white mb-2">Grow your clinic</div>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Book a free growth consultation and find out exactly what your practice needs.
                </p>
                <CTAButton href="/book-a-growth-session" variant="gold" id="blog-sidebar-cta" className="w-full justify-center">
                  Book a Growth Session
                </CTAButton>
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-2xl border border-border p-5">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Related Articles</div>
                  <div className="space-y-4">
                    {relatedPosts.slice(0, 3).map((related) => (
                      <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                        <div className="text-sm font-semibold text-text-primary group-hover:text-brand-blue transition-colors leading-snug mb-1">{related.title}</div>
                        <div className="text-xs text-text-muted flex items-center gap-1">{related.readTime} <ArrowRight size={10} /></div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
