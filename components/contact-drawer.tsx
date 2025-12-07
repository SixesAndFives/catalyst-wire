"use client"

import type { ReactNode } from "react"
import { useState } from "react"

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LegalLink } from "@/components/legal-drawer"

interface ContactDrawerLinkProps {
  children: ReactNode
  className?: string
}

export function ContactDrawerLink({ children, className }: ContactDrawerLinkProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className ?? "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"}
      >
        {children}
      </button>
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <div className="flex h-full flex-col">
            <DrawerHeader className="border-b border-border">
              <DrawerTitle className="font-serif text-xl font-semibold">Contact Catalyst Wire</DrawerTitle>
              <DrawerDescription>
                Share a bit about what you&apos;re looking for, and we&apos;ll review your note as we refine the
                long-term workflow.
              </DrawerDescription>
            </DrawerHeader>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="drawer-firstName" className="text-sm font-medium text-foreground">
                      First name
                    </label>
                    <Input
                      id="drawer-firstName"
                      name="firstName"
                      placeholder="First name"
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="drawer-lastName" className="text-sm font-medium text-foreground">
                      Last name
                    </label>
                    <Input
                      id="drawer-lastName"
                      name="lastName"
                      placeholder="Last name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="drawer-email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="drawer-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="drawer-message" className="text-sm font-medium text-foreground">
                    What are you reaching out about?
                  </label>
                  <Textarea
                    id="drawer-message"
                    name="message"
                    placeholder="Tell us a bit about your question, company, or opportunity."
                    rows={5}
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="w-full sm:w-auto" disabled>
                    Submit
                  </Button>
                </div>
              </form>
            </div>

            <div className="border-t border-border px-4 py-3 flex justify-end">
              <DrawerClose asChild>
                <Button variant="outline" size="sm">
                  Close
                </Button>
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
