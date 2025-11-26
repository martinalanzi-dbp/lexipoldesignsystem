import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

const borderWidths = [
  { name: "None", token: "--border-width-none", value: "0px", description: "No border" },
  { name: "Thin", token: "--border-width-thin", value: "1px", description: "Standard border for most components" },
  { name: "Medium", token: "--border-width-medium", value: "2px", description: "Emphasized borders" },
  { name: "Thick", token: "--border-width-thick", value: "4px", description: "Heavy emphasis or focus states" },
]

const borderRadii = [
  { name: "None", token: "--radius-none", value: "0px", description: "No rounding" },
  { name: "Small", token: "--radius-sm", value: "2px", description: "Subtle rounding" },
  { name: "Default", token: "--radius", value: "4px", description: "Standard corner radius" },
  { name: "Medium", token: "--radius-md", value: "8px", description: "Medium rounding" },
  { name: "Large", token: "--radius-lg", value: "16px", description: "Large rounding for cards" },
  { name: "Extra Large", token: "--radius-xl", value: "20px", description: "Extra large rounding" },
  { name: "Full", token: "--radius-full", value: "9999px", description: "Fully rounded (pills, avatars)" },
]

export default function BordersPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Borders" }]} />
      
      <ComponentHeader category="Foundations" title="Borders" />

      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">
              Border System
            </h2>
            <p className="text-muted-foreground text-sm">
              Our border system includes semantic tokens for border radius, width, and colors to maintain consistency across all interface elements.
            </p>
          </div>

          {/* Border Radius */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Border Radius
            </h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[150px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">
                    Preview
                  </p>
                </div>
                <div className="w-[150px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Name
                  </p>
                </div>
                <div className="w-[180px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Token
                  </p>
                </div>
                <div className="w-[180px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Value
                  </p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Description
                  </p>
                </div>
              </div>

              {borderRadii.map((radius, index) => (
                <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                  <div className="w-[150px] px-6 py-8 flex items-center justify-center">
                    <div
                      className="w-16 h-16 bg-primary"
                      style={{ borderRadius: radius.value }}
                    />
                  </div>
                  <div className="w-[150px] px-6 py-8 border-l border-border flex items-center">
                    <p className="text-card-foreground text-sm">
                      {radius.name}
                    </p>
                  </div>
                  <div className="w-[180px] px-6 py-8 border-l border-border flex items-center">
                    <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                      {radius.token}
                    </code>
                  </div>
                  <div className="w-[180px] px-6 py-8 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">
                      {radius.value}
                    </p>
                  </div>
                  <div className="flex-1 px-6 py-8 border-l border-border flex items-center">
                    <p className="text-muted-foreground text-xs">
                      {radius.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Examples */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Radius Examples
            </h3>

            <div className="grid grid-cols-3 gap-8">
              {borderRadii.map((radius, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <p className="text-muted-foreground text-xs">
                    {radius.name} - {radius.value}
                  </p>
                  <div className="bg-muted p-8 rounded-lg flex items-center justify-center">
                    <div
                      className="w-24 h-24 bg-primary flex items-center justify-center"
                      style={{ borderRadius: radius.value }}
                    >
                      <p className="text-primary-foreground text-xs text-center">
                        {radius.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Border Widths */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Border Widths
            </h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[150px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">
                    Preview
                  </p>
                </div>
                <div className="w-[150px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Width
                  </p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    Description
                  </p>
                </div>
              </div>

              {borderWidths.map((width, index) => (
                <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                  <div className="w-[150px] px-6 py-8 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-lg bg-background"
                      style={{ 
                        border: `${width.value} solid`,
                        borderColor: "var(--border)"
                      }}
                    />
                  </div>
                  <div className="w-[150px] px-6 py-8 border-l border-border flex items-center">
                    <p className="text-card-foreground text-sm">
                      {width.name}
                    </p>
                  </div>
                  <div className="flex-1 px-6 py-8 border-l border-border flex items-center">
                    <p className="text-muted-foreground text-xs">
                      {width.description}
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
