import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

const elevations = [
  { name: "None", token: "--elevation-none", value: "none", description: "For flat elements with no elevation" },
  { name: "Extra Small", token: "elevation-sm", value: "0px 1px 2px 0px rgba(18, 25, 38, 0.05), 0px 0px 0px 1px rgba(0, 75, 135, 0.9)", description: "Subtle depth for cards and containers" },
  { name: "Small", token: "elevation-sm", value: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)", description: "Standard elevation for interactive elements" },
  { name: "Medium", token: "elevation-md", value: "0px 2px 4px -2px rgba(75, 85, 101, 0.06), 0px 4px 8px -2px rgba(75, 85, 101, 0.10)", description: "Elevated cards and panels" },
  { name: "Large", token: "elevation-lg", value: "0px 8px 8px -4px rgba(75, 85, 101, 0.03), 0px 20px 24px -4px rgba(75, 85, 101, 0.08)", description: "Dropdowns and popovers" },
  { name: "Extra Large", token: "elevation-xl", value: "0px 24px 44px 0px rgba(75, 85, 101, 0.14)", description: "Modals and dialogs" },
]

export default function ElevationsPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Elevations" }]} />
      
      <ComponentHeader category="Foundations" title="Elevations" />

      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">
              Elevation Tokens
            </h2>
            <p className="text-muted-foreground text-sm">
              Elevations add depth and hierarchy to the interface through shadow tokens. Each elevation level has a specific purpose and context.
            </p>
          </div>

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
              <div className="flex-1 px-6 py-4 border-l border-border">
                <p className="text-muted-foreground text-xs">
                  Usage
                </p>
              </div>
            </div>

            {elevations.map((elevation, index) => (
              <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                <div className="w-[150px] px-6 py-8 flex items-center justify-center">
                  <div
                    className="w-16 h-16 bg-background rounded"
                    style={{ boxShadow: elevation.value === "none" ? "none" : elevation.value }}
                  />
                </div>
                <div className="w-[150px] px-6 py-8 border-l border-border flex items-center">
                  <p className="text-card-foreground text-sm">
                    {elevation.name}
                  </p>
                </div>
                <div className="w-[180px] px-6 py-8 border-l border-border flex items-center">
                  <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                    {elevation.token}
                  </code>
                </div>
                <div className="flex-1 px-6 py-8 border-l border-border flex items-center">
                  <p className="text-muted-foreground text-xs">
                    {elevation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Examples */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Visual Examples
            </h3>

            <div className="grid grid-cols-2 gap-8">
              {elevations.map((elevation, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <p className="text-muted-foreground text-xs">
                    {elevation.name}
                  </p>
                  <div className="bg-muted p-12 rounded-lg flex items-center justify-center">
                    <div
                      className="w-32 h-32 bg-card rounded-lg flex items-center justify-center"
                      style={{ boxShadow: elevation.value === "none" ? "none" : elevation.value }}
                    >
                      <p className="text-muted-foreground text-xs">
                        {elevation.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shadow Values */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">
              Shadow Values
            </h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[150px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">
                    Token
                  </p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">
                    CSS Value
                  </p>
                </div>
              </div>

              {elevations.map((elevation, index) => (
                <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                  <div className="w-[150px] px-6 py-6 flex items-center">
                    <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                      {elevation.token}
                    </code>
                  </div>
                  <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                    <code className="text-card-foreground text-xs">
                      {elevation.value}
                    </code>
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
