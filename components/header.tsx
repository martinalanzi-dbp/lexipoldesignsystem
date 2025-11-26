"use client"

import { Search, Pencil } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEditMode } from "@/components/edit-mode-provider"
import { cn } from "@/lib/utils"

const searchableItems = [
  { title: "Tokens", path: "/foundations/tokens", category: "Foundations" },
  { title: "Colors", path: "/foundations/colors", category: "Foundations" },
  { title: "Typography", path: "/foundations/typography", category: "Foundations" },
  { title: "Elevations", path: "/foundations/elevations", category: "Foundations" },
  { title: "Spacing", path: "/foundations/spacing", category: "Foundations" },
  { title: "Borders", path: "/foundations/borders", category: "Foundations" },
  { title: "Layout", path: "/foundations/layout", category: "Foundations" },
  { title: "Icons", path: "/foundations/icons", category: "Foundations" },
  { title: "Buttons", path: "/components/buttons", category: "Components" },
  { title: "X Component", path: "/components/x-component", category: "Components" },
]

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const router = useRouter()
  const { isEditMode, toggleEditMode } = useEditMode()

  const filteredItems = searchQuery
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const handleItemClick = (path: string) => {
    router.push(path)
    setSearchQuery("")
    setIsSearchFocused(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-card border-b border-border z-50">
      <div className="h-full p-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-foreground text-[20px]">Solar Design System</h1>
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative w-80">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>

            {isSearchFocused && filteredItems.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-popover border border-border rounded shadow-lg max-h-96 overflow-auto z-50">
                {filteredItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleItemClick(item.path)}
                    className="w-full px-4 py-3 text-left hover:bg-muted flex flex-col gap-1 border-b border-border last:border-b-0"
                  >
                    <div className="text-popover-foreground text-sm">{item.title}</div>
                    <div className="text-muted-foreground text-xs">{item.category}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={toggleEditMode}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded border transition-colors",
              isEditMode
                ? "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-accent"
                : "bg-input-background text-foreground border-border hover:bg-muted"
            )}
          >
            <Pencil className="w-4 h-4" />
            <span className="text-sm">Edit Mode</span>
          </button>
        </div>
      </div>
    </header>
  )
}

