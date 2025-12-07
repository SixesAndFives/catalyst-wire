import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <FileQuestion className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/">
            <Button size="lg">Return to Home</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
