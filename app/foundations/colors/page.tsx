"use client"

import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"
import { EditableText } from "@/components/editable-text"
import { EditableColorInput } from "@/components/editable-color-input"
import { useEditMode } from "@/components/edit-mode-provider"
import { useState, useEffect } from "react"

type ColorSection = {
  title: string
  description: string
  colors: Array<{ name: string; hex: string }>
}

const initialColorSections: ColorSection[] = [
  {
    title: "Primary Colors",
    description: "Our color palette is designed to be versatile and accessible, ensuring a consistent visual experience across all Lexipol products. Use primary colors strategically to guide users' attention, denote interactive elements, and highlight key features. Default Lexipol blue is Primary 800.",
    colors: [
      { name: "Primary 50", hex: "#EFF7FF" },
      { name: "Primary 100", hex: "#DEEFFF" },
      { name: "Primary 200", hex: "#B6E0FF" },
      { name: "Primary 300", hex: "#76C8FF" },
      { name: "Primary 400", hex: "#2DADFF" },
      { name: "Primary 500", hex: "#0293F5" },
      { name: "Primary 600", hex: "#0073D2" },
      { name: "Primary 700", hex: "#005CAA" },
      { name: "Primary 800", hex: "#004B87" },
      { name: "Primary 900", hex: "#04294D" }
    ],
  },
  {
    title: "Secondary Colors",
    description: "Neutral colors in UI design are like the supporting actors. We use them for backgrounds, text, and less important elements. They create balance, make content easy to read, and provide a clean, calming backdrop for your user interface.",
    colors: [
      { name: "Secondary 50", hex: "#F8FAFC" },
      { name: "Secondary 100", hex: "#EEF2F6" },
      { name: "Secondary 200", hex: "#E3E8EF" },
      { name: "Secondary 300", hex: "#CDD5DF" },
      { name: "Secondary 400", hex: "#9AA4B2" },
      { name: "Secondary 500", hex: "#697586" },
      { name: "Secondary 600", hex: "#4B5565" },
      { name: "Secondary 700", hex: "#364152" },
      { name: "Secondary 800", hex: "#202939" },
      { name: "Secondary 900", hex: "#121926" }
    ],
  },
  {
    title: "Red",
    description: "For elements that convey errors or destructive behaviors.",
    colors: [
      { name: "50", hex: "#FEF2F2" },
      { name: "100", hex: "#FEE2E2" },
      { name: "200", hex: "#FECACA" },
      { name: "300", hex: "#FCA5A5" },
      { name: "400", hex: "#F87171" },
      { name: "500", hex: "#EF4444" },
      { name: "600", hex: "#DC2626" },
      { name: "700", hex: "#B91C1C" },
      { name: "800", hex: "#991B1B" },
      { name: "900", hex: "#450A0A" }
    ],
  },
  {
    title: "Orange",
    description: "For elements that convey warnings or caution.",
    colors: [
      { name: "50", hex: "#FFF8EB" },
      { name: "100", hex: "#FEEAC7" },
      { name: "200", hex: "#FDD28A" },
      { name: "300", hex: "#FCBB4D" },
      { name: "400", hex: "#FBAB24" },
      { name: "500", hex: "#F59E0B" },
      { name: "600", hex: "#D98B06" },
      { name: "700", hex: "#B47409" },
      { name: "800", hex: "#92610E" },
      { name: "900", hex: "#452C03" }
    ],
  },
  {
    title: "Green",
    description: "Used to signify successful actions or positive feedback.",
    colors: [
      { name: "50", hex: "#ECFDF5" },
      { name: "100", hex: "#D1FAEC" },
      { name: "200", hex: "#A7F3DA" },
      { name: "300", hex: "#6EE7BF" },
      { name: "400", hex: "#34D39E" },
      { name: "500", hex: "#10B981" },
      { name: "600", hex: "#059669" },
      { name: "700", hex: "#047852" },
      { name: "800", hex: "#065F42" },
      { name: "900", hex: "#022C1E" }
    ],
  },
  {
    title: "Purple",
    description: "This distinctive color is reserved for elements that provide users with important contextual information.",
    colors: [
      { name: "50", hex: "#F4F3FF" },
      { name: "100", hex: "#ECE9FE" },
      { name: "200", hex: "#DBD6FE" },
      { name: "300", hex: "#C0B5FD" },
      { name: "400", hex: "#A18AFB" },
      { name: "500", hex: "#835BF7" },
      { name: "600", hex: "#7239EE" },
      { name: "700", hex: "#6327DA" },
      { name: "800", hex: "#5220B5" },
      { name: "900", hex: "#291065" }
    ],
  },
  {
    title: "Teal",
    description: "A versatile accent color for highlighting specific elements.",
    colors: [
      { name: "50", hex: "#F0FDFA" },
      { name: "100", hex: "#CCFBF1" },
      { name: "200", hex: "#99F6E4" },
      { name: "300", hex: "#5EEAD4" },
      { name: "400", hex: "#2DD4BF" },
      { name: "500", hex: "#14B8A6" },
      { name: "600", hex: "#0D9488" },
      { name: "700", hex: "#0F766E" },
      { name: "800", hex: "#115E59" },
      { name: "900", hex: "#134E4A" }
    ],
  }
]

