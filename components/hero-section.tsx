export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-12 lg:py-16">
      <div className="absolute inset-0 -z-10">
        <img src="/modern-financial-market-data-graphs-and-charts-pro.jpg" alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/5"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
            </span>
            <span className="text-muted-foreground">Real-time market intelligence</span>
          </div>
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Comprehensive Merchant Bank Services
          </h1>
          <p className="mb-8 text-lg text-muted-foreground text-balance leading-relaxed">
            Empowering visionary individuals with ideas that are not just high-growth but also unique and game-changing.
            Your trusted source for public company intelligence and strategic capital market insights.
          </p>
        </div>
      </div>
    </section>
  )
}
