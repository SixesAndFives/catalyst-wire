export interface Article {
  id: number
  title: string
  excerpt: string
  date: string
  source: string
  category: string
  image?: string
  author: string
  readTime: string
  content?: string
}

export const newsArticles: Article[] = [
  {
    id: 1,
    title: "Major Tech Companies Report Strong Q4 Earnings, Beating Wall Street Expectations",
    excerpt:
      "Leading technology firms posted robust quarterly results, signaling continued strength in the sector despite economic headwinds.",
    date: "March 15, 2024",
    source: "Market Watch",
    category: "Technology",
    image: "/tech-business-office-modern-workspace-analytics.jpg",
    author: "Sarah Mitchell",
    readTime: "5 min read",
    content: `
      <p>In a remarkable display of resilience, major technology companies have reported fourth-quarter earnings that significantly exceeded analyst expectations, reinforcing investor confidence in the sector's ability to navigate challenging macroeconomic conditions.</p>

      <h2>Strong Performance Across the Board</h2>
      <p>The earnings season has revealed consistent strength across multiple technology subsectors, with cloud computing, artificial intelligence, and enterprise software leading the charge. Companies reported revenue growth ranging from 12% to 28% year-over-year, demonstrating robust demand for digital transformation solutions.</p>

      <p>Cloud infrastructure services continued their upward trajectory, with major providers reporting increased adoption rates among both enterprise and small-to-medium business customers. The shift to hybrid work environments has accelerated digital infrastructure investments, creating sustained demand for cloud-based solutions.</p>

      <h2>AI Investment Drives Innovation</h2>
      <p>Artificial intelligence emerged as a key growth driver, with companies highlighting substantial investments in AI capabilities and the integration of machine learning technologies across their product portfolios. These investments are beginning to translate into tangible revenue streams and improved operational efficiencies.</p>

      <p>Enterprise customers are increasingly adopting AI-powered tools to enhance productivity, automate routine tasks, and gain deeper insights from their data. This trend has created new revenue opportunities for technology providers while also improving their own internal operations.</p>

      <h2>Market Outlook Remains Positive</h2>
      <p>Looking ahead, technology executives expressed cautious optimism about future growth prospects. While acknowledging potential macroeconomic challenges, companies pointed to strong customer pipelines, increasing digital transformation budgets, and the continued evolution of AI capabilities as reasons for confidence.</p>

      <p>Analysts note that the sector's strong performance reflects not only cyclical recovery but also structural shifts in how businesses operate and compete in an increasingly digital economy. The technology sector continues to demonstrate its critical role in driving innovation and economic growth.</p>
    `,
  },
  {
    id: 2,
    title: "Federal Reserve Signals Potential Rate Adjustments in Second Half of 2024",
    excerpt: "Central bank officials hint at possible policy shifts as inflation data shows signs of moderating.",
    date: "March 14, 2024",
    source: "Bloomberg",
    category: "Economics",
    image: "/federal-reserve-building-financial-markets.jpg",
    author: "Michael Chen",
    readTime: "4 min read",
    content: `
      <p>The Federal Reserve has indicated a potential shift in monetary policy during the latter half of 2024, as recent economic data suggests inflation is gradually returning to target levels while the labor market remains resilient.</p>

      <h2>Data-Driven Approach</h2>
      <p>Fed officials emphasized their commitment to data-dependent decision-making, noting that recent inflation readings have been encouraging. Core inflation metrics have shown consecutive months of decline, though they remain above the Fed's 2% target.</p>

      <p>The central bank's approach reflects a careful balance between controlling inflation and supporting economic growth. Officials acknowledged the progress made in taming price pressures while remaining vigilant about potential risks that could reignite inflationary trends.</p>

      <h2>Market Implications</h2>
      <p>Financial markets responded positively to the Fed's more balanced tone, with equity indices posting gains and bond yields adjusting to reflect expectations of a more accommodative policy stance later in the year.</p>

      <p>Investors are now pricing in multiple rate adjustments, which could provide support for interest-rate-sensitive sectors and potentially boost economic activity as borrowing costs moderate.</p>
    `,
  },
  {
    id: 3,
    title: "Renewable Energy Sector Attracts Record Investment in 2024",
    excerpt:
      "Clean energy projects see unprecedented capital inflows as sustainability becomes central to corporate strategy.",
    date: "March 13, 2024",
    source: "Reuters",
    category: "Energy",
    image: "/renewable-energy-solar-panels-wind-turbines.jpg",
    author: "Jennifer Wong",
    readTime: "6 min read",
    content: `
      <p>The renewable energy sector has experienced a historic surge in investment during the first quarter of 2024, with global capital commitments reaching new heights as corporations and governments accelerate their transition to sustainable energy sources.</p>

      <h2>Investment Trends</h2>
      <p>Solar and wind projects have attracted the lion's share of investment, with utility-scale developments leading the way. Energy storage solutions have also seen significant capital inflows, addressing one of the key challenges in renewable energy adoption – intermittency.</p>

      <p>The investment surge reflects both policy support and improving economics of renewable technologies. Cost declines in solar panels and battery storage have made clean energy increasingly competitive with traditional fossil fuel sources, even without subsidies in many markets.</p>

      <h2>Corporate Commitments</h2>
      <p>Major corporations across industries have announced ambitious renewable energy goals, with many committing to 100% renewable power for their operations by 2030. These commitments have created substantial demand for clean energy capacity and long-term power purchase agreements.</p>

      <p>The shift toward renewable energy is no longer just an environmental initiative but increasingly a strategic business decision, as companies seek to reduce energy costs, manage climate risks, and meet stakeholder expectations for sustainability.</p>
    `,
  },
  {
    id: 4,
    title: "Healthcare Innovation: Biotech Firms Make Breakthrough in Personalized Medicine",
    excerpt: "New genetic analysis techniques promise to revolutionize treatment approaches for chronic diseases.",
    date: "March 12, 2024",
    source: "Financial Times",
    category: "Healthcare",
    image: "/healthcare-biotech-laboratory-research.jpg",
    author: "Dr. Robert Anderson",
    readTime: "7 min read",
    content: `
      <p>Biotechnology companies have announced significant advances in personalized medicine, with new genetic analysis techniques that could transform how chronic diseases are diagnosed and treated, offering hope for millions of patients worldwide.</p>

      <h2>Technological Advancement</h2>
      <p>The breakthrough involves sophisticated genomic sequencing and artificial intelligence algorithms that can identify specific genetic markers associated with disease progression and treatment response. This technology enables healthcare providers to tailor treatments to individual patients' genetic profiles.</p>

      <p>Early clinical trials have shown promising results, with personalized treatment approaches demonstrating higher efficacy rates and fewer side effects compared to traditional one-size-fits-all protocols. The technology has particular applications in oncology, cardiovascular disease, and autoimmune disorders.</p>

      <h2>Market Impact</h2>
      <p>The innovations have generated significant investor interest in the biotech sector, with several companies seeing substantial valuation increases. Pharmaceutical giants are partnering with biotech firms to integrate personalized medicine approaches into their drug development pipelines.</p>

      <p>Healthcare economists project that personalized medicine could reduce overall treatment costs by improving outcomes and reducing adverse events, though initial implementation will require substantial investment in diagnostic infrastructure and clinician training.</p>
    `,
  },
  {
    id: 5,
    title: "Global Supply Chain Resilience Improves as Companies Diversify Operations",
    excerpt:
      "Businesses report enhanced operational flexibility following strategic restructuring and regionalization efforts.",
    date: "March 11, 2024",
    source: "Wall Street Journal",
    category: "Business",
    image: "/shipping-containers-global-logistics-ports.jpg",
    author: "Thomas Rodriguez",
    readTime: "5 min read",
    content: `
      <p>Major corporations across industries are reporting improved supply chain resilience following years of strategic restructuring efforts aimed at reducing vulnerability to global disruptions and enhancing operational flexibility.</p>

      <h2>Strategic Shifts</h2>
      <p>Companies have implemented multi-sourcing strategies, established regional manufacturing hubs, and invested in advanced supply chain visibility technologies. These initiatives have created more robust and adaptable supply networks capable of responding quickly to disruptions.</p>

      <p>The regionalization trend has accelerated, with many firms establishing manufacturing and distribution facilities closer to key markets. This approach reduces transportation costs, shortens lead times, and provides greater control over quality and production processes.</p>

      <h2>Technology Integration</h2>
      <p>Advanced analytics, artificial intelligence, and real-time tracking systems have become standard tools in supply chain management. These technologies enable companies to identify potential disruptions early and implement contingency plans proactively.</p>

      <p>The combination of strategic restructuring and technological innovation has positioned many companies to better navigate future challenges while maintaining competitive cost structures and service levels.</p>
    `,
  },
]

export function getArticleById(id: number): Article | undefined {
  return newsArticles.find((article) => article.id === id)
}

export function getRelatedArticles(currentId: number, limit = 3): Article[] {
  return newsArticles.filter((article) => article.id !== currentId).slice(0, limit)
}
