"use client"

import { Breadcrumb } from "@/components/breadcrumb"
import { ComponentHeader } from "@/components/component-header"
import { LexipolButton } from "@/components/ui/lexipol-button"

const buttonVariants = [
  {
    name: "Primary",
    value: "primary" as const,
    description: "Primary actions and main CTAs",
  },
  {
    name: "Secondary",
    value: "secondary" as const,
    description: "Secondary actions and alternatives",
  },
  {
    name: "Destructive",
    value: "destructive" as const,
    description: "Delete, remove, and destructive actions",
  },
]

const buttonSizes = [
  {
    name: "Small",
    value: "small" as const,
    height: "36px",
    padding: "8px 16px",
    fontSize: "14px",
  },
  {
    name: "Medium",
    value: "medium" as const,
    height: "40px",
    padding: "8px 16px",
    fontSize: "16px",
  },
  {
    name: "Large",
    value: "large" as const,
    height: "56px",
    padding: "16px 32px",
    fontSize: "22px",
  },
]

const buttonConfigurations = [
  {
    name: "Text Only",
    leftIcon: false,
    rightIcon: false,
    iconOnly: false,
  },
  {
    name: "Text + Left Icon",
    leftIcon: true,
    rightIcon: false,
    iconOnly: false,
  },
  {
    name: "Text + Right Icon",
    leftIcon: false,
    rightIcon: true,
    iconOnly: false,
  },
  {
    name: "Text + Both Icons",
    leftIcon: true,
    rightIcon: true,
    iconOnly: false,
  },
  {
    name: "Icon Only (Left)",
    leftIcon: true,
    rightIcon: false,
    iconOnly: true,
  },
  {
    name: "Icon Only (Right)",
    leftIcon: false,
    rightIcon: true,
    iconOnly: true,
  },
]

