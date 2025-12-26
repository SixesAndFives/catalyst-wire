import Link from "next/link"
import Image from "next/image"

import { Card } from "@/components/ui/card"
import { sanityClient } from "@/lib/sanity"
import { urlFor } from "@/lib/sanityImage"

type SearchParams = {
  page?: string
}

const PAGE_SIZE = 20

async function getTotalArticles() {
  return sanityClient.fetch<number>(`count(*[_type == "article"])`)
}

async function getArticlesPage(page: number) {
  const start = (page - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE

  const articles = await sanityClient.fetch(
    `*[_type == "article"] | order(publishedAt desc)[$start...$end]{
      _id,
      title,
      'slug': slug.current,
      summary,
      primaryTicker,
      tickers,
      publishedAt,
      source,
      category,
      mainImage
    }`,
    { start, end },
  )

  return { articles }
}

export default async function TheWirePage({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  const pageParam = searchParams?.page ? Number.parseInt(searchParams.page, 10) : 1
  const requestedPage = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1

  const total = await getTotalArticles()
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const page = Math.min(requestedPage, totalPages)

  const { articles } = await getArticlesPage(page)

  const prevPage = page > 1 ? page - 1 : null
  const nextPage = page < totalPages ? page + 1 : null

  return (
    <section className="bg-secondary/5 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">The Wire</h1>
          <p className="mt-3 text-muted-foreground">
            Latest insights and analysis on public companies and capital markets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: any) => (
            <Card
              key={article._id}
              className="group overflow-hidden border border-border bg-card transition-all hover:shadow-lg"
            >
              <Link href={`/news/${article.slug}`} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.mainImage ? urlFor(article.mainImage).width(800).height(450).url() : "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    {article.publishedAt && <span>{new Date(article.publishedAt).toLocaleDateString()}</span>}
                    {article.source && (
                      <>
                        <span>•</span>
                        <span>{article.source}</span>
                      </>
                    )}
                    {article.category && (
                      <span className="ml-auto rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                        {article.category}
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-xl font-semibold tracking-tight text-card-foreground group-hover:text-secondary text-balance">
                    {article.title}
                  </h2>

                  {article.summary && (
                    <p className="mt-3 line-clamp-3 text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
                  )}
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-sm">
          {prevPage ? (
            <Link
              href={`/the-wire?page=${prevPage}`}
              className="rounded-md border border-border bg-background px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Previous
            </Link>
          ) : (
            <span className="rounded-md border border-border bg-background px-4 py-2 text-muted-foreground/50">
              Previous
            </span>
          )}

          <span className="px-2 text-muted-foreground">
            Page {page} of {totalPages}
          </span>

          {nextPage ? (
            <Link
              href={`/the-wire?page=${nextPage}`}
              className="rounded-md border border-border bg-background px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Next
            </Link>
          ) : (
            <span className="rounded-md border border-border bg-background px-4 py-2 text-muted-foreground/50">
              Next
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
