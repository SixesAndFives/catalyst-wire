import Link from "next/link"
import { LegalLink } from "@/components/legal-drawer"
import { ContactDrawerLink } from "@/components/contact-drawer"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <span className="font-serif text-lg font-bold text-primary-foreground">C</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">Catalyst Wire</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for public company intelligence and strategic capital market insights.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Capital Markets
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Deal Structuring
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Market Research
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <ContactDrawerLink className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </ContactDrawerLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LegalLink type="privacy">Privacy Policy</LegalLink>
              </li>
              <li>
                <LegalLink type="terms">Terms of Service</LegalLink>
              </li>
              <li>
                <LegalLink type="disclaimer">Disclaimer</LegalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Catalyst Wire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
