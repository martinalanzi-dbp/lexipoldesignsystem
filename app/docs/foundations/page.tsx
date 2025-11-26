"use client"

import { DocsLayout } from "@/components/docs-layout"
import { cn } from "@/lib/utils"

// Color Token Component
interface ColorTokenProps {
  name: string
  token: string
  hex: string
  description?: string
}

function ColorToken({ name, token, hex, description }: ColorTokenProps) {
  const getContrastColor = (hex: string): string => {
    const cleanHex = hex.replace("#", "")
    const r = parseInt(cleanHex.substring(0, 2), 16)
    const g = parseInt(cleanHex.substring(2, 4), 16)
    const b = parseInt(cleanHex.substring(4, 6), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.5 ? "#000000" : "#FFFFFF"
  }

  return (
    <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card">
      <div
        className="w-16 h-16 rounded border border-border flex-shrink-0"
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-sm font-medium text-card-foreground">{name}</p>
          <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">
            {token}
          </code>
        </div>
        <p className="text-xs text-muted-foreground font-mono">{hex}</p>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  )
}

// Typography Token Component
interface TypographyTokenProps {
  name: string
  token: string
  fontSize: string
  lineHeight: string
  fontWeight?: string
  sampleText?: string
}

function TypographyToken({
  name,
  token,
  fontSize,
  lineHeight,
  fontWeight = "400",
  sampleText,
}: TypographyTokenProps) {
  const defaultSamples: Record<string, string> = {
    H1: "Heading 1",
    H2: "Heading 2",
    H3: "Heading 3",
    H4: "Heading 4",
    Body: "The quick brown fox jumps over the lazy dog",
  }

  const text = sampleText || defaultSamples[name] || "Sample text"

  return (
    <div className="flex flex-col gap-3 p-4 border border-border rounded-lg bg-card">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p
            className="text-foreground"
            style={{
              fontSize,
              lineHeight,
              fontWeight,
            }}
          >
            {text}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Token</p>
          <code className="text-xs bg-muted px-2 py-0.5 rounded text-primary">
            {token}
          </code>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Font Size</p>
          <p className="text-xs font-mono text-card-foreground">{fontSize}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Line Height</p>
          <p className="text-xs font-mono text-card-foreground">{lineHeight}</p>
        </div>
        {fontWeight && fontWeight !== "400" && (
          <div>
            <p className="text-xs text-muted-foreground mb-1">Font Weight</p>
            <p className="text-xs font-mono text-card-foreground">
              {fontWeight}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Spacing Token Component
interface SpacingTokenProps {
  name: string
  token: string
  value: string
  size: number
}

function SpacingToken({ name, token, value, size }: SpacingTokenProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="bg-primary rounded"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
      <div className="text-center">
        <p className="text-xs font-medium text-card-foreground">{name}</p>
        <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-primary">
          {token}
        </code>
        <p className="text-xs text-muted-foreground font-mono mt-1">{value}</p>
      </div>
    </div>
  )
}

export default function FoundationsPage() {
  // Color scales
  const colorScales = {
    primary: [
      { name: "Primary 50", token: "--primary-50", hex: "#E6F4FF" },
      { name: "Primary 100", token: "--primary-100", hex: "#CCE9FF" },
      { name: "Primary 200", token: "--primary-200", hex: "#99D3FF" },
      { name: "Primary 300", token: "--primary-300", hex: "#66BDFF" },
      { name: "Primary 400", token: "--primary-400", hex: "#33A7FF" },
      { name: "Primary 500", token: "--primary", hex: "#007AFF" },
      { name: "Primary 600", token: "--primary-600", hex: "#0062CC" },
      { name: "Primary 700", token: "--primary-700", hex: "#004A99" },
      { name: "Primary 800", token: "--primary-800", hex: "#003D7F" },
      { name: "Primary 900", token: "--primary-900", hex: "#002F66" },
    ],
    secondary: [
      { name: "Secondary 50", token: "--secondary-50", hex: "#F8F9FA" },
      { name: "Secondary 100", token: "--secondary-100", hex: "#F1F3F5" },
      { name: "Secondary 200", token: "--secondary-200", hex: "#E9ECEF" },
      { name: "Secondary 300", token: "--secondary-300", hex: "#DEE2E6" },
      { name: "Secondary 400", token: "--secondary-400", hex: "#CED4DA" },
      { name: "Secondary 500", token: "--secondary", hex: "#ADB5BD" },
      { name: "Secondary 600", token: "--secondary-600", hex: "#868E96" },
      { name: "Secondary 700", token: "--secondary-700", hex: "#495057" },
      { name: "Secondary 800", token: "--secondary-800", hex: "#343A40" },
      { name: "Secondary 900", token: "--secondary-900", hex: "#212529" },
    ],
    success: [
      { name: "Success 50", token: "--success-50", hex: "#E6FFF0" },
      { name: "Success 100", token: "--success-100", hex: "#CCFFE1" },
      { name: "Success 200", token: "--success-200", hex: "#99FFC3" },
      { name: "Success 300", token: "--success-300", hex: "#66FFA5" },
      { name: "Success 400", token: "--success-400", hex: "#33FF87" },
      { name: "Success 500", token: "--success", hex: "#34C759" },
      { name: "Success 600", token: "--success-600", hex: "#2A9F47" },
      { name: "Success 700", token: "--success-700", hex: "#1F7735" },
      { name: "Success 800", token: "--success-800", hex: "#1B6B2E" },
      { name: "Success 900", token: "--success-900", hex: "#155F25" },
    ],
    warning: [
      { name: "Warning 50", token: "--warning-50", hex: "#FFF8E6" },
      { name: "Warning 100", token: "--warning-100", hex: "#FFF1CC" },
      { name: "Warning 200", token: "--warning-200", hex: "#FFE399" },
      { name: "Warning 300", token: "--warning-300", hex: "#FFD566" },
      { name: "Warning 400", token: "--warning-400", hex: "#FFC733" },
      { name: "Warning 500", token: "--warning", hex: "#FF9500" },
      { name: "Warning 600", token: "--warning-600", hex: "#CC7700" },
      { name: "Warning 700", token: "--warning-700", hex: "#995900" },
      { name: "Warning 800", token: "--warning-800", hex: "#7F4A00" },
      { name: "Warning 900", token: "--warning-900", hex: "#663C00" },
    ],
    danger: [
      { name: "Danger 50", token: "--danger-50", hex: "#FFEDED" },
      { name: "Danger 100", token: "--danger-100", hex: "#FFDBDB" },
      { name: "Danger 200", token: "--danger-200", hex: "#FFB7B7" },
      { name: "Danger 300", token: "--danger-300", hex: "#FF9393" },
      { name: "Danger 400", token: "--danger-400", hex: "#FF6F6F" },
      { name: "Danger 500", token: "--danger", hex: "#FF3B30" },
      { name: "Danger 600", token: "--danger-600", hex: "#CC2F26" },
      { name: "Danger 700", token: "--danger-700", hex: "#99231C" },
      { name: "Danger 800", token: "--danger-800", hex: "#7F1E18" },
      { name: "Danger 900", token: "--danger-900", hex: "#661813" },
    ],
    neutral: [
      { name: "Neutral 50", token: "--neutral-50", hex: "#F8F8F8" },
      { name: "Neutral 100", token: "--neutral-100", hex: "#F0F0F0" },
      { name: "Neutral 200", token: "--neutral-200", hex: "#E0E0E0" },
      { name: "Neutral 300", token: "--neutral-300", hex: "#C0C0C0" },
      { name: "Neutral 400", token: "--neutral-400", hex: "#A0A0A0" },
      { name: "Neutral 500", token: "--neutral", hex: "#808080" },
      { name: "Neutral 600", token: "--neutral-600", hex: "#606060" },
      { name: "Neutral 700", token: "--neutral-700", hex: "#404040" },
      { name: "Neutral 800", token: "--neutral-800", hex: "#202020" },
      { name: "Neutral 900", token: "--neutral-900", hex: "#000000" },
    ],
  }

  // Typography tokens
  const typographyTokens = [
    {
      name: "H1",
      token: "--text-h1",
      fontSize: "44px",
      lineHeight: "1.5",
      fontWeight: "500",
      sampleText: "Heading 1",
    },
    {
      name: "H2",
      token: "--text-h2",
      fontSize: "32px",
      lineHeight: "1.5",
      fontWeight: "500",
      sampleText: "Heading 2",
    },
    {
      name: "H3",
      token: "--text-h3",
      fontSize: "24px",
      lineHeight: "1.5",
      fontWeight: "500",
      sampleText: "Heading 3",
    },
    {
      name: "H4",
      token: "--text-h4",
      fontSize: "18px",
      lineHeight: "1.5",
      fontWeight: "500",
      sampleText: "Heading 4",
    },
    {
      name: "Body",
      token: "--text-base",
      fontSize: "16px",
      lineHeight: "1.5",
      fontWeight: "400",
      sampleText:
        "The quick brown fox jumps over the lazy dog. This is body text used for paragraphs and general content.",
    },
    {
      name: "Small",
      token: "--text-sm",
      fontSize: "14px",
      lineHeight: "1.5",
      fontWeight: "400",
      sampleText: "Small text for captions and secondary information.",
    },
  ]

  // Spacing tokens (using Tailwind spacing scale)
  const spacingTokens = [
    { name: "XS", token: "spacing-1", value: "4px", size: 4 },
    { name: "SM", token: "spacing-2", value: "8px", size: 8 },
    { name: "MD", token: "spacing-3", value: "12px", size: 12 },
    { name: "LG", token: "spacing-4", value: "16px", size: 16 },
    { name: "XL", token: "spacing-6", value: "24px", size: 24 },
    { name: "2XL", token: "spacing-8", value: "32px", size: 32 },
    { name: "3XL", token: "spacing-12", value: "48px", size: 48 },
    { name: "4XL", token: "spacing-16", value: "64px", size: 64 },
  ]

  return (
    <DocsLayout
      title="Foundations"
      description="Design tokens that form the foundation of our design system, including colors, typography, and spacing."
      lastUpdated="January 15, 2025"
    >
      <div className="space-y-16">
        {/* Colors Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Colors</h2>
          <p className="text-muted-foreground mb-8">
            Our color system is built on semantic tokens that provide
            consistency across all interfaces. Each color scale ranges from 50
            (lightest) to 900 (darkest).
          </p>

          <div className="space-y-8">
            {Object.entries(colorScales).map(([scaleName, colors]) => (
              <div key={scaleName}>
                <h3 className="text-xl font-semibold mb-4 capitalize">
                  {scaleName}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {colors.map((color) => (
                    <ColorToken
                      key={color.token}
                      name={color.name}
                      token={color.token}
                      hex={color.hex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Typography</h2>
          <p className="text-muted-foreground mb-8">
            Typography tokens define the font sizes, line heights, and weights
            used throughout the design system. All text uses the Inter font
            family.
          </p>

          <div className="space-y-6">
            {typographyTokens.map((token) => (
              <TypographyToken
                key={token.token}
                name={token.name}
                token={token.token}
                fontSize={token.fontSize}
                lineHeight={token.lineHeight}
                fontWeight={token.fontWeight}
                sampleText={token.sampleText}
              />
            ))}
          </div>
        </section>

        {/* Spacing Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Spacing</h2>
          <p className="text-muted-foreground mb-8">
            Spacing tokens follow the Tailwind CSS spacing scale, providing
            consistent spacing throughout the interface. Use these tokens for
            margins, padding, and gaps.
          </p>

          <div className="flex flex-wrap items-end gap-8 p-8 bg-muted rounded-lg border border-border">
            {spacingTokens.map((token) => (
              <SpacingToken
                key={token.token}
                name={token.name}
                token={token.token}
                value={token.value}
                size={token.size}
              />
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg border border-border">
            <h4 className="text-sm font-semibold mb-4">Usage in Tailwind</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                Use these spacing values with Tailwind utility classes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>
                  <code className="bg-background px-1.5 py-0.5 rounded text-xs">
                    p-1
                  </code>{" "}
                  = 4px padding
                </li>
                <li>
                  <code className="bg-background px-1.5 py-0.5 rounded text-xs">
                    p-2
                  </code>{" "}
                  = 8px padding
                </li>
                <li>
                  <code className="bg-background px-1.5 py-0.5 rounded text-xs">
                    gap-4
                  </code>{" "}
                  = 16px gap
                </li>
                <li>
                  <code className="bg-background px-1.5 py-0.5 rounded text-xs">
                    m-8
                  </code>{" "}
                  = 32px margin
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  )
}

