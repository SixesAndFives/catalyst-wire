"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"
import { supabaseClient } from "@/lib/supabaseClient"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage(null)
    setError(null)

    const { error } = await supabaseClient.from("catalystwire_subscribers").insert({
      email,
      source: "homepage_newsletter",
    })

    if (error) {
      console.error("Error subscribing:", error)
      setError("Something went wrong. Please try again.")
    } else {
      setMessage("You are subscribed. Thank you.")
      setEmail("")
    }

    setIsSubmitting(false)
  }

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 p-3">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Stay Ahead of the Market
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80 text-balance leading-relaxed">
            Join our newsletter to receive breaking news, in-depth analysis, and exclusive insights on public companies
            delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button type="submit" size="lg" variant="secondary" className="sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          {message && <p className="mt-4 text-sm text-primary-foreground/80">{message}</p>}
          {error && <p className="mt-4 text-sm text-red-100">{error}</p>}
          <p className="mt-4 text-sm text-primary-foreground/60">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
