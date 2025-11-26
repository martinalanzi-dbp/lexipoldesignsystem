import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"
import Link from "next/link"

export default function ButtonPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Components" }, { label: "Button" }]} />
      <ComponentHeader category="Components" title="Button" />
      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">Button Component</h2>
            <p className="text-muted-foreground text-sm">
              Buttons are interactive elements that trigger actions. See the{" "}
              <Link href="/components/buttons" className="text-primary underline">
                Buttons page
              </Link>{" "}
              for comprehensive documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

