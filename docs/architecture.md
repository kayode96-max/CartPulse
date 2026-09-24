# CartPulse Architecture

## Scope

This document describes the core budget-tracking domain shown by the supplied designs. It is an implementation target, not a description of code that already exists.

## Current repository architecture

The repository is currently a minimal Expo application:

- `App.js` renders a centered placeholder message.
- `index.js` registers the Expo root component.
- `package.json` contains Expo, React and React Native dependencies and basic Expo scripts.
- `app.json` contains the Expo application configuration.
- There is currently no cart state, budget state, scanner flow, product search flow, checkout review, navigation structure or domain model implemented.

## Core domain model

### Budget

A budget is the shopper's spending ceiling for the current shopping session.

```text
Budget
├── limit: number
└── currency: "NGN"
```

The designs use Nigerian Naira (`₦`) for displayed values.

### Cart item

Each cart item represents a product currently counted toward the shopper's budget.

```text
CartItem
├── id: string
├── name: string
├── unitPrice: number
├── quantity: number
├── lineTotal: number
├── barcode?: string
└── imageUri?: string
```

`lineTotal` should be derived from `unitPrice * quantity` rather than treated as an independently editable value.

### Cart

```text
Cart
├── items: CartItem[]
├── subtotal: number
├── budgetLimit: number
├── remaining: number
└── budgetPercent: number
```

Derived values:

```text
subtotal = Σ(item.unitPrice × item.quantity)

remaining = budgetLimit - subtotal

budgetPercent = (subtotal / budgetLimit) × 100
```

The implementation should calculate these values from the item list and budget limit so there is one source of truth.

## Budget status and trigger rules

The status is determined from the estimated checkout total, including estimated tax:

```text
budgetPercent = (estimatedTotal / budgetLimit) × 100
```

### Under Budget

Trigger:

```text
estimatedTotal < 0.80 × budgetLimit
```

### Warning

Trigger:

```text
0.80 × budgetLimit ≤ estimatedTotal < 0.95 × budgetLimit
```

The warning state begins exactly when the estimated total reaches 80% of the budget.

### Critical

Trigger:

```text
0.95 × budgetLimit ≤ estimatedTotal ≤ budgetLimit
```

### Over Budget

Trigger:

```text
estimatedTotal > budgetLimit
```

When over budget, the overrun is:

```text
overrun = estimatedTotal - budgetLimit
```

The UI must show the overrun rather than presenting a negative remaining amount as available spending room.

### Estimated tax

The budget decision uses the estimated total, not only the pre-tax subtotal:

```text
estimatedTax = taxableSubtotal × estimatedTaxRate
estimatedTotal = subtotal + estimatedTax
remaining = budgetLimit - estimatedTotal
```

For example, with a ₦100,000 budget, a ₦78,000 subtotal and a 7.5% estimated tax rate:

```text
estimatedTax = ₦78,000 × 0.075 = ₦5,850
estimatedTotal = ₦83,850
budgetPercent = 83.85%
→ Warning
```

Tax is an estimate, not a guaranteed register total. The UI should label it as estimated and recalculate it whenever the taxable cart amount changes.

## Core state transitions

### 1. Start shopping

The shopper establishes a budget limit and reaches the main shopping experience.

### 2. Add an item

An item is identified through scanning or the supported item-entry/search flow.

The app should:

1. Resolve the product.
2. Create or update its cart item.
3. Recalculate the subtotal.
4. Recalculate remaining budget.
5. Recalculate budget percentage/status.
6. Show immediate confirmation.

### 3. Change quantity

Changing quantity must update the same derived values. Quantity changes should not require rebuilding the entire cart manually.

### 4. Remove an item

Removing an item subtracts its line total from the derived subtotal and updates budget status immediately.

### 5. Review checkout

The checkout review summarizes the current cart and confirms the total against the budget. The supplied design does not by itself establish a real payment-processing backend, so checkout review should remain a presentation/review state until payment requirements are explicitly added.

## Product lookup flow

The designs show two ways to reach a product:

- Scanner-based identification.
- Search with predictive results.

Both paths should converge on the same cart mutation operation. The cart should not care whether an item came from a scanner, search result or manual entry.

Conceptually:

```text
Scanner ───────┐
               ├──> Product ──> Add/Update Cart ──> Budget Calculations
Search ────────┘
```

## Suggested module boundaries

A future implementation can be organized around:

```text
src/
├── components/
│   ├── BudgetMeter
│   ├── CartItem
│   ├── QuantityStepper
│   ├── ScannerView
│   └── ...
├── screens/
│   ├── StoreCheckIn
│   ├── Shopping
│   ├── SearchResults
│   └── CheckoutReview
├── state/
│   └── cart/
├── services/
│   ├── productLookup
│   └── scanner
├── theme/
│   ├── colors
│   ├── typography
│   └── spacing
└── utils/
    └── currency
```

This is a proposed target structure, not a statement that these directories already exist.

## Important invariants

- Quantity must be at least 1 for an item that remains in the cart.
- Unit price is the price used for the line-total calculation.
- Subtotal is always the sum of current line totals.
- Remaining budget is always `budgetLimit - subtotal`.
- Budget status is derived from the current subtotal and budget limit.
- Monetary calculations should avoid floating-point surprises. Store minor currency units where practical, or use a decimal-safe money strategy.
- Formatting `₦` for display must not change the underlying numeric value.

## Error and edge cases

The implementation should explicitly handle:

- No budget set.
- Zero budget.
- Product not found.
- Scanner failure.
- Duplicate scans of the same product.
- Quantity increase/decrease.
- Removing the final item.
- Cart total exactly equal to the budget.
- Cart total above the budget.
- Search returning no results.
- Temporary product lookup failure.

## Architecture status

Nothing in this document should be read as implemented today. The starter repository currently provides only the Expo entry point and placeholder screen described in [Implementation Status](./implementation.md).
