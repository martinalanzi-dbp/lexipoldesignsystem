import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

export default function LayoutPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Layout" }]} />
      <ComponentHeader category="Foundations" title="Layout" />
      <div className="bg-card p-16 rounded-lg">
        <p className="text-muted-foreground">
          Layout documentation coming soon...
        </p>
      </div>
    </div>
  )
}

