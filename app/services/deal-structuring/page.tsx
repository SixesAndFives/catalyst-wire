import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Building2, Users, FileText } from "lucide-react"

const services = [
  { title: "Market Research", href: "/services/market-research", icon: FileText },
  { title: "Capital Markets Intelligence", href: "/services/capital-markets-intelligence", icon: TrendingUp },
  { title: "Deal Structuring", href: "/services/deal-structuring", icon: Building2 },
  { title: "Strategic Advisory", href: "/services/strategic-advisory", icon: Users },
]

export default function DealStructuringPage() {
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
              Deal Structuring
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Catalyst Wire helps you structure deals that align incentives, reduce friction, and support the outcome
              you’re actually trying to achieve.
            </p>

            <div className="mt-8 space-y-5 text-foreground">
              <p className="leading-relaxed">
                The best terms are the ones you can defend—and execute. We help you think through capital stack design,
                investor fit, governance, and timing so your raise supports momentum instead of introducing new
                constraints.
              </p>
              <p className="leading-relaxed">
                Our approach is pragmatic: structure should clarify the story, match the business model, and leave you
                room to operate.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 font-serif text-2xl font-semibold">What we deliver</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Round strategy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Instrument selection, target raise size, use of proceeds framing, and milestones that unlock the
                    next raise.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Term & governance design</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Thinking through voting, board composition, protective provisions, and alignment mechanisms.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Investor fit</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mapping investor incentives and underwriting style to your growth plan and risk profile.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-2 text-base font-semibold">Process readiness</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A clear path from narrative to diligence: materials, data room expectations, and timeline planning.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 font-serif text-2xl font-semibold">When to use this</h2>
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Before a raise: align on the cleanest structure for your stage and growth plan.</li>
                  <li>During inbound interest: compare offers and tradeoffs with a consistent framework.</li>
                  <li>Complex capital needs: think through tranches, strategic investors, or non-dilutive options.</li>
                  <li>Governance transitions: design decision-making that supports speed and accountability.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8">
              <div>
                <div className="mb-3 text-sm font-semibold text-muted-foreground">Deal structuring</div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/dealstructuring.jpeg"
                    alt="Deal structuring"
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
                      aria-current={service.href === "/services/deal-structuring" ? "page" : undefined}
                      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 ${
                        service.href === "/services/deal-structuring" ? "bg-muted/50" : ""
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