export default function ButtonsPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Components" }, { label: "Buttons" }]} />

      <ComponentHeader category="Components" title="Buttons" />

      <div className="bg-card p-16 rounded-lg">
        <div className="flex flex-col gap-16">
          {/* Introduction */}
          <div className="flex flex-col gap-5">
            <h2 className="text-card-foreground">Button Component</h2>
            <p className="text-muted-foreground text-sm">
              Buttons are interactive elements that trigger actions when clicked.
              They come in multiple variants, sizes, and configurations to suit
              different use cases.
            </p>
          </div>

          {/* Anatomy */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">Anatomy</h3>
            <p className="text-muted-foreground text-sm">
              A button consists of four key elements:
            </p>
            <div className="bg-muted border border-border rounded-lg p-12 flex items-center justify-center">
              <div className="relative inline-flex">
                <LexipolButton variant="primary" size="large" leftIcon rightIcon>
                  Label
                </LexipolButton>

                {/* Annotation 1 - Left Icon */}
                <div className="absolute -top-8 left-12 flex flex-col items-center">
                  <div className="bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    1
                  </div>
                  <div className="w-px h-3 bg-border" />
                </div>

                {/* Annotation 2 - Label */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    2
                  </div>
                  <div className="w-px h-3 bg-border" />
                </div>

                {/* Annotation 3 - Right Icon */}
                <div className="absolute -top-8 right-12 flex flex-col items-center">
                  <div className="bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    3
                  </div>
                  <div className="w-px h-3 bg-border" />
                </div>

                {/* Annotation 4 - Container */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-px h-3 bg-border" />
                  <div className="bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    4
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="text-foreground text-sm">Left Icon (Optional)</p>
                  <p className="text-muted-foreground text-xs">
                    Leading icon for visual context
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="text-foreground text-sm">Label</p>
                  <p className="text-muted-foreground text-xs">
                    Button text describing the action
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="text-foreground text-sm">Right Icon (Optional)</p>
                  <p className="text-muted-foreground text-xs">
                    Trailing icon for navigation or actions
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-foreground text-background rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <p className="text-foreground text-sm">Container</p>
                  <p className="text-muted-foreground text-xs">
                    Background with border radius and elevation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* Variants */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">Variants</h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[150px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">Variant</p>
                </div>
                <div className="w-[200px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Preview</p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Usage</p>
                </div>
              </div>

              {buttonVariants.map((variant) => (
                <div
                  key={variant.value}
                  className="flex border-b border-border last:border-b-0 bg-card"
                >
                  <div className="w-[150px] px-6 py-6 flex items-center">
                    <p className="text-card-foreground text-sm">{variant.name}</p>
                  </div>
                  <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                    <LexipolButton variant={variant.value} size="medium">
                      Button
                    </LexipolButton>
                  </div>
                  <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                    <p className="text-muted-foreground text-xs">
                      {variant.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">Sizes</h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[120px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">Size</p>
                </div>
                <div className="w-[100px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Height</p>
                </div>
                <div className="w-[140px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Padding</p>
                </div>
                <div className="w-[100px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Font Size</p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Preview</p>
                </div>
              </div>

              {buttonSizes.map((size) => (
                <div
                  key={size.value}
                  className="flex border-b border-border last:border-b-0 bg-card"
                >
                  <div className="w-[120px] px-6 py-6 flex items-center">
                    <p className="text-card-foreground text-sm">{size.name}</p>
                  </div>
                  <div className="w-[100px] px-6 py-6 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">{size.height}</p>
                  </div>
                  <div className="w-[140px] px-6 py-6 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">{size.padding}</p>
                  </div>
                  <div className="w-[100px] px-6 py-6 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">{size.fontSize}</p>
                  </div>
                  <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                    <LexipolButton variant="primary" size={size.value}>
                      Button
                    </LexipolButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* States */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">States</h3>
            <p className="text-muted-foreground text-sm">
              Buttons have five interactive states that provide visual feedback
              to users.
            </p>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[120px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">State</p>
                </div>
                <div className="w-[200px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Primary</p>
                </div>
                <div className="w-[200px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Secondary</p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Destructive</p>
                </div>
              </div>

              {/* Default */}
              <div className="flex border-b border-border bg-card">
                <div className="w-[120px] px-6 py-6 flex items-center">
                  <p className="text-card-foreground text-sm">Default</p>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton variant="primary" size="medium">
                    Button
                  </LexipolButton>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton variant="secondary" size="medium">
                    Button
                  </LexipolButton>
                </div>
                <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton variant="destructive" size="medium">
                    Button
                  </LexipolButton>
                </div>
              </div>

              {/* Hover */}
              <div className="flex border-b border-border bg-card">
                <div className="w-[120px] px-6 py-6 flex items-center">
                  <p className="text-card-foreground text-sm">Hover</p>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="primary"
                    size="medium"
                    className="hover:bg-primary/90"
                  >
                    Button
                  </LexipolButton>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="secondary"
                    size="medium"
                    className="hover:bg-muted"
                  >
                    Button
                  </LexipolButton>
                </div>
                <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="destructive"
                    size="medium"
                    className="hover:bg-destructive/90"
                  >
                    Button
                  </LexipolButton>
                </div>
              </div>

              {/* Active */}
              <div className="flex border-b border-border bg-card">
                <div className="w-[120px] px-6 py-6 flex items-center">
                  <p className="text-card-foreground text-sm">Active</p>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="primary"
                    size="medium"
                    className="bg-primary/80"
                  >
                    Button
                  </LexipolButton>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="secondary"
                    size="medium"
                    className="bg-muted/80"
                  >
                    Button
                  </LexipolButton>
                </div>
                <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="destructive"
                    size="medium"
                    className="bg-destructive/80"
                  >
                    Button
                  </LexipolButton>
                </div>
              </div>

              {/* Disabled */}
              <div className="flex border-b border-border bg-card">
                <div className="w-[120px] px-6 py-6 flex items-center">
                  <p className="text-card-foreground text-sm">Disabled</p>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton variant="primary" size="medium" disabled>
                    Button
                  </LexipolButton>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton variant="secondary" size="medium" disabled>
                    Button
                  </LexipolButton>
                </div>
                <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton variant="destructive" size="medium" disabled>
                    Button
                  </LexipolButton>
                </div>
              </div>

              {/* Focus */}
              <div className="flex border-b border-border last:border-b-0 bg-card">
                <div className="w-[120px] px-6 py-6 flex items-center">
                  <p className="text-card-foreground text-sm">Focus</p>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="primary"
                    size="medium"
                    className="ring-2 ring-ring ring-offset-2"
                  >
                    Button
                  </LexipolButton>
                </div>
                <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="secondary"
                    size="medium"
                    className="ring-2 ring-ring ring-offset-2"
                  >
                    Button
                  </LexipolButton>
                </div>
                <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                  <LexipolButton
                    variant="destructive"
                    size="medium"
                    className="ring-2 ring-ring ring-offset-2"
                  >
                    Button
                  </LexipolButton>
                </div>
              </div>
            </div>
          </div>

          {/* Configurations */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">Icon Configurations</h3>
            <p className="text-muted-foreground text-sm">
              Buttons can be configured with icons in various combinations for
              different use cases.
            </p>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[220px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">Configuration</p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Preview</p>
                </div>
              </div>

              {buttonConfigurations.map((config) => (
                <div
                  key={config.name}
                  className="flex border-b border-border last:border-b-0 bg-card"
                >
                  <div className="w-[220px] px-6 py-6 flex items-center">
                    <p className="text-card-foreground text-sm">{config.name}</p>
                  </div>
                  <div className="flex-1 px-6 py-6 border-l border-border flex items-center gap-4">
                    <LexipolButton
                      variant="primary"
                      size="medium"
                      leftIcon={config.leftIcon}
                      rightIcon={config.rightIcon}
                      iconOnly={config.iconOnly}
                    >
                      {!config.iconOnly && "Button"}
                    </LexipolButton>
                    <LexipolButton
                      variant="secondary"
                      size="medium"
                      leftIcon={config.leftIcon}
                      rightIcon={config.rightIcon}
                      iconOnly={config.iconOnly}
                    >
                      {!config.iconOnly && "Button"}
                    </LexipolButton>
                    <LexipolButton
                      variant="destructive"
                      size="medium"
                      leftIcon={config.leftIcon}
                      rightIcon={config.rightIcon}
                      iconOnly={config.iconOnly}
                    >
                      {!config.iconOnly && "Button"}
                    </LexipolButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Tokens */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">Design Tokens</h3>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex bg-muted border-b border-border">
                <div className="w-[200px] px-6 py-4">
                  <p className="text-muted-foreground text-xs">Property</p>
                </div>
                <div className="w-[200px] px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Token</p>
                </div>
                <div className="flex-1 px-6 py-4 border-l border-border">
                  <p className="text-muted-foreground text-xs">Value</p>
                </div>
              </div>

              {[
                {
                  property: "Primary Background",
                  token: "--primary",
                  value: "rgba(0, 75, 135, 1.00)",
                },
                {
                  property: "Primary Text",
                  token: "--primary-foreground",
                  value: "rgba(255, 255, 255, 1.00)",
                },
                {
                  property: "Secondary Background",
                  token: "--secondary",
                  value: "rgba(255, 255, 255, 1.00)",
                },
                {
                  property: "Secondary Text",
                  token: "--secondary-foreground",
                  value: "rgba(18, 25, 38, 1.00)",
                },
                {
                  property: "Destructive Background",
                  token: "--destructive",
                  value: "rgba(239, 68, 68, 1.00)",
                },
                {
                  property: "Destructive Text",
                  token: "--destructive-foreground",
                  value: "rgba(255, 255, 255, 1.00)",
                },
                {
                  property: "Border Radius (Small/Medium)",
                  token: "--radius",
                  value: "4px",
                },
                {
                  property: "Border Radius (Large)",
                  token: "--radius-lg",
                  value: "8px",
                },
                {
                  property: "Elevation",
                  token: "--elevation-sm",
                  value: "See Elevations page",
                },
                {
                  property: "Focus Ring",
                  token: "--ring",
                  value: "rgba(0, 75, 135, 1.00)",
                },
              ].map((token, index) => (
                <div
                  key={index}
                  className="flex border-b border-border last:border-b-0 bg-card"
                >
                  <div className="w-[200px] px-6 py-6 flex items-center">
                    <p className="text-card-foreground text-sm">
                      {token.property}
                    </p>
                  </div>
                  <div className="w-[200px] px-6 py-6 border-l border-border flex items-center">
                    <code className="text-primary text-xs bg-muted px-2 py-1 rounded">
                      {token.token}
                    </code>
                  </div>
                  <div className="flex-1 px-6 py-6 border-l border-border flex items-center">
                    <p className="text-card-foreground text-xs">{token.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">Usage Guidelines</h3>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-sm">
                      Use Primary buttons for main actions
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Primary buttons should be used for the most important
                      action on a page, such as "Submit", "Save", or "Continue".
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-sm">
                      Use Secondary buttons for alternative actions
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Secondary buttons provide less visual weight and are used
                      for secondary actions like "Cancel" or "Back".
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-sm">
                      Use Destructive buttons for irreversible actions
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Destructive buttons should only be used for actions that
                      cannot be undone, such as "Delete" or "Remove".
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-sm">
                      Use appropriate sizes for context
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Small buttons work well in compact layouts and tables,
                      medium is the default for most cases, and large buttons
                      are best for hero sections and prominent CTAs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="flex flex-col gap-8">
            <h3 className="text-foreground">Code Examples</h3>
            <p className="text-muted-foreground text-sm">
              Copy and paste these code examples for your engineering team.
            </p>

            {/* Flutter */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h4 className="text-card-foreground text-base">Flutter</h4>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  Dart
                </span>
              </div>
              <div className="bg-muted border border-border rounded-lg p-6 overflow-x-auto">
                <pre className="text-xs text-foreground font-mono whitespace-pre">
                  <code>{`// Button Component
import 'package:flutter/material.dart';

enum ButtonVariant { primary, secondary, destructive }
enum ButtonSize { small, medium, large }

class LexipolButton extends StatelessWidget {
  final String label;
  final ButtonVariant variant;
  final ButtonSize size;
  final VoidCallback? onPressed;
  final bool disabled;
  final Widget? leftIcon;
  final Widget? rightIcon;
  final bool iconOnly;

  const LexipolButton({
    Key? key,
    required this.label,
    this.variant = ButtonVariant.primary,
    this.size = ButtonSize.medium,
    this.onPressed,
    this.disabled = false,
    this.leftIcon,
    this.rightIcon,
    this.iconOnly = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final colors = _getColors();
    final dimensions = _getDimensions();

    return ElevatedButton(
      onPressed: disabled ? null : onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: colors['background'],
        foregroundColor: colors['foreground'],
        padding: EdgeInsets.symmetric(
          horizontal: dimensions['paddingH']!,
          vertical: dimensions['paddingV']!,
        ),
        minimumSize: Size(0, dimensions['height']!),
        textStyle: TextStyle(
          fontSize: dimensions['fontSize']!,
          fontWeight: FontWeight.w500,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(4),
        ),
        elevation: variant == ButtonVariant.primary ? 1 : 0,
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (leftIcon != null && !iconOnly) leftIcon!,
          if (!iconOnly) ...[
            SizedBox(width: leftIcon != null || rightIcon != null ? 8 : 0),
            Text(label),
            SizedBox(width: leftIcon != null || rightIcon != null ? 8 : 0),
          ],
          if (rightIcon != null && !iconOnly) rightIcon!,
          if (iconOnly && (leftIcon != null || rightIcon != null))
            leftIcon ?? rightIcon!,
        ],
      ),
    );
  }

  Map<String, Color> _getColors() {
    switch (variant) {
      case ButtonVariant.primary:
        return {
          'background': Color(0xFF004B87),
          'foreground': Colors.white,
        };
      case ButtonVariant.secondary:
        return {
          'background': Colors.white,
          'foreground': Color(0xFF121926),
        };
      case ButtonVariant.destructive:
        return {
          'background': Color(0xFFEF4444),
          'foreground': Colors.white,
        };
    }
  }

  Map<String, double> _getDimensions() {
    switch (size) {
      case ButtonSize.small:
        return {'height': 36, 'paddingH': 16, 'paddingV': 8, 'fontSize': 14};
      case ButtonSize.medium:
        return {'height': 40, 'paddingH': 16, 'paddingV': 8, 'fontSize': 16};
      case ButtonSize.large:
        return {'height': 56, 'paddingH': 32, 'paddingV': 16, 'fontSize': 22};
    }
  }
}

// Usage Examples
LexipolButton(
  label: 'Primary Button',
  variant: ButtonVariant.primary,
  size: ButtonSize.medium,
  onPressed: () {},
)

LexipolButton(
  label: 'Secondary Button',
  variant: ButtonVariant.secondary,
  size: ButtonSize.medium,
  onPressed: () {},
)

LexipolButton(
  label: 'Delete',
  variant: ButtonVariant.destructive,
  size: ButtonSize.medium,
  onPressed: () {},
)

LexipolButton(
  label: 'Button with Icon',
  variant: ButtonVariant.primary,
  leftIcon: Icon(Icons.add),
  onPressed: () {},
)`}</code>
                </pre>
              </div>
            </div>

            {/* React */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h4 className="text-card-foreground text-base">React</h4>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  TypeScript
                </span>
              </div>
              <div className="bg-muted border border-border rounded-lg p-6 overflow-x-auto">
                <pre className="text-xs text-foreground font-mono whitespace-pre">
                  <code>{`// Button Component
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'destructive';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
}

const buttonVariants = {
  primary: 'bg-[#004B87] text-white hover:bg-[#004B87]/90',
  secondary: 'bg-white text-[#121926] border border-[#E3E8EF] hover:bg-[#F8FAFC]',
  destructive: 'bg-[#EF4444] text-white hover:bg-[#EF4444]/90',
};

const buttonSizes = {
  small: 'h-9 px-4 text-sm',
  medium: 'h-10 px-4 text-base',
  large: 'h-14 px-8 text-xl',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className,
  disabled,
  leftIcon,
  rightIcon,
  iconOnly = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded',
        'font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[#004B87] focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && !iconOnly && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {!iconOnly && children}
      {rightIcon && !iconOnly && (
        <span className="ml-2">{rightIcon}</span>
      )}
      {iconOnly && (leftIcon || rightIcon)}
    </button>
  );
};

// Usage Examples
<Button variant="primary" size="medium">
  Primary Button
</Button>

<Button variant="secondary" size="medium">
  Secondary Button
</Button>

<Button variant="destructive" size="medium">
  Delete
</Button>

<Button variant="primary" leftIcon={<PlusIcon />}>
  Add Item
</Button>

<Button variant="primary" size="small" disabled>
  Disabled Button
</Button>`}</code>
                </pre>
              </div>
            </div>

            {/* Angular */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h4 className="text-card-foreground text-base">Angular</h4>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  TypeScript
                </span>
              </div>
              <div className="bg-muted border border-border rounded-lg p-6 overflow-x-auto">
                <pre className="text-xs text-foreground font-mono whitespace-pre">
                  <code>{`// Button Component
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: \`<button
    [class]="getButtonClasses()"
    [disabled]="disabled"
    (click)="onClick.emit($event)"
    [attr.aria-label]="iconOnly ? label : null">
    <ng-container *ngIf="leftIcon && !iconOnly">
      <ng-container *ngTemplateOutlet="leftIcon"></ng-container>
    </ng-container>
    <span *ngIf="!iconOnly">{{ label }}</span>
    <ng-container *ngIf="rightIcon && !iconOnly">
      <ng-container *ngTemplateOutlet="rightIcon"></ng-container>
    </ng-container>
    <ng-container *ngIf="iconOnly && (leftIcon || rightIcon)">
      <ng-container *ngTemplateOutlet="leftIcon || rightIcon"></ng-container>
    </ng-container>
  </button>\`,
  styles: [\`.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.2s;
    cursor: pointer;
    border: none;
    outline: none;
  }
  .btn:focus-visible {
    outline: 2px solid #004B87;
    outline-offset: 2px;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .btn-primary {
    background-color: #004B87;
    color: white;
  }
  .btn-primary:hover:not(:disabled) {
    background-color: rgba(0, 75, 135, 0.9);
  }
  .btn-secondary {
    background-color: white;
    color: #121926;
    border: 1px solid #E3E8EF;
  }
  .btn-secondary:hover:not(:disabled) {
    background-color: #F8FAFC;
  }
  .btn-destructive {
    background-color: #EF4444;
    color: white;
  }
  .btn-destructive:hover:not(:disabled) {
    background-color: rgba(239, 68, 68, 0.9);
  }
  .btn-small {
    height: 36px;
    padding: 8px 16px;
    font-size: 14px;
  }
  .btn-medium {
    height: 40px;
    padding: 8px 16px;
    font-size: 16px;
  }
  .btn-large {
    height: 56px;
    padding: 16px 32px;
    font-size: 22px;
  }\`]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled: boolean = false;
  @Input() leftIcon?: any;
  @Input() rightIcon?: any;
  @Input() iconOnly: boolean = false;
  @Output() onClick = new EventEmitter<Event>();

  getButtonClasses(): string {
    return 'btn btn-' + this.variant + ' btn-' + this.size;
  }
}

// Usage Examples
<app-button
  label="Primary Button"
  variant="primary"
  size="medium"
  (onClick)="handleClick()">
</app-button>

<app-button
  label="Secondary Button"
  variant="secondary"
  size="medium"
  (onClick)="handleClick()">
</app-button>

<app-button
  label="Delete"
  variant="destructive"
  size="medium"
  (onClick)="handleDelete()">
</app-button>

<app-button
  label="Add Item"
  variant="primary"
  [leftIcon]="plusIcon"
  (onClick)="handleAdd()">
</app-button>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

