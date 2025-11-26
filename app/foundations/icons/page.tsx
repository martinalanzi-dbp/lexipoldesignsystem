import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

export default function IconsPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Icons" }]} />
      <ComponentHeader category="Foundations" title="Icons" />
      <div className="bg-card p-16 rounded-lg">
        <p className="text-muted-foreground">
          Icons documentation coming soon...
        </p>
      </div>
    </div>
  )
}

