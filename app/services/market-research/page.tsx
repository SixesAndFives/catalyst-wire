import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Building2, Users, FileText } from "lucide-react"

const services = [
  {
    title: "Market Research",
    href: "/services/market-research",
    icon: FileText,
  },
  {
    title: "Capital Markets Intelligence",
    href: "/services/capital-markets-intelligence",
    icon: TrendingUp,
  },
  {
    title: "Deal Structuring",
    href: "/services/deal-structuring",
    icon: Building2,
  },
  {
    title: "Strategic Advisory",
    href: "/services/strategic-advisory",
    icon: Users,
  },
]

export default function MarketResearchPage() {
  return (
    <main className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <Link href="/" className="text-sm font-medium text-secondary underline-offset-4 hover:underline">
            Back to Home
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Market Research
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Catalyst Wire delivers research built for decision-making—clear, grounded, and tailored to the realities of
              early-stage and emerging markets.
            </p>

            <div className="mt-8 space-y-5 text-foreground">
              <p className="leading-relaxed">
                Whether you’re preparing for a capital raise, validating a go-to-market strategy, or pressure-testing a
                new thesis, our research helps you move from narrative to evidence.
              </p>
              <p className="leading-relaxed">
                We combine top-down market sizing with bottom-up operating assumptions, competitive mapping, and
                stakeholder analysis—so you can communicate the opportunity with confidence.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 font-serif text-2xl font-semibold">What we deliver</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Market landscape</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Category definition, competitive positioning, regulatory factors, and ecosystem mapping.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Sizing & growth</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    TAM/SAM/SOM frameworks with defensible assumptions and sensitivity analysis.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Customer & buyer insights</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ICP definition, jobs-to-be-done thinking, pricing signals, and adoption drivers.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Investment narrative support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clear charts, citations, and story structure to strengthen investor materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 font-serif text-2xl font-semibold">When to use this</h2>
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Pre-raise diligence: validate the market and frame the wedge.</li>
                  <li>Go-to-market planning: prioritize segments and channels.</li>
                  <li>Strategic pivoting: clarify where the category is heading.</li>
                  <li>Partnerships: articulate mutual value and ecosystem position.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="mb-3 text-sm font-semibold text-muted-foreground">Market research</div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/marketresearch.jpg"
                    alt="Market research"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, 100vw"
                    priority
                  />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 text-sm font-semibold text-muted-foreground">Explore services</div>
                <nav className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      aria-current={service.href === "/services/market-research" ? "page" : undefined}
                      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 ${
                        service.href === "/services/market-research" ? "bg-muted/50" : ""
                      }`}
                    >
                      <service.icon className="h-4 w-4 text-secondary" />
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
