"use client"

import { useState, useEffect, useRef } from "react"
import { useEditMode } from "./edit-mode-provider"
import { cn } from "@/lib/utils"

interface EditableTextProps {
  value: string
  onChange: (value: string) => void
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  multiline?: boolean
}

export function EditableText({
  value,
  onChange,
  className,
  as = "p",
  multiline = false,
}: EditableTextProps) {
  const { isEditMode } = useEditMode()
  const [localValue, setLocalValue] = useState(value)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  useEffect(() => {
    if (isEditMode && multiline && textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [isEditMode, localValue, multiline])

  const handleChange = (newValue: string) => {
    setLocalValue(newValue)
    onChange(newValue)
  }

  if (!isEditMode) {
    const Component = as
    return <Component className={className}>{value}</Component>
  }

  if (multiline) {
    return (
      <textarea
        ref={textareaRef}
        value={localValue}
        onChange={(e) => handleChange(e.target.value)}
        className={cn(
          "w-full resize-none border border-primary/50 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary bg-background",
          className
        )}
        rows={3}
      />
    )
  }

  return (
    <input
      type="text"
      value={localValue}
      onChange={(e) => handleChange(e.target.value)}
      className={cn(
        "border border-primary/50 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary bg-background",
        className
      )}
    />
  )
}

