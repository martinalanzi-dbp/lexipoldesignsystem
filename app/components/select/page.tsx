import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

export default function selectPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Components" }, { label: "select" }]} />
      <ComponentHeader category="Components" title="select" />
      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">select Component</h2>
            <p className="text-muted-foreground text-sm">
              Documentation for the select component.
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
