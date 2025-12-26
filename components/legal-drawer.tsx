"use client"

import { useState, type ReactNode } from "react"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export type LegalDocumentType = "privacy" | "terms" | "disclaimer"

interface LegalLinkProps {
  type: LegalDocumentType
  children: ReactNode
}

export function LegalLink({ type, children }: LegalLinkProps) {
  const [open, setOpen] = useState(false)

  const getTitle = () => {
    switch (type) {
      case "privacy":
        return "Privacy Policy"
      case "terms":
        return "Terms of Service"
      case "disclaimer":
        return "Disclaimer"
    }
  }

  const getDescription = () => {
    switch (type) {
      case "privacy":
        return "How we collect, use, and protect your information."
      case "terms":
        return "The terms that govern your use of Catalyst Wire."
      case "disclaimer":
        return "Important limitations and disclosures related to content on Catalyst Wire."
    }
  }

  const getBody = () => {
    switch (type) {
      case "privacy":
        return (
          <>
            <p>
              Catalyst Wire respects your privacy. We collect only the information necessary to operate our services,
              improve the product, and communicate with you about insights, research, and platform updates.
            </p>
            <p>
              This may include contact details you provide (such as your name and email address), basic usage data, and
              technical information like device and browser type. We do not sell your personal information.
            </p>
            <p>
              We use industry-standard security measures to protect your data and limit access to team members who need
              it to perform their work. From time to time, we may work with trusted service providers who help us send
              email, host infrastructure, or analyze anonymized usage patterns.
            </p>
            <p>
              By using Catalyst Wire, you consent to this collection and use of information. If you have questions or
              would like to request access, correction, or deletion of your data, please contact us using the details on
              our Contact page.
            </p>
          </>
        )
      case "terms":
        return (
          <>
            <p>
              Catalyst Wire is an informational platform focused on public companies, market narratives, and strategic
              capital insights. Nothing on this site constitutes investment, legal, tax, or other professional advice.
            </p>
            <p>
              By accessing or using Catalyst Wire, you agree not to rely solely on the information provided here when
              making investment or business decisions. You are responsible for conducting your own due diligence and, as
              appropriate, consulting qualified professional advisors.
            </p>
            <p>
              We strive for accuracy but do not guarantee that any information is complete, timely, or free from
              errors. Content may be updated, corrected, or removed at any time without notice. Your continued use of
              the site following changes to these terms constitutes acceptance of the updated terms.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the service at our discretion and to
              restrict access where required by law or regulation.
            </p>
          </>
        )
      case "disclaimer":
        return (
          <>
            <p>
              The content on this website (including articles, posts, emails, and any linked materials) is for
              informational and educational purposes only and does not constitute investment, legal, tax, or other
              professional advice. The authors, CatalystWire and/or its affiliates may, from time to time, own shares,
              options, warrants, or other securities of the companies mentioned or discussed. Nothing on this site is,
              or should be construed as, a recommendation, solicitation, or offer to buy or sell any security, or to
              participate in any private or public financing or other transaction. All opinions expressed are solely
              those of the author(s) as of the date of publication and are subject to change without notice. You should
              assume that we may be biased and that we may benefit from any change in the value of the securities we
              discuss. Always do your own research and due diligence, and consult with a qualified, registered
              financial advisor, broker, or other investment professional before making any investment decision. To the
              maximum extent permitted by law, neither the authors nor CatalystWire accept any liability whatsoever for
              any loss or damage (including without limitation any direct, indirect, or consequential loss) arising
              from any use of, or reliance on, any information contained on this website or in any linked materials.
            </p>
          </>
        )
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
      >
        {children}
      </button>
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <div className="flex h-full flex-col">
            <DrawerHeader className="border-b border-border">
              <DrawerTitle className="font-serif text-xl font-semibold">
                {getTitle()}
              </DrawerTitle>
              <DrawerDescription>{getDescription()}</DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="flex-1 px-4 py-4">
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                {getBody()}
              </div>
            </ScrollArea>
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
