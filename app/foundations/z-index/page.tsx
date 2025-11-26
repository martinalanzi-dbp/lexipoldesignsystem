import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

const zIndexTokens = [
  { name: "Base", token: "z-0", value: "0", description: "Default layer" },
  { name: "Dropdown", token: "z-10", value: "10", description: "Dropdown menus" },
  { name: "Sticky", token: "z-20", value: "20", description: "Sticky headers" },
  { name: "Fixed", token: "z-30", value: "30", description: "Fixed elements" },
  { name: "Modal Backdrop", token: "z-40", value: "40", description: "Modal overlays" },
  { name: "Modal", token: "z-50", value: "50", description: "Modal dialogs" },
  { name: "Popover", token: "z-50", value: "50", description: "Popovers and tooltips" },
  { name: "Toast", token: "z-50", value: "50", description: "Toast notifications" },
]

export default function ZIndexPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Z-Index" }]} />
      
      <ComponentHeader category="Foundations" title="Z-Index" />

      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">
              Z-Index System
            </h2>
            <p className="text-muted-foreground text-sm">
              Our z-index system provides a consistent layering hierarchy for UI elements. Use these tokens to ensure proper stacking order across the application.
            </p>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="flex bg-muted border-b border-border">
              <div className="w-[150px] px-6 py-4">
                <p className="text-muted-foreground text-xs">
                  Name
                </p>
              </div>
              <div className="w-[150px] px-6 py-4 border-l border-border">
                <p className="text-muted-foreground text-xs">
                  Token
                </p>
              </div>
              <div className="w-[150px] px-6 py-4 border-l border-border">
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

            {zIndexTokens.map((token, index) => (
              <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                <div className="w-[150px] px-6 py-6 flex items-center">
                  <p className="text-card-foreground text-sm">
                    {token.name}
                  </p>
                </div>
                <div className="w-[150px] px-6 py-6 border-l border-border flex items-center">
                  <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                    {token.token}
                  </code>
                </div>
                <div className="w-[150px] px-6 py-6 border-l border-border flex items-center">
                  <p className="text-card-foreground text-xs">
                    {token.value}
                  </p>
                </div>
                <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                  <p className="text-muted-foreground text-xs">
                    {token.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-foreground">
              Layering Hierarchy
            </h3>
            <div className="bg-muted p-6 rounded-lg border border-border">
              <div className="flex flex-col gap-2">
                {zIndexTokens.map((token, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 text-right">
                      <span className="text-muted-foreground text-xs">{token.value}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-foreground text-sm">{token.name}</span>
                      <span className="text-muted-foreground text-xs ml-2">({token.description})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

