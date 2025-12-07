"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabaseClient } from "@/lib/supabaseClient"

interface ArticleSubscribeFormProps {
  articleSlug: string
}

export function ArticleSubscribeForm({ articleSlug }: ArticleSubscribeFormProps) {
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
      source: "article_page",
    })

    if (error) {
      console.error("Error subscribing from article page:", error)
      setError("Something went wrong. Please try again.")
    } else {
      setMessage("You are subscribed. Thank you.")
      setEmail("")
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <Input
        type="email"
        placeholder="Enter your email"
        className="sm:w-80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button size="lg" className="group" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
      {message && <p className="w-full text-center text-sm text-foreground/80">{message}</p>}
      {error && <p className="w-full text-center text-sm text-red-500">{error}</p>}
    </form>
  )
}
