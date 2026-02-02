import Link from "next/link"
import { Card } from "@/components/ui/card"
import { TrendingUp, Building2, Users, FileText } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Capital Markets Intelligence",
    description:
      "Strategic insights and analysis for navigating complex capital markets with confidence and precision.",
    href: "/services/capital-markets-intelligence",
  },
  {
    icon: Building2,
    title: "Deal Structuring",
    description:
      "Comprehensive merchant banking services encompassing capital raising, deal structuring, and strategic advisory.",
    href: "/services/deal-structuring",
  },
  {
    icon: Users,
    title: "Strategic Advisory",
    description: "Expert guidance for early-stage, high-growth ventures with unique and game-changing business models.",
    href: "/services/strategic-advisory",
  },
  {
    icon: FileText,
    title: "Market Research",
    description: "In-depth research and analysis providing a strong track record in funding innovative enterprises.",
    href: "/services/market-research",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Approach
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            We champion those tackling tough challenges and recognize the inefficiencies of markets in valuing
            early-stage potential. This creates unique opportunities for hypergrowth through strategic preparation and
            timely capital deployment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border border-border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-card-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

              <div className="mt-4">
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-secondary underline-offset-4 hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
