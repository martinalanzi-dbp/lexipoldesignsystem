import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"

export default function AccordionPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Components" }, { label: "Accordion" }]} />
      <ComponentHeader category="Components" title="Accordion" />
      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">Accordion Component</h2>
            <p className="text-muted-foreground text-sm">
              An accordion is a vertically stacked set of interactive headings that each reveal a section of content.
            </p>
          </div>

          <div className="border border-border rounded-lg p-8 bg-muted">
            <div className="bg-card rounded-lg p-6">
              <p className="text-muted-foreground text-sm mb-4">Example coming soon...</p>
              <p className="text-muted-foreground text-xs">
                This component will include interactive examples, usage guidelines, props documentation, and accessibility considerations.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">Usage Guidelines</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>• Use accordions to organize related content into collapsible sections</li>
              <li>• Ideal for FAQs, settings panels, and content that benefits from progressive disclosure</li>
              <li>• Ensure clear labels that indicate what content will be revealed</li>
              <li>• Consider accessibility with proper ARIA attributes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

