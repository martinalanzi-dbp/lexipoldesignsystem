import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

export default function XComponentPage() {
  return (
    <div>
      <Breadcrumb
        items={[{ label: "Components" }, { label: "X Component" }]}
      />
      <ComponentHeader category="Components" title="X Component" />
      <div className="bg-card p-16 rounded-lg">
        <p className="text-muted-foreground">
          X Component documentation coming soon...
        </p>
      </div>
    </div>
  )
}

