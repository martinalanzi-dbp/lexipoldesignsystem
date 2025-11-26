import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

const breakpoints = [
  { name: "Mobile", token: "sm", value: "640px", description: "Small devices (phones)" },
  { name: "Tablet", token: "md", value: "768px", description: "Medium devices (tablets)" },
  { name: "Desktop", token: "lg", value: "1024px", description: "Large devices (desktops)" },
  { name: "Large Desktop", token: "xl", value: "1280px", description: "Extra large devices" },
  { name: "2X Large", token: "2xl", value: "1536px", description: "2X large devices" },
]

export default function BreakpointsPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Breakpoints" }]} />
      
      <ComponentHeader category="Foundations" title="Breakpoints" />

      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">
              Breakpoint System
            </h2>
            <p className="text-muted-foreground text-sm">
              Our responsive breakpoint system ensures consistent layouts across all device sizes. Use these breakpoints to create adaptive interfaces.
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

            {breakpoints.map((breakpoint, index) => (
              <div key={index} className="flex border-b border-border last:border-b-0 bg-card">
                <div className="w-[150px] px-6 py-6 flex items-center">
                  <p className="text-card-foreground text-sm">
                    {breakpoint.name}
                  </p>
                </div>
                <div className="w-[150px] px-6 py-6 border-l border-border flex items-center">
                  <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                    {breakpoint.token}
                  </code>
                </div>
                <div className="w-[150px] px-6 py-6 border-l border-border flex items-center">
                  <p className="text-card-foreground text-xs">
                    {breakpoint.value}
                  </p>
                </div>
                <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                  <p className="text-muted-foreground text-xs">
                    {breakpoint.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-foreground">
              Usage Example
            </h3>
            <div className="bg-muted p-6 rounded-lg border border-border">
              <code className="text-sm text-foreground">
                {`// Tailwind CSS
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// CSS
@media (min-width: 768px) {
  .container {
    max-width: 1024px;
  }
}`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

