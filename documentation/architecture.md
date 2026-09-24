# CartPulse Architecture

## Purpose

This document describes the planned architecture for turning the current Expo starter into the CartPulse shopping assistant.

## Application Layers

```text
CartPulse
├── Presentation
│   ├── Store Check-In
│   ├── Scanner
│   ├── Search
│   ├── Search Results
│   ├── Live Cart
│   ├── Budget Meter
│   └── Checkout
├── State
│   ├── Shopping Session
│   ├── Cart
│   ├── Budget
│   ├── Store
│   └── User Preferences
├── Device Services
│   ├── Camera
│   ├── Barcode Scanner
│   ├── Haptics
│   └── Local Storage
├── Backend Services
│   ├── Catalog
│   ├── Product Search
│   ├── Pricing
│   ├── Inventory
│   ├── Sessions
│   └── Checkout Verification
└── Integrations
    ├── Retailer Systems
    ├── Payment Providers
    └── AI / Product Recognition
```

## Suggested Structure

```text
screens/
├── StoreCheckIn/
├── Scanner/
├── Search/
├── LiveCart/
└── Checkout/

components/
├── BudgetMeter/
├── CartItem/
├── ProductCard/
├── ScannerFrame/
├── SearchBar/
├── StoreChip/
└── StatusBadge/

services/
├── barcode/
├── catalog/
├── store/
├── pricing/
└── checkout/

store/
├── cart/
├── budget/
├── session/
└── user/
```

## Core Data

```ts
type ShoppingSession = {
  id: string
  storeId: string
  budget: number
  currency: string
  items: CartItem[]
  subtotal: number
  tax: number
  discount: number
  estimatedTotal: number
  status: 'active' | 'reviewing' | 'completed'
}

type CartItem = {
  productId: string
  sku: string
  name: string
  price: number
  quantity: number
  unit: string
  aisle?: string
  imageUrl?: string
  verified: boolean
}
```

## Budget Logic

```text
remaining = budget - subtotal
percentageUsed = (subtotal / budget) × 100
```

Default design states:

- 0%–79%: safe
- 80%–94%: warning
- 95%+: overrun

Keep thresholds configurable.

## Store Context

The application requires a connected store context for store-aware product data.

**Aisle/shelf information is a recommended product requirement, not a capability explicitly specified in the original Stitch screens.** It should nevertheless be retained in the architecture because it can make product search and in-store navigation more useful. See the related GitHub issue before implementation decisions are finalized.

## Product Identification

Use deterministic identifiers such as SKU, UPC or EAN where available. AI/product matching can assist with ambiguous cases but should not replace authoritative identifiers.

## Checkout

The designed QR/express-exit workflow requires retailer-side verification and server authorization before production use.

## Initial Non-Goals

Dietary filtering is intentionally out of the initial scope. Users are selecting the products they want themselves, so dietary filtering is not currently necessary to deliver the core budget-tracking workflow.
