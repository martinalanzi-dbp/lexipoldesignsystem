"use client"

import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"
import { useState } from "react"
import { Copy, Check } from "lucide-react"

type TokenCategory = {
  name: string
  description?: string
  tokens: Array<{
    name: string
    token: string
    value: string
    type: "color" | "size" | "shadow" | "radius" | "font" | "spacing" | "other"
    preview?: string
  }>
}

const tokenCategories: TokenCategory[] = [
  {
    name: "Typography",
    description: "Font sizes, weights, and line heights for text elements",
    tokens: [
      {
        name: "Heading 1",
        token: "--text-h1",
        value: "44px",
        type: "size",
        preview: "Heading 1",
      },
      {
        name: "Heading 2",
        token: "--text-h2",
        value: "32px",
        type: "size",
        preview: "Heading 2",
      },
      {
        name: "Heading 3",
        token: "--text-h3",
        value: "24px",
        type: "size",
        preview: "Heading 3",
      },
      {
        name: "Heading 4",
        token: "--text-h4",
        value: "18px",
        type: "size",
        preview: "Heading 4",
      },
      {
        name: "Body",
        token: "--text-base",
        value: "16px",
        type: "size",
        preview: "Body text",
      },
      {
        name: "Small",
        token: "--text-sm",
        value: "14px",
        type: "size",
        preview: "Small text",
      },
      {
        name: "Extra Small",
        token: "--text-xs",
        value: "12px",
        type: "size",
        preview: "Extra small text",
      },
      {
        name: "Font Weight Normal",
        token: "--font-weight-normal",
        value: "400",
        type: "font",
      },
      {
        name: "Font Weight Medium",
        token: "--font-weight-medium",
        value: "500",
        type: "font",
      },
    ],
  },
  {
    name: "Colors",
    description: "Color tokens for backgrounds, text, and UI elements",
    tokens: [
      {
        name: "Background",
        token: "--background",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Foreground",
        token: "--foreground",
        value: "rgba(18, 25, 38, 1.00)",
        type: "color",
        preview: "rgba(18, 25, 38, 1.00)",
      },
      {
        name: "Card",
        token: "--card",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Card Foreground",
        token: "--card-foreground",
        value: "rgba(54, 65, 82, 1.00)",
        type: "color",
        preview: "rgba(54, 65, 82, 1.00)",
      },
      {
        name: "Popover",
        token: "--popover",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Popover Foreground",
        token: "--popover-foreground",
        value: "rgba(54, 65, 82, 1.00)",
        type: "color",
        preview: "rgba(54, 65, 82, 1.00)",
      },
      {
        name: "Primary",
        token: "--primary",
        value: "rgba(0, 75, 135, 1.00)",
        type: "color",
        preview: "rgba(0, 75, 135, 1.00)",
      },
      {
        name: "Primary Foreground",
        token: "--primary-foreground",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Secondary",
        token: "--secondary",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Secondary Foreground",
        token: "--secondary-foreground",
        value: "rgba(18, 25, 38, 1.00)",
        type: "color",
        preview: "rgba(18, 25, 38, 1.00)",
      },
      {
        name: "Muted",
        token: "--muted",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Muted Foreground",
        token: "--muted-foreground",
        value: "rgba(154, 164, 178, 1.00)",
        type: "color",
        preview: "rgba(154, 164, 178, 1.00)",
      },
      {
        name: "Accent",
        token: "--accent",
        value: "rgba(52, 199, 89, 1.00)",
        type: "color",
        preview: "rgba(52, 199, 89, 1.00)",
      },
      {
        name: "Accent Foreground",
        token: "--accent-foreground",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Destructive",
        token: "--destructive",
        value: "rgba(239, 68, 68, 1.00)",
        type: "color",
        preview: "rgba(239, 68, 68, 1.00)",
      },
      {
        name: "Destructive Foreground",
        token: "--destructive-foreground",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Border",
        token: "--border",
        value: "rgba(227, 232, 239, 1.00)",
        type: "color",
        preview: "rgba(227, 232, 239, 1.00)",
      },
      {
        name: "Input",
        token: "--input",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Input Background",
        token: "--input-background",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Ring",
        token: "--ring",
        value: "rgba(0, 75, 135, 1.00)",
        type: "color",
        preview: "rgba(0, 75, 135, 1.00)",
      },
    ],
  },
  {
    name: "Sidebar Colors",
    description: "Color tokens specific to the sidebar component",
    tokens: [
      {
        name: "Sidebar",
        token: "--sidebar",
        value: "rgba(0, 0, 0, 0)",
        type: "color",
        preview: "rgba(0, 0, 0, 0)",
      },
      {
        name: "Sidebar Foreground",
        token: "--sidebar-foreground",
        value: "rgba(75, 85, 101, 1.00)",
        type: "color",
        preview: "rgba(75, 85, 101, 1.00)",
      },
      {
        name: "Sidebar Primary",
        token: "--sidebar-primary",
        value: "rgba(0, 75, 135, 1.00)",
        type: "color",
        preview: "rgba(0, 75, 135, 1.00)",
      },
      {
        name: "Sidebar Primary Foreground",
        token: "--sidebar-primary-foreground",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Sidebar Accent",
        token: "--sidebar-accent",
        value: "rgba(0, 75, 135, 1.00)",
        type: "color",
        preview: "rgba(0, 75, 135, 1.00)",
      },
      {
        name: "Sidebar Accent Foreground",
        token: "--sidebar-accent-foreground",
        value: "rgba(255, 255, 255, 1.00)",
        type: "color",
        preview: "rgba(255, 255, 255, 1.00)",
      },
      {
        name: "Sidebar Border",
        token: "--sidebar-border",
        value: "rgba(227, 232, 239, 1.00)",
        type: "color",
        preview: "rgba(227, 232, 239, 1.00)",
      },
      {
        name: "Sidebar Ring",
        token: "--sidebar-ring",
        value: "rgba(0, 75, 135, 1.00)",
        type: "color",
        preview: "rgba(0, 75, 135, 1.00)",
      },
    ],
  },
  {
    name: "Border Radius",
    description: "Border radius values for rounded corners",
    tokens: [
      {
        name: "Radius",
        token: "--radius",
        value: "4px",
        type: "radius",
      },
      {
        name: "Radius Large",
        token: "--radius-lg",
        value: "8px",
        type: "radius",
      },
      {
        name: "Radius Full",
        token: "--radius-full",
        value: "100px",
        type: "radius",
      },
    ],
  },
  {
    name: "Elevations",
    description: "Box shadow tokens for depth and elevation",
    tokens: [
      {
        name: "Elevation Small",
        token: "--elevation-sm",
        value: "0px 1px 2px 0px rgba(18, 25, 38, 0.05), 0px 0px 0px 1px rgba(0, 75, 135, 0.9)",
        type: "shadow",
      },
      {
        name: "Elevation Medium",
        token: "--elevation-md",
        value: "0px 2px 4px -2px rgba(75, 85, 101, 0.06), 0px 4px 8px -2px rgba(75, 85, 101, 0.10)",
        type: "shadow",
      },
      {
        name: "Elevation Large",
        token: "--elevation-lg",
        value: "0px 8px 8px -4px rgba(75, 85, 101, 0.03), 0px 20px 24px -4px rgba(75, 85, 101, 0.08)",
        type: "shadow",
      },
      {
        name: "Elevation Extra Large",
        token: "--elevation-xl",
        value: "0px 24px 44px 0px rgba(75, 85, 101, 0.14)",
        type: "shadow",
      },
    ],
  },
]

