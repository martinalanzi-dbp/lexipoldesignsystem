import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

const spacingTokens = [
  { name: "0", token: "--spacing-0", value: "0px", description: "No spacing" },
  { name: "1", token: "--spacing-1", value: "4px", description: "Extra small spacing" },
  { name: "2", token: "--spacing-2", value: "8px", description: "Small spacing" },
  { name: "3", token: "--spacing-3", value: "12px", description: "Medium-small spacing" },
  { name: "4", token: "--spacing-4", value: "16px", description: "Medium spacing (base unit)" },
  { name: "5", token: "--spacing-5", value: "20px", description: "Medium-large spacing" },
  { name: "6", token: "--spacing-6", value: "24px", description: "Large spacing" },
  { name: "8", token: "--spacing-8", value: "32px", description: "Extra large spacing" },
  { name: "10", token: "--spacing-10", value: "40px", description: "2X large spacing" },
  { name: "12", token: "--spacing-12", value: "48px", description: "3X large spacing" },
  { name: "16", token: "--spacing-16", value: "64px", description: "4X large spacing" },
  { name: "20", token: "--spacing-20", value: "80px", description: "5X large spacing" },
  { name: "24", token: "--spacing-24", value: "96px", description: "6X large spacing" },
]

export default function SpacingPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Spacing" }]} />
      
      <ComponentHeader category="Foundations" title="Spacing" />

      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">
              Spacing System
            </h2>
            <p className="text-muted-foreground text-sm">
              Our spacing system follows a 4-pixel base grid to ensure consistent rhythm and alignment throughout the interface. All spacing values are multiples of 4.
            </p>
          </div>

          {/* Spacing Scale */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="flex bg-muted border-b border-border">
              <div className="w-[120px] px-6 py-4">
                <p className="text-muted-foreground text-xs">
                  Token
                </p>
              </div>
              <div className="w-[120px] px-6 py-4 border-l border-border">
                <p className="text-muted-foreground text-xs">
                  Value
                </p>
              </div>
              <div className="w-[200px] px-6 py-4 border-l border-border">
                <p className="text-muted-foreground text-xs">
                  Preview
                </p>
              </div>
              <div className="flex-1 px-6 py-4 border-l border-border">
                <p className="text-muted-foreground text-xs">
                  Description
                </p>
              </div>
            </div>

            {spacingTokens.map((spacing, index) => (
              <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                <div className="w-[120px] px-6 py-6 flex items-center">
                  <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                    {spacing.token}
                  </code>
                </div>
                <div className="w-[120px] px-6 py-6 border-l border-border flex items-center">
                  <p className="text-card-foreground text-xs">
                    {spacing.value}
                  </p>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className="bg-primary h-8"
                      style={{ width: spacing.value }}
                    />
                    <p className="text-muted-foreground text-xs">
                      {spacing.value}
                    </p>
                  </div>
                </div>
                <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                  <p className="text-muted-foreground text-xs">
                    {spacing.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Scale */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Visual Scale
            </h3>

            <div className="border border-border rounded-lg p-8 bg-card">
              <div className="flex flex-col gap-4">
                {spacingTokens.map((spacing, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-24">
                      <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                        {spacing.name}
                      </code>
                    </div>
                    <div
                      className="bg-primary rounded"
                      style={{ width: spacing.value, height: "24px" }}
                    />
                    <p className="text-muted-foreground text-xs">
                      {spacing.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Principle */}
          <div className="flex flex-col gap-5">
            <h3 className="text-foreground">
              4-Pixel Grid
            </h3>
            <p className="text-muted-foreground text-sm">
              All spacing values are based on a 4-pixel increment to maintain visual harmony and predictable layouts. When creating custom spacing, always use multiples of 4.
            </p>
            
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-foreground text-sm">
                    Best Practice
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Use spacing tokens from the system instead of arbitrary values. This ensures consistency across all components and screens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
