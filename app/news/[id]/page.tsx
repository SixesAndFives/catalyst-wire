import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { sanityClient } from "@/lib/sanity"
import { urlFor } from "@/lib/sanityImage"
import { ArticleSubscribeForm } from "@/components/article-subscribe-form"

type Props = {
  params: Promise<{ id: string }>
}

const articleQuery = `*[_type == "article" && slug.current == $slug][0]{
  _id,
  title,
  'slug': slug.current,
  summary,
  publishedAt,
  source,
  category,
  author,
  primaryTicker,
  tickers,
  mainImage,
  body
}`

const relatedQuery = `*[_type == "article" && slug.current != $slug] | order(publishedAt desc)[0...3]{
  _id,
  title,
  'slug': slug.current,
  summary,
  publishedAt,
  category,
  mainImage
}`

export default async function ArticlePage(props: Props) {
  const params = await props.params
  const slug = params.id

  const article = await sanityClient.fetch(articleQuery, { slug })

  if (!article) {
    notFound()
  }

  const relatedArticles = await sanityClient.fetch(relatedQuery, { slug })

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Image Section */}
        <div className="relative h-[400px] w-full bg-muted lg:h-[500px]">
          <Image
            src={article.mainImage ? urlFor(article.mainImage).width(1600).height(900).url() : "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Article Header */}
            <div className="mb-8 mt-12 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                {article.category && (
                  <span className="rounded-full bg-secondary/10 px-3 py-1 font-medium text-secondary">
                    {article.category}
                  </span>
                )}
                {article.source && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{article.source}</span>
                  </>
                )}
              </div>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground text-balance lg:text-5xl">
                {article.title}
              </h1>

              {(article.primaryTicker || (article.tickers && article.tickers.length > 0)) && (
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
                  {article.primaryTicker && (
                    <span
                      className="inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-secondary border border-secondary/40 cursor-pointer"
                      role="button"
                    >
                      {article.primaryTicker}
                    </span>
                  )}
                  {article.tickers &&
                    article.tickers
                      .filter((t: string) => t && t !== article.primaryTicker)
                      .map((ticker: string) => (
                        <span
                          key={ticker}
                          className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-secondary/90 border border-secondary/25 cursor-pointer"
                          role="button"
                        >
                          {ticker}
                        </span>
                      ))}
                </div>
              )}

              {article.summary && (
                <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {article.summary}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 border-y border-border py-4 text-sm text-muted-foreground">
                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                )}
                {article.publishedAt && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg prose-slate max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-p:text-foreground/90 prose-p:mb-6">
              <PortableText
                value={article.body || []}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-6 leading-relaxed text-foreground/90">{children}</p>
                    ),
                  },
                  marks: {
                    link: ({children, value}) => {
                      const href = (value as any)?.href || '#'
                      return (
                        <a
                          href={href}
                          className="text-secondary underline-offset-4 hover:underline"
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {children}
                        </a>
                      )
                    },
                  },
                  types: {
                    image: ({ value }) => (
                      <figure className="my-8">
                        <Image
                          src={value ? urlFor(value).width(1200).url() : "/placeholder.svg"}
                          alt={value?.alt || article.title}
                          width={1200}
                          height={675}
                          className="w-full rounded-md object-cover"
                        />
                        {value?.caption && (
                          <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                            {value.caption}
                          </figcaption>
                        )}
                      </figure>
                    ),
                  },
                }}
              />
            </div>

            {/* Newsletter CTA */}
            <div className="my-16 rounded-lg border border-border bg-secondary/5 p-8 lg:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h3 className="mb-4 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                  Stay Informed with The Wire
                </h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Get the latest insights and analysis on public companies delivered directly to your inbox.
                </p>
                <ArticleSubscribeForm articleSlug={article.slug} />
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles?.length > 0 && (
              <div className="mb-16">
                <h2 className="mb-8 font-serif text-3xl font-bold text-foreground">More from The Wire</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedArticles.map((related: any) => (
                    <Card key={related._id} className="group overflow-hidden border border-border bg-card">
                      <Link href={`/news/${related.slug}`}>
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={related.mainImage ? urlFor(related.mainImage).width(800).height(450).url() : "/placeholder.svg"}
                            alt={related.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex flex-col gap-3">
                          <h3 className="font-serif text-lg font-semibold text-card-foreground transition-colors group-hover:text-secondary text-balance">
                            {related.title}
                          </h3>
                          {related.summary && (
                            <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                              {related.summary}
                            </p>
                          )}
                          <div className="mt-auto flex items-center text-sm font-medium text-secondary">
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityClient.fetch(
    `*[_type == "article" && defined(slug.current)]{ 'slug': slug.current }`
  )

  return slugs.map((item) => ({ id: item.slug }))
}
