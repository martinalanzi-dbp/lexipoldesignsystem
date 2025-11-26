"use client"

interface DocsLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  lastUpdated?: string
}

export function DocsLayout({
  children,
  title,
  description,
  lastUpdated,
}: DocsLayoutProps) {
  return (
    <div>
      {/* Sticky Header */}
      <div className="sticky top-14 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border pb-6 mb-8 -mx-4 px-4 lg:-mx-8 lg:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground text-lg">{description}</p>
          )}
          {lastUpdated && (
            <p className="text-muted-foreground text-sm">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </div>
  )
}

