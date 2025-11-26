import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

export default function lauelPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Components" }, { label: "lauel" }]} />
      <ComponentHeader category="Components" title="lauel" />
      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">lauel Component</h2>
            <p className="text-muted-foreground text-sm">
              Documentation for the lauel component.
            </p>
          </div>
          <div className="border border-border rounded-lg p-8 bg-muted">
            <div className="bg-card rounded-lg p-6">
              <p className="text-muted-foreground text-sm mb-4">Example coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
