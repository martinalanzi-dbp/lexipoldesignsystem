"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Lock } from "lucide-react"

const CORRECT_PASSWORD = "Lexipol123"
const STORAGE_KEY = "design-system-authenticated"

export function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
    // Check if user is already authenticated (only on client)
    if (typeof window !== "undefined") {
      try {
        const authenticated = localStorage.getItem(STORAGE_KEY) === "true"
        setIsAuthenticated(authenticated)
        
        // If authenticated and on home page, redirect to documentation
        if (authenticated && pathname === "/") {
          router.push("/foundations/colors")
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error)
        setIsAuthenticated(false)
      }
    }
    setIsLoading(false)
  }, [pathname, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true")
      setIsAuthenticated(true)
      router.push("/foundations/colors")
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }
  }

  // Show loading only on initial mount to prevent hydration mismatch
  if (!isMounted || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md px-6">
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">
                This site is password protected
              </h1>
              <p className="text-sm text-muted-foreground text-center">
                Enter the password to view this site
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError("")
                  }}
                  className="w-full px-4 py-2 bg-input-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  placeholder="Enter password"
                  autoFocus
                />
                {error && (
                  <p className="mt-2 text-sm text-destructive">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors font-medium"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

