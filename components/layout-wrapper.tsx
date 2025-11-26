"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  if (isHomePage) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <div className="flex pt-14">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-[960px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

