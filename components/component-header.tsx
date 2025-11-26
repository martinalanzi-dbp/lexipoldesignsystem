"use client"

import { useEditMode } from "./edit-mode-provider"
import { Edit2, Save, X } from "lucide-react"
import { useState } from "react"

interface ComponentHeaderProps {
  category: "Foundations" | "Components"
  title: string
}

export function ComponentHeader({ category, title }: ComponentHeaderProps) {
  const { isEditMode, toggleEditMode } = useEditMode()
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Trigger save event that will be handled by the page
    window.dispatchEvent(new CustomEvent("save-content"))
    setTimeout(() => {
      setIsSaving(false)
      toggleEditMode()
    }, 500)
  }

  return (
    <div className="mb-12 flex items-start justify-between">
      <div>
        <div className="mb-2">
          <span className="bg-[rgba(140,211,248,0.3)] text-[#8cd3f8] text-[10px] uppercase tracking-[1.2px] px-3 py-1.5 rounded">
            {category}
          </span>
        </div>
        <h1 className="text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {isEditMode ? (
          <>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={toggleEditMode}
              className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded hover:bg-muted/80 transition-colors"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={toggleEditMode}
            className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded hover:bg-muted/80 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </button>
        )}
      </div>
    </div>
  )
}

