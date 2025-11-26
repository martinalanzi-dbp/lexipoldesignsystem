import { DocsLayout } from "@/components/docs-layout"

export default function ExampleDocsPage() {
  return (
    <DocsLayout
      title="Example Documentation Page"
      description="This is an example of how to use the DocsLayout component in your documentation pages."
      lastUpdated="January 15, 2025"
    >
      <div>
        <h2>Getting Started</h2>
        <p>
          This is an example documentation page using the DocsLayout component.
          The layout provides a consistent structure with a sidebar navigation
          and a sticky header.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Fixed sidebar with collapsible sections</li>
          <li>Sticky header with page title and optional metadata</li>
          <li>Responsive design (mobile menu)</li>
          <li>Active route highlighting</li>
        </ul>

        <h3>Usage</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code>{`import { DocsLayout } from "@/components/docs-layout"

export default function MyPage() {
  return (
    <DocsLayout
      title="Page Title"
      description="Optional description"
      lastUpdated="January 15, 2025"
      sidebarItems={{
        foundations: [
          { title: "Colors", path: "/foundations/colors" },
        ],
      }}
    >
      <div>
        {/* Your page content */}
      </div>
    </DocsLayout>
  )
}`}</code>
        </pre>

        <h3>Props</h3>
        <ul>
          <li>
            <strong>title</strong> (required): The page title displayed in the
            sticky header
          </li>
          <li>
            <strong>description</strong> (optional): Description text shown
            below the title
          </li>
          <li>
            <strong>lastUpdated</strong> (optional): Date string shown below
            the description
          </li>
          <li>
            <strong>sidebarItems</strong> (optional): Custom sidebar navigation
            items. If not provided, uses default items.
          </li>
        </ul>
      </div>
    </DocsLayout>
  )
}

