import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="border-b border-border bg-muted/40">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary mb-3">
                About Catalyst Wire
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl mb-4">
                Independent intelligence at the intersection of capital and innovation.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Catalyst Wire is built for investors, founders, and operators who need clear, actionable insight on
                public companies and the forces reshaping global markets.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <Image
                src="/nyc.jpg"
                alt="New York City skyline"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission - full width copy */}
      <section className="border-b border-border bg-background" id="about">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-20 max-w-4xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground lg:text-4xl">Our Mission</h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
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
      </section>

      {/* Yazan Bio */}
      <section className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24 max-w-5xl">
          <div className="mb-10 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
            <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background to-muted shadow-sm w-[300px] h-[450px]">
              <Image
                src="/yazan.png"
                alt="Yazan al Homsi"
                width={300}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary mb-2">Leadership</p>
              <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">Yazan al Homsi</h2>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                Venture Capitalist | Strategic Investor | ESG Advocate
              </p>

              <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  Yazan al Homsi is a venture capitalist and financial strategist whose career bridges the Middle East
                  and North America, specializing in identifying and scaling transformative small-cap companies across
                  sustainability, clean technology, and healthcare sectors.
                </p>
                <p>
                  Born in Saudi Arabia and educated at McGill University (Finance, 2004), al Homsi began his career
                  at Imperial Oil before co-founding a successful Montreal bistro, gaining firsthand entrepreneurial
                  experience. His trajectory accelerated at PricewaterhouseCoopers (PwC) in the Middle East, where he
                  spent over a decade leading financial due diligence, M&amp;A advisory, and IPO preparations across
                  diverse industries. Rising to director level, he earned his Chartered Financial Analyst (CFA)
                  designation while managing high-stakes transactions throughout Saudi Arabia and the UAE.
                </p>
                <p>
                  In 2017, al Homsi founded Founders Round Capital in Vancouver, establishing himself as a prominent
                  figure in Canada's small-cap investment landscape. The following year, he launched Catalyst
                  Communications DMCC in Dubai, creating a strategic bridge between North American innovation and
                  Middle Eastern capital markets. This dual presence enables him to identify cross-continental
                  opportunities and facilitate international partnerships that drive both financial returns and
                  meaningful environmental impact.
                </p>
                <p>
                  Al Homsi's investment philosophy centers on Environmental, Social, and Governance (ESG) principles,
                  emphasizing companies that combine technological innovation with sustainability. His portfolio spans
                  breakthrough ventures including Medicago (acquired for $357 million by Mitsubishi Pharma and Philip
                  Morris), Charbone Hydrogen Corporation in green hydrogen production, and Aduro Clean Technologies
                  (NASDAQ: ADUR, CSE: ACT, FSE: 9D5) in Hydrochemolytic / chemical recycling.
                </p>
                <p>
                  Recognized as a thought leader in sustainable venture capital, al Homsi champions the integration
                  of profitability with social responsibility. His unique multicultural perspective and extensive
                  financial expertise position him at the forefront of the global shift toward responsible investing,
                  where environmental stewardship and economic viability converge to create lasting value for
                  investors and society alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
