"use client"

import { useState, useEffect } from "react"
import { useEditMode } from "./edit-mode-provider"
import { cn } from "@/lib/utils"

interface EditableColorInputProps {
  name: string
  hex: string
  onNameChange: (value: string) => void
  onHexChange: (value: string) => void
  className?: string
}

export function EditableColorInput({
  name,
  hex,
  onNameChange,
  onHexChange,
  className,
}: EditableColorInputProps) {
  const { isEditMode } = useEditMode()
  const [localName, setLocalName] = useState(name)
  const [localHex, setLocalHex] = useState(hex)

  useEffect(() => {
    setLocalName(name)
    setLocalHex(hex)
  }, [name, hex])

  const handleNameChange = (value: string) => {
    setLocalName(value)
    onNameChange(value)
  }

  const handleHexChange = (value: string) => {
    // Validate hex color format
    const hexPattern = /^#?[0-9A-Fa-f]{0,6}$/
    if (value === "" || hexPattern.test(value)) {
      const formattedValue = value.startsWith("#") ? value : `#${value}`
      setLocalHex(formattedValue)
      onHexChange(formattedValue)
    }
  }

  return (
    <div className={cn("flex border-b border-border last:border-b-0 bg-card", className)}>
      <div className="w-[400px] px-6 py-6 flex items-center">
        <div
          className="w-full h-[67px] rounded border border-border flex items-center justify-center gap-2"
          style={{ backgroundColor: localHex }}
        >
          <span className="text-sm" style={{ color: localHex === "#FFFFFF" || localHex === "#ffffff" ? "#000000" : "#FFFFFF" }}>
            Text
          </span>
          <span className="text-sm" style={{ color: localHex === "#FFFFFF" || localHex === "#ffffff" ? "#000000" : "#FFFFFF" }}>
            Text
          </span>
        </div>
      </div>
      <div className="w-[400px] px-6 py-6 border-l border-border flex items-center">
        {isEditMode ? (
          <input
            type="text"
            value={localName}
            onChange={(e) => handleNameChange(e.target.value)}
            className="w-full border border-primary/50 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm"
          />
        ) : (
          <p className="text-card-foreground text-sm">{name}</p>
        )}
      </div>
      <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
        {isEditMode ? (
          <input
            type="text"
            value={localHex}
            onChange={(e) => handleHexChange(e.target.value)}
            className="w-full border border-primary/50 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-xs font-mono"
            placeholder="#000000"
          />
        ) : (
          <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
            {hex}
          </code>
        )}
      </div>
    </div>
  )
}

