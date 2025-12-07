"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { supabaseClient } from "@/lib/supabaseClient"

export function NewsSubscribeForm() {
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
      source: "news_section",
    })

    if (error) {
      console.error("Error subscribing:", error)
      setError("Something went wrong. Please try again.")
    } else {
      setMessage("Subscribed.")
      setEmail("")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
        <Input
          type="email"
          placeholder="Enter your email"
          className="sm:w-64"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="group whitespace-nowrap" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </form>
      {message && <p className="text-xs text-muted-foreground">{message}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
