import Image from "next/image"

export function MissionSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Mission
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At our core, we empower visionary individuals with ideas that are not just high-growth but also unique
                and game-changing.
              </p>
              <p>
                Our comprehensive merchant banking services encompass capital raising, deal structuring, and strategic
                advisory, but also provide a strong track record in funding early-stage, high-growth ventures.
              </p>
              <p>
                Our public equity strategy, grounded in principal investment, an entrepreneurial mindset, robust capital
                access, and the capability to expedite complex transactions, ensures that our clients benefit from a
                holistic and practical approach.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg lg:h-[500px]">
            <Image src="/financial-district-modern-architecture.jpg" alt="Modern financial district" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
