import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

const typographyStyles = [
  { name: "Heading 1", element: "h1", size: "56px", lineHeight: "67.2px (1.2)", weight: "400 (Regular)", usage: "Page titles and hero sections" },
  { name: "Heading 2", element: "h2", size: "40px", lineHeight: "52px (1.3)", weight: "500 (Medium)", usage: "Section headers" },
  { name: "Heading 3", element: "h3", size: "32px", lineHeight: "41.6px (1.3)", weight: "500 (Medium)", usage: "Subsection headers" },
  { name: "Heading 4", element: "h4", size: "24px", lineHeight: "31.2px (1.3)", weight: "500 (Medium)", usage: "Card titles" },
  { name: "Heading 5", element: "h5", size: "20px", lineHeight: "26px (1.3)", weight: "500 (Medium)", usage: "Small section headers" },
  { name: "Heading 6", element: "h6", size: "18px", lineHeight: "23.4px (1.3)", weight: "500 (Medium)", usage: "Labels and captions" },
  { name: "Body Large", element: "p", size: "18px", lineHeight: "27px (1.5)", weight: "400 (Regular)", usage: "Emphasized body text" },
  { name: "Body", element: "p", size: "16px", lineHeight: "24px (1.5)", weight: "400 (Regular)", usage: "Standard body text" },
  { name: "Body Small", element: "p", size: "14px", lineHeight: "21px (1.5)", weight: "400 (Regular)", usage: "Secondary text" },
  { name: "Caption", element: "p", size: "12px", lineHeight: "18px (1.5)", weight: "400 (Regular)", usage: "Helper text and metadata" },
]

const fontWeights = [
  { name: "Regular", value: "400", token: "font-normal", usage: "Default body text" },
  { name: "Medium", value: "500", token: "font-medium", usage: "Emphasized text and headings" },
  { name: "Semi Bold", value: "600", token: "font-semibold", usage: "Strong emphasis" },
  { name: "Bold", value: "700", token: "font-bold", usage: "Maximum emphasis" },
]

export default function TypographyPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Typography" }]} />
      
      <ComponentHeader category="Foundations" title="Typography" />
      
      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          {/* Introduction */}
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">
              Typography System
            </h2>
            <p className="text-muted-foreground text-sm">
              Our typography system uses Inter font family with semantic tokens for consistent sizing and hierarchy across all interfaces.
            </p>
          </div>

          {/* Font Sizes */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Font Sizes
            </h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[180px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">
                    Name
                  </p>
                </div>
                <div className="w-[150px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Element
                  </p>
                </div>
                <div className="w-[100px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Size
                  </p>
                </div>
                <div className="w-[120px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Weight
                  </p>
                </div>
                <div className="w-[120px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Line Height
                  </p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Usage
                  </p>
                </div>
              </div>

              {typographyStyles.map((token, index) => (
                <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                  <div className="w-[180px] px-6 py-6 flex items-center">
                    <p className="text-card-foreground text-sm">
                      {token.name}
                    </p>
                  </div>
                  <div className="w-[150px] px-6 py-6 border-l border-border flex items-center">
                    <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                      {token.element}
                    </code>
                  </div>
                  <div className="w-[100px] px-6 py-6 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">
                      {token.size}
                    </p>
                  </div>
                  <div className="w-[120px] px-6 py-6 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">
                      {token.weight}
                    </p>
                  </div>
                  <div className="w-[120px] px-6 py-6 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">
                      {token.lineHeight}
                    </p>
                  </div>
                  <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                    <p className="text-muted-foreground text-xs">
                      {token.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Examples */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Examples
            </h3>

            <div className="flex flex-col gap-6 border border-border rounded-lg p-8 bg-card">
              {typographyStyles.map((token, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="text-muted-foreground text-xs">
                    {token.name} ({token.size})
                  </p>
                  <p 
                    className="text-foreground"
                    style={{ 
                      fontSize: token.size,
                      lineHeight: token.lineHeight.split(" ")[0],
                      fontWeight: token.weight.split(" ")[0]
                    }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Font Weights */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Font Weights
            </h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[180px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">
                    Name
                  </p>
                </div>
                <div className="w-[200px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Token
                  </p>
                </div>
                <div className="w-[120px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Value
                  </p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Usage
                  </p>
                </div>
              </div>

              {fontWeights.map((weight, index) => (
                <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                  <div className="w-[180px] px-6 py-6 flex items-center">
                    <p className="text-card-foreground text-sm" style={{ fontWeight: weight.value }}>
                      {weight.name}
                    </p>
                  </div>
                  <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                    <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                      {weight.token}
                    </code>
                  </div>
                  <div className="w-[120px] px-6 py-6 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">
                      {weight.value}
                    </p>
                  </div>
                  <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                    <p className="text-muted-foreground text-xs">
                      {weight.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
