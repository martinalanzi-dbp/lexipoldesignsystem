import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface BreadcrumbProps {
  items: Array<{ label: string; path?: string }>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          )}
          {item.path ? (
            <Link
              href={item.path}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground text-sm">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

