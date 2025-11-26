"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const foundationItems = [
  { title: "Colors", path: "/foundations/colors" },
  { title: "Typography", path: "/foundations/typography" },
  { title: "Spacing", path: "/foundations/spacing" },
  { title: "Shadows", path: "/foundations/elevations" },
  { title: "Borders", path: "/foundations/borders" },
  { title: "Breakpoints", path: "/foundations/breakpoints" },
  { title: "Z-Index", path: "/foundations/z-index" },
]

const componentItems = [
  { title: "Accordion", path: "/components/accordion" },
  { title: "Alert", path: "/components/alert" },
  { title: "Avatar", path: "/components/avatar" },
  { title: "Badge", path: "/components/badge" },
  { title: "Button", path: "/components/buttons" },
  { title: "Card", path: "/components/card" },
  { title: "Checkbox", path: "/components/checkbox" },
  { title: "Combobox", path: "/components/combobox" },
  { title: "Command", path: "/components/command" },
  { title: "Data Table", path: "/components/data-table" },
  { title: "Date Picker", path: "/components/date-picker" },
  { title: "Dialog", path: "/components/dialog" },
  { title: "Dropdown Menu", path: "/components/dropdown-menu" },
  { title: "Form", path: "/components/form" },
  { title: "Input", path: "/components/input" },
  { title: "Label", path: "/components/label" },
  { title: "Menubar", path: "/components/menubar" },
  { title: "Navigation Menu", path: "/components/navigation-menu" },
  { title: "Pagination", path: "/components/pagination" },
  { title: "Popover", path: "/components/popover" },
  { title: "Progress", path: "/components/progress" },
  { title: "Radio Group", path: "/components/radio-group" },
  { title: "Scroll Area", path: "/components/scroll-area" },
  { title: "Select", path: "/components/select" },
  { title: "Separator", path: "/components/separator" },
  { title: "Sheet", path: "/components/sheet" },
  { title: "Skeleton", path: "/components/skeleton" },
  { title: "Slider", path: "/components/slider" },
  { title: "Switch", path: "/components/switch" },
  { title: "Table", path: "/components/table" },
  { title: "Tabs", path: "/components/tabs" },
  { title: "Textarea", path: "/components/textarea" },
  { title: "Toast", path: "/components/toast" },
  { title: "Toggle", path: "/components/toggle" },
  { title: "Tooltip", path: "/components/tooltip" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [foundationsOpen, setFoundationsOpen] = useState(true)
  const [componentsOpen, setComponentsOpen] = useState(true)

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-muted border-r border-sidebar-border overflow-y-auto">
      <nav className="p-4">
        {/* Foundations Section */}
        <div className="mb-6">
          <button
            onClick={() => setFoundationsOpen(!foundationsOpen)}
            className="w-full flex items-center justify-between mb-2 text-sidebar-foreground hover:text-foreground text-xs transition-colors"
          >
            <span className="uppercase tracking-wider">Foundations</span>
            {foundationsOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {foundationsOpen && (
            <ul className="space-y-1">
              {foundationItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={cn(
                        "block px-3 py-2 rounded transition-colors underline",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-card hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Components Section */}
        <div>
          <button
            onClick={() => setComponentsOpen(!componentsOpen)}
            className="w-full flex items-center justify-between mb-2 text-sidebar-foreground hover:text-foreground text-xs transition-colors"
          >
            <span className="uppercase tracking-wider">Components</span>
            {componentsOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {componentsOpen && (
            <ul className="space-y-1">
              {componentItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={cn(
                        "block px-3 py-2 rounded transition-colors underline",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-card hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </nav>
    </aside>
  )
}

