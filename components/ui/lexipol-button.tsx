"use client"

import { forwardRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive"
  size?: "small" | "medium" | "large"
  leftIcon?: boolean
  rightIcon?: boolean
  iconOnly?: boolean
  children?: React.ReactNode
}

export const LexipolButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      leftIcon = false,
      rightIcon = false,
      iconOnly = false,
      className = "",
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variantStyles = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 disabled:bg-muted disabled:text-muted-foreground",
      secondary:
        "bg-secondary text-secondary-foreground border border-border hover:bg-muted active:bg-muted/80 disabled:bg-muted disabled:text-muted-foreground",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 disabled:bg-muted disabled:text-muted-foreground",
    }

    // Size styles
    const sizeStyles = {
      small: iconOnly ? "p-2 rounded" : "px-4 py-2 gap-2 rounded text-sm",
      medium: iconOnly ? "p-2 rounded" : "px-4 py-2 gap-2 rounded text-base",
      large: iconOnly ? "p-4 rounded-lg" : "px-8 py-4 gap-3 rounded-lg text-[22px]",
    }

    // Icon sizes
    const iconSizes = {
      small: 16,
      medium: 16,
      large: 24,
    }

    const iconSize = iconSizes[size]

    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          transition-all duration-150
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-60
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${iconOnly ? "aspect-square" : ""}
          ${className}
        `}
        style={{
          boxShadow: disabled ? "none" : "var(--elevation-sm)",
        }}
        disabled={disabled}
        {...props}
      >
        {leftIcon && <ChevronLeft size={iconSize} strokeWidth={2} />}
        {!iconOnly && children}
        {rightIcon && <ChevronRight size={iconSize} strokeWidth={2} />}
        {iconOnly && leftIcon && <ChevronLeft size={iconSize} strokeWidth={2} />}
        {iconOnly && rightIcon && <ChevronRight size={iconSize} strokeWidth={2} />}
        {iconOnly && !leftIcon && !rightIcon && children}
      </button>
    )
  }
)

LexipolButton.displayName = "LexipolButton"

