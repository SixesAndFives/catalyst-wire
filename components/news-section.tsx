import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Clock, Zap, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { sanityClient } from "@/lib/sanity"
import { urlFor } from "@/lib/sanityImage"
import { NewsSubscribeForm } from "@/components/news-subscribe-form"

async function getArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc)[0...6]{
    _id,
    title,
    'slug': slug.current,
    summary,
    publishedAt,
    source,
    category,
    mainImage
  }`

  return sanityClient.fetch(query)
}

export async function NewsSection() {
  const articles = await getArticles()

  return (
    <section id="news" className="bg-secondary/5 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex-1">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <Zap className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">The Wire</h2>
            </div>
            <p className="text-muted-foreground">
              Latest insights and analysis on public companies and capital markets
            </p>
          </div>
          <NewsSubscribeForm />
        </div>

        <div className="mb-8 flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">Follow The Wire:</span>
          <div className="flex items-center gap-3">
            <Link
              href="https://twitter.com/catalystwire"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary hover:border-secondary"
            >
              <Twitter className="h-4 w-4 text-foreground" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com/catalystwire"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary hover:border-secondary"
            >
              <Instagram className="h-4 w-4 text-foreground" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://youtube.com/@catalystwire"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-secondary hover:border-secondary"
            >
              <Youtube className="h-4 w-4 text-foreground" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article: any, index: number) => (
            <Card
              key={article._id}
              className={`group cursor-pointer overflow-hidden border border-border bg-card transition-all hover:shadow-lg ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Link href={`/news/${article.slug}`} className="block">
                <div className={`flex ${index === 0 ? "flex-col lg:flex-row" : "flex-col"} gap-0`}>
                  <div className={`relative overflow-hidden ${index === 0 ? "lg:w-2/5" : "w-full"}`}>
                    <div className={`relative ${index === 0 ? "h-64 lg:h-full" : "h-48"}`}>
                      <Image
                        src={article.mainImage ? urlFor(article.mainImage).width(800).height(450).url() : "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className={`p-6 ${index === 0 ? "lg:w-3/5 lg:p-8" : ""}`}>
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                      {article.publishedAt && (
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                      )}
                      {article.source && (
                        <>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{article.source}</span>
                        </>
                      )}
                      {article.category && (
                        <span className="ml-auto rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                          {article.category}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`mb-3 font-serif font-semibold tracking-tight text-card-foreground transition-colors group-hover:text-secondary ${
                        index === 0 ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
                      } text-balance`}
                    >
                      {article.title}
                    </h3>
                    {article.summary && (
                      <p className="text-muted-foreground leading-relaxed">{article.summary}</p>
                    )}
                    <div className="mt-4 flex items-center text-sm font-medium text-secondary">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
