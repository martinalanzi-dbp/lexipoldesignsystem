import type { Metadata } from "next"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { EditModeProvider } from "@/components/edit-mode-provider"
import { PasswordProtection } from "@/components/password-protection"
import "./globals.css"

export const metadata: Metadata = {
  title: "Solar Design System Documentation",
  description: "Comprehensive documentation for the Solar Design System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PasswordProtection>
          <EditModeProvider>
            <div className="min-h-screen bg-background">
              <LayoutWrapper>{children}</LayoutWrapper>
            </div>
          </EditModeProvider>
        </PasswordProtection>
      </body>
    </html>
  )
}

