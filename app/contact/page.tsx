"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LegalLink } from "@/components/legal-drawer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/40">
          <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary mb-3">Contact</p>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl mb-4">
                Let&apos;s connect about the companies and markets that matter.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Use the form below to get in touch about research, market narratives, potential collaborations, or
                general questions about Catalyst Wire. A member of our team will review your note and follow up as
                appropriate.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card/60 p-6 shadow-sm lg:p-8">
              <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mb-8 text-sm text-muted-foreground leading-relaxed">
                This form is a placeholder while we finalize the long-term workflow with the client. Feel free to use it
                as a guide for the information you would like visitors to share.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First name
                    </label>
                    <Input id="firstName" name="firstName" placeholder="First name" autoComplete="given-name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last name
                    </label>
                    <Input id="lastName" name="lastName" placeholder="Last name" autoComplete="family-name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    What are you reaching out about?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a bit about your question, company, or opportunity."
                    rows={5}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" className="w-full sm:w-auto" disabled>
                    Submit
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By reaching out, you acknowledge that this form is informational only. For details on how we handle
                    information, see our <LegalLink type="privacy">Privacy Policy</LegalLink>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