function getContrastColor(hex: string): string {
  const cleanHex = hex.replace("#", "")
  const r = parseInt(cleanHex.substring(0, 2), 16)
  const g = parseInt(cleanHex.substring(2, 4), 16)
  const b = parseInt(cleanHex.substring(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? "#000000" : "#FFFFFF"
}

function ColorTable({ 
  section, 
  onSectionUpdate 
}: { 
  section: ColorSection
  onSectionUpdate: (updatedSection: ColorSection) => void
}) {
  const { isEditMode } = useEditMode()

  const handleTitleChange = (newTitle: string) => {
    onSectionUpdate({ ...section, title: newTitle })
  }

  const handleDescriptionChange = (newDescription: string) => {
    onSectionUpdate({ ...section, description: newDescription })
  }

  const handleColorUpdate = (index: number, updates: Partial<{ name: string; hex: string }>) => {
    const updatedColors = [...section.colors]
    updatedColors[index] = { ...updatedColors[index], ...updates }
    onSectionUpdate({ ...section, colors: updatedColors })
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <EditableText
          value={section.title}
          onChange={handleTitleChange}
          as="h3"
          className="text-foreground"
        />
        <EditableText
          value={section.description}
          onChange={handleDescriptionChange}
          as="p"
          multiline
          className="text-muted-foreground text-sm"
        />
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="flex bg-muted border-b border-border">
          <div className="w-[400px] px-6 py-4">
            <p className="text-muted-foreground text-xs">Preview</p>
          </div>
          <div className="w-[400px] px-6 py-4 border-l border-border">
            <p className="text-muted-foreground text-xs">Name</p>
          </div>
          <div className="flex-1 px-6 py-4 border-l border-border">
            <p className="text-muted-foreground text-xs">HEX</p>
          </div>
        </div>

        {section.colors.map((color, index) => (
          <EditableColorInput
            key={index}
            name={color.name}
            hex={color.hex}
            onNameChange={(newName) => handleColorUpdate(index, { name: newName })}
            onHexChange={(newHex) => handleColorUpdate(index, { hex: newHex })}
          />
        ))}
      </div>
    </div>
  )
}

export default function ColorsPage() {
  const [colorSections, setColorSections] = useState<ColorSection[]>(initialColorSections)
  const { isEditMode } = useEditMode()

  useEffect(() => {
    const handleSave = async () => {
      try {
        const fileContent = generateFileContent(colorSections)
        
        const response = await fetch("/api/save-content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filePath: "app/foundations/colors/page.tsx",
            content: fileContent,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to save content")
        }

        alert("Content saved successfully!")
      } catch (error) {
        console.error("Error saving content:", error)
        alert("Failed to save content. Please check the console for details.")
      }
    }

    window.addEventListener("save-content", handleSave)
    return () => {
      window.removeEventListener("save-content", handleSave)
    }
  }, [colorSections])

  const handleSectionUpdate = (sectionIndex: number, updatedSection: ColorSection) => {
    const updatedSections = [...colorSections]
    updatedSections[sectionIndex] = updatedSection
    setColorSections(updatedSections)
  }

  return (
    <div>
      <Breadcrumb items={[{ label: "Foundations" }, { label: "Colors" }]} />

      <ComponentHeader category="Foundations" title="Colors" />

      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          {colorSections.map((section, index) => (
            <ColorTable
              key={index}
              section={section}
              onSectionUpdate={(updatedSection) => handleSectionUpdate(index, updatedSection)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
