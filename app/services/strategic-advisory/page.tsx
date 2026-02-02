import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Building2, Users, FileText } from "lucide-react"

const services = [
  { title: "Market Research", href: "/services/market-research", icon: FileText },
  { title: "Capital Markets Intelligence", href: "/services/capital-markets-intelligence", icon: TrendingUp },
  { title: "Deal Structuring", href: "/services/deal-structuring", icon: Building2 },
  { title: "Strategic Advisory", href: "/services/strategic-advisory", icon: Users },
]

export default function StrategicAdvisoryPage() {
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
              Strategic Advisory
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Catalyst Wire partners with founders and teams to sharpen strategy, strengthen execution, and build
              narratives that earn conviction.
            </p>

            <div className="mt-8 space-y-5 text-foreground">
              <p className="leading-relaxed">
                High-growth companies often face a familiar challenge: the product is working, momentum is real, but the
                story and the operating plan aren’t yet crisp enough to scale capital, customers, or partnerships.
              </p>
              <p className="leading-relaxed">
                We help you clarify your wedge, define what "winning" looks like in your category, and translate that
                clarity into the priorities, metrics, and messaging that move stakeholders.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 font-serif text-2xl font-semibold">What we deliver</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Positioning & differentiation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A category narrative, wedge articulation, and clarity on why you win (and why now).
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Operating plan alignment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Translating strategy into milestones, metrics, and sequencing that the team can execute.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Investor & stakeholder readiness</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tightening messaging, materials, and decision logic for board and investor conversations.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Strategic decision support</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Frameworks for pricing, partnerships, market entry, and build-vs-buy decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 font-serif text-2xl font-semibold">When to use this</h2>
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Before scaling: align the team on the wedge, ICP, and sequencing.</li>
                  <li>Before a raise: pressure-test the story and the milestones investors will underwrite.</li>
                  <li>At an inflection: new market entry, pricing shift, or GTM reorientation.</li>
                  <li>During uncertainty: clarify tradeoffs and focus when the path is noisy.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="mb-3 text-sm font-semibold text-muted-foreground">Strategic advisory</div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/strategicadvisory.jpeg"
                    alt="Strategic advisory"
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
                      aria-current={service.href === "/services/strategic-advisory" ? "page" : undefined}
                      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 ${
                        service.href === "/services/strategic-advisory" ? "bg-muted/50" : ""
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
