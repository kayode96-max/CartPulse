# CartPulse Design System

## Design Direction

CartPulse uses a **Modern Hybrid / Fintech-Utility** visual language. The interface should feel precise, fast and financially clear while remaining practical for use inside a physical store.

## Light Theme

The light theme uses cool near-white surfaces with emerald as the primary brand/action color.

| Token | Value | Use |
|---|---|---|
| Primary | `#047857` | Primary actions and active states |
| Deep Primary | `#005d42` | Strong emphasis / pressed states |
| Mint | `#10B981` / `#34D399` | Positive accents |
| Warning | `#F59E0B` | Approaching budget |
| Error | `#EF4444` | Over-budget / destructive / errors |
| Background | `#FAF8FF` | App canvas |
| Surface | `#FFFFFF` | Cards, sheets, inputs |
| Main Text | `#131B2E` | Primary content |
| Secondary Text | `#3E4943` | Supporting content |

Use white surfaces against the cool off-white canvas with restrained borders/shadows. Emerald should be reserved for important actions, active navigation, successful verification and positive budget states.

## Dark Theme

The dark theme uses deep slate/obsidian surfaces with bright emerald accents.

| Token | Value | Use |
|---|---|---|
| Background | `#0B0F17` | App canvas |
| Surface | `#111827` | Cards and primary surfaces |
| Elevated Surface | `#1F2937` | Elevated cards, inputs and sheets |
| Primary | `#10B981` | Primary actions and active states |
| Mint | `#34D399` | Highlights and positive feedback |
| Main Text | `#F9FAFB` | Primary content |
| Secondary Text | `#9CA3AF` | Supporting content |
| Error | `#EF4444` | Error / destructive states |

Preserve clear separation between the base canvas, normal surfaces and elevated surfaces. Avoid making every surface a different shade.

## Status Semantics

- **Emerald:** safe, successful or verified
- **Amber:** approaching the budget limit
- **Crimson:** over budget, destructive action or failure
- **Neutral:** inactive or informational

Never communicate budget state through color alone. Show the percentage, amount or explicit status as text.

## Typography

### Space Grotesk

Use for running totals, budget values, large metrics, major headings and price emphasis.

### Plus Jakarta Sans

Use for product names, descriptions, labels, navigation and supporting content.

## Layout

Primary mobile target: **360px–428px** with 16px outer margins, 16px gutters, a four-column structure and thumb-friendly bottom actions.

At approximately 768px and above, the design can transition to an eight-column structure with a persistent receipt summary rail of approximately 360px.

## Radius

| Component | Radius |
|---|---:|
| Inputs / compact chips | 8px |
| Product and budget cards | 16px |
| Sheets | 24px |
| Pills / badges | 9999px |
| Scanner reticle | 12px |

## Elevation

1. Base canvas
2. Cards with subtle borders and ambient shadows
3. Floating controls with stronger elevation
4. Scanner with a dark camera overlay and highlighted viewport
5. Modals with the strongest elevation

## Component Principles

- Maintain consistent spacing between related content.
- Use strong hierarchy for prices and budget values.
- Keep primary actions obvious.
- Centralize design tokens.
- Keep light and dark themes functionally identical.
- Test contrast and touch targets on physical devices.