function TokenRow({ token }: { token: TokenCategory["tokens"][0] }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getPreview = () => {
    if (token.type === "color" && token.preview) {
      return (
        <div
          className="w-12 h-12 rounded border border-border"
          style={{ backgroundColor: token.preview }}
        />
      )
    }
    if (token.type === "size" && token.preview) {
      return (
        <div
          className="text-foreground"
          style={{ fontSize: token.value }}
        >
          {token.preview}
        </div>
      )
    }
    if (token.type === "radius") {
      return (
        <div
          className="w-12 h-12 bg-primary border border-border"
          style={{ borderRadius: token.value }}
        />
      )
    }
    if (token.type === "shadow") {
      return (
        <div
          className="w-12 h-12 bg-card border border-border rounded"
          style={{ boxShadow: token.value }}
        />
      )
    }
    return null
  }

  return (
    <div className="flex items-center gap-4 px-6 py-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
      <div className="w-[200px] flex-shrink-0">
        <p className="text-foreground text-sm font-medium">{token.name}</p>
      </div>
      <div className="w-[200px] flex-shrink-0">
        <button
          onClick={() => handleCopy(token.token)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-xs font-mono transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              {token.token}
            </>
          )}
        </button>
      </div>
      <div className="flex-1 flex items-center gap-4">
        <div className="flex-1">
          <code className="text-muted-foreground text-xs font-mono">{token.value}</code>
        </div>
        {getPreview() && (
          <div className="flex-shrink-0">{getPreview()}</div>
        )}
      </div>
    </div>
  )
}

function TokenCategorySection({ category }: { category: TokenCategory }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-foreground text-xl font-semibold">{category.name}</h3>
        {category.description && (
          <p className="text-muted-foreground text-sm">{category.description}</p>
        )}
      </div>

      <div className="border border-border rounded-lg overflow-hidden bg-card">
        <div className="flex items-center gap-4 px-6 py-4 bg-muted border-b border-border">
          <div className="w-[200px]">
            <p className="text-muted-foreground text-xs font-medium uppercase">Name</p>
          </div>
          <div className="w-[200px]">
            <p className="text-muted-foreground text-xs font-medium uppercase">Token</p>
          </div>
          <div className="flex-1">
            <p className="text-muted-foreground text-xs font-medium uppercase">Value</p>
          </div>
        </div>

        <div className="divide-y divide-border">
          {category.tokens.map((token, index) => (
            <TokenRow key={index} token={token} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TokensPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Tokens" }]} />
      <ComponentHeader 
        category="Foundations" 
        title="Design Tokens" 
      />

      <div className="flex flex-col gap-12">
        {tokenCategories.map((category, index) => (
          <TokenCategorySection key={index} category={category} />
        ))}
      </div>
    </div>
  )
}

