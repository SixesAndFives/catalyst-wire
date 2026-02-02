import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Building2, Users, FileText } from "lucide-react"

const services = [
  { title: "Market Research", href: "/services/market-research", icon: FileText },
  { title: "Capital Markets Intelligence", href: "/services/capital-markets-intelligence", icon: TrendingUp },
  { title: "Deal Structuring", href: "/services/deal-structuring", icon: Building2 },
  { title: "Strategic Advisory", href: "/services/strategic-advisory", icon: Users },
]

export default function CapitalMarketsIntelligencePage() {
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
              Capital Markets Intelligence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Catalyst Wire helps you read the market with clarity—connecting macro signals, sector dynamics, and capital
              flows to the decisions that matter most.
            </p>

            <div className="mt-8 space-y-5 text-foreground">
              <p className="leading-relaxed">
                In fast-changing environments, the narrative can move faster than the fundamentals. We translate what’s
                happening across rates, liquidity, deal activity, and sentiment into practical intelligence you can use
                to time, position, and communicate.
              </p>
              <p className="leading-relaxed">
                Our work is built to support strategy and execution—whether you’re planning a raise, preparing for
                investor conversations, or sharpening how you describe your opportunity against a shifting benchmark.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 font-serif text-2xl font-semibold">What we deliver</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Market signal synthesis</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A clear view of the forces shaping risk appetite: rates, liquidity, spreads, and investor behavior.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Capital flow & comps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comparable narratives, valuations, and recent raises to anchor expectations and positioning.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Timing & readiness guidance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A pragmatic view on when to lean in, what to de-risk, and what to emphasize in messaging.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Investor narrative support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Helping you connect your story to what investors are underwriting right now.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 font-serif text-2xl font-semibold">When to use this</h2>
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Pre-raise planning: align on valuation anchors and current investor focus.</li>
                  <li>Board & stakeholder updates: contextualize your operating plan against market conditions.</li>
                  <li>Positioning refresh: sharpen differentiation when the category benchmark shifts.</li>
                  <li>Strategic decisions: evaluate M&amp;A, partnerships, and capital structure tradeoffs.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="mb-3 text-sm font-semibold text-muted-foreground">Capital markets intelligence</div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/capitalmarketsintelligence.jpg"
                    alt="Capital markets intelligence"
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
                      aria-current={service.href === "/services/capital-markets-intelligence" ? "page" : undefined}
                      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 ${
                        service.href === "/services/capital-markets-intelligence" ? "bg-muted/50" : ""
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
