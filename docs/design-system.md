# CartPulse Design System

## Scope

This design system covers the core shopping budget flow: store connection, product discovery, item scanning/adding, live cart totals, budget status, item quantity changes, and checkout review.

The supplied design package contains both light and dark variants. The token blocks in the supplied `DESIGN.md` files are treated as the most precise source for named theme tokens. Where the prose palette uses a different value for the same concept, the semantic token name is preserved and the discrepancy is recorded in the research log.

## Brand direction

CartPulse is designed as a high-precision, mobile-first retail utility. The interface should feel fast, legible and financially clear while a shopper is moving through a store.

Key qualities:

- **Fast feedback:** adding an item immediately updates the cart total and budget state.
- **Financial clarity:** the current total, budget limit and remaining amount should be readable at a glance.
- **Operational focus:** scanning and adding an item are primary actions.
- **Controlled hierarchy:** status colors communicate budget state without overwhelming the shopping list.

## Color system

### Light theme

| Role | Token value |
|---|---|
| Background / surface | `#FAF8FF` |
| Lowest surface | `#FFFFFF` |
| Primary token | `#005D42` |
| Primary container | `#047857` |
| Secondary | `#006C49` |
| Secondary container | `#6CF8BB` |
| Tertiary | `#734700` |
| Error | `#BA1A1A` |
| Main text | `#131B2E` |
| Secondary text | `#3E4943` |
| Outline | `#6E7A73` |
| Outline variant | `#BDC9C1` |

The design prose also describes `#047857` as the primary deep emerald and `#10B981` / `#34D399` as electric mint accents. These should be treated as semantic accent guidance rather than replacing the named token values above.

### Dark theme

The dark design uses an obsidian base with emerald accents:

- Base canvas: `#0B0F17`
- Card surface: `#111827`
- Elevated surface: `#1F2937`
- Structural border: `#374151`
- Primary accent: `#10B981`
- Secondary accent: `#34D399`
- Primary text: `#F9FAFB`
- Secondary text: `#9CA3AF`
- Error/destructive accent: `#EF4444`

Use theme tokens rather than hard-coding these values throughout components.

## Budget status colors

The visual specification defines three budget states:

| State | Range | Visual treatment |
|---|---:|---|
| Safe | 0%–79% | Emerald / primary |
| Warning | 80%–94% | Amber |
| Critical / over budget | 95%+ | Crimson / error |

The percentage is:

`cartTotal / budgetLimit * 100`

The UI should also expose the actual remaining amount:

`budgetLimit - cartTotal`

A negative result means the cart is over budget.

## Typography

### Light theme token scale

**Space Grotesk** is used for high-impact headings and financial metrics.

| Token | Size | Weight | Line height |
|---|---:|---:|---:|
| display-lg | 36px | 700 | 44px |
| display-lg-mobile | 28px | 700 | 34px |
| headline-lg | 24px | 600 | 30px |
| headline-md | 20px | 600 | 26px |
| headline-sm | 16px | 600 | 22px |
| metric-display | 32px | 700 | 36px |

**Plus Jakarta Sans** is used for body copy, labels and supporting information.

| Token | Size | Weight | Line height |
|---|---:|---:|---:|
| body-lg | 16px | 400 | 24px |
| body-md | 14px | 400 | 20px |
| body-sm | 12px | 400 | 16px |
| label-lg | 14px | 600 | 18px |
| label-md | 12px | 600 | 16px |
| label-sm | 10px | 700 | 14px |

### Dark theme

The dark design export uses **Space Grotesk** across its type scale and defines larger sizes than the light export. Preserve the dark theme's supplied tokens when implementing the dark screens rather than silently substituting the light scale.

Financial values should use tabular figures (`tnum`) so changing totals do not cause visual jitter.

## Spacing and shape

Core spacing tokens:

- `space-xs`: 4px
- `space-sm`: 8px
- `space-md`: 16px
- `space-lg`: 24px
- `space-xl`: 32px
- Standard mobile gutter: 16px

Corner radii:

- `sm`: 4px
- default: 8px
- `md`: 12px
- `lg`: 16px
- `xl`: 24px
- `full`: 9999px

The core mobile layout is designed around a 4-column structure with 16px outer margins/gutters. Tablet layouts move toward an 8-column structure.

## Core components

### Primary action

Used for the main scan/add/checkout path.

- Emerald background
- High-contrast text
- Approximately 56px touch height for major actions
- 16px radius for prominent actions in the supplied designs

### Secondary action

Used for supporting actions such as manual item entry or budget editing.

- Surface background
- Visible outline
- High-contrast label

### Budget meter

The budget meter combines:

- Current cart total
- Budget limit
- Remaining amount
- Percentage/status indicator
- Safe, warning and critical visual states

### Cart item

A cart item should show:

- Product name
- Unit price
- Quantity
- Line total
- Optional thumbnail when available
- Quantity controls
- A clear removal action

### Scanner viewfinder

The scanner design uses:

- Full-screen or edge-to-edge camera context
- Darkened overlay
- Central scanning viewport
- Emerald reticle/laser treatment
- Immediate confirmation feedback after a successful scan

### Checkout review

The checkout design is a review state, not evidence that payment integration exists. It summarizes the verified cart, item count and total against the spending limit.

## Interaction principles

1. Keep the running total visible during shopping.
2. Make the current budget state obvious without requiring navigation.
3. Keep scan/add actions within the lower thumb-friendly area on mobile.
4. Use immediate feedback when an item is added or removed.
5. Avoid layout movement when financial values change.
