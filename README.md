# CartPulse

> **Shop with your budget in view.**

CartPulse is a smart in-store shopping assistant that helps shoppers track the cost of their basket while they shop. Instead of discovering at the cashier that the basket has exceeded the intended budget, CartPulse maintains a live running total as products are scanned or added.

This documentation is based on the supplied CartPulse Stitch design package and the current Expo/React Native repository.

---

## Overview

CartPulse is built around a simple idea:

**Know what your cart costs before you reach the cashier.**

A typical shopping session is:

1. Connect to a participating store.
2. Set or confirm a shopping budget.
3. Scan products as they are picked from shelves.
4. Identify products using store-aware catalog data.
5. Add products to a live cart.
6. Continuously display the subtotal and remaining budget.
7. Search for products or add them manually when scanning is unavailable.
8. Adjust quantities or remove products.
9. Review the estimated total before checkout.
10. Prepare the cart for a supported checkout/exit workflow.

The product is designed primarily for fast, one-handed mobile interaction inside a physical store.

---

## Problem

Traditional shopping makes it easy to lose track of spending.

A shopper can:

- Pick up several inexpensive items without mentally adding them.
- Forget the price of an earlier item.
- Miscalculate quantities.
- Compare products without knowing how much budget remains.
- Reach the cashier and only then discover that the basket is over budget.

CartPulse moves that financial awareness from the checkout counter into the shopping aisle.

---

## Product Vision

CartPulse combines:

- Real-time cart accounting
- Barcode scanning
- Store-aware product search
- Budget pacing
- Quantity management
- Store catalog synchronization
- Checkout preparation

The visual direction combines **retail utility** with **fintech-style financial clarity**. The interface should feel like a personal point-of-sale terminal rather than a conventional e-commerce app.

---

## Core User Journey

### 1. Store Check-In

The shopper connects to a participating store.

The design supports:

- Store entrance QR scanning
- Manual store identification
- Frequently visited stores
- Store-specific catalog synchronization
- Store and aisle-aware pricing

Example store data shown in the design includes Shoprite Ikeja City Mall and Spar Victoria Island.

These are demonstration values in the design and should not be treated as live retailer integrations.

The connection flow communicates states such as:

- Connecting
- Syncing Catalog
- Store Connected

### 2. Main Scanner

The scanner is the primary product-entry interaction.

The designed scanner provides:

- Camera barcode scanning
- Barcode alignment reticle
- Scan feedback
- Automatic product detection
- Manual barcode/search fallback
- Recent searches
- Recent scans
- Auto-Add Mode

The scanner is positioned around the lower interaction zone so the shopper can operate the app with minimal hand movement.

### 3. Predictive Search

When a shopper does not want to scan, CartPulse provides store-aware search.

Search results can contain:

- Product name
- Pack size
- Price
- Aisle
- Availability
- Remaining budget
- Add-to-cart action

The design also provides a direct return to barcode scanning when the exact product or size cannot be found.

### 4. Live Cart

The live cart is the financial center of the app.

A cart item can display:

- Product image
- Product name
- Unit price
- Quantity
- Line total
- SKU/barcode
- Stock verification
- Aisle/shelf information
- Remove action

Quantity can be adjusted inline without opening a separate product screen.

### 5. Budget Pacing

CartPulse continuously compares current spending against the shopper's budget.

The design uses three states:

| Spending | State | Meaning |
|---|---|---|
| 0%–79% | Safe | Normal shopping |
| 80%–94% | Warning | Approaching the limit |
| 95%–100%+ | Overrun | At or above the limit |

The current total, budget and remaining amount should remain visible enough for the shopper to understand their financial position at a glance.

### 6. Reality Check / Checkout

The checkout design provides a final review of:

- Cart total
- Budget comparison
- Items
- Verification status
- QR-code generation
- Express-exit readiness

For example, the design shows a cart of ₦4,500 against a ₦5,000 budget.

This is a target product workflow. The current repository does not yet implement retailer checkout, payment processing, QR authorization, or express-lane integration.

---

## Key Features

### Live Budget Tracking

Displays:

- Current spending
- Shopping budget
- Remaining budget
- Percentage used
- Budget status

### Barcode Scanning

The design includes a full-screen camera overlay with:

- Central scanning viewport
- Corner reticles
- Scan laser
- Success feedback
- Manual fallback

### Smart Product Detection

The design presents an **AI Auto-Detect Active** state intended to reduce friction when matching scanned products to the correct store catalog entry.

The production AI/product-matching layer is not yet implemented.

### Store-Aware Search

Search results can be scoped to the connected store so that prices, aisle locations, availability and product variants can be retailer-specific.

### Quantity Management

Products can be incremented and decremented directly inside the cart.

### Swipe-to-Remove

Cart rows are designed to support quick left-swipe removal.

### Recent Searches and Scans

The scanner/search experience keeps recent shopping context readily available.

### Dietary Filters

The design includes example dietary filters such as:

- Halal
- Vegan

### Auto-Add Mode

When enabled, successfully identified products can be added directly to the live cart.

### Receipt Breakdown

The live cart design supports:

- Cart subtotal
- VAT
- Store/member discount
- Estimated total
- Verification count

Tax and discount rules should be configurable because the final calculation depends on retailer and jurisdiction.

---

## Screen Architecture

The design package contains six primary screens, each with light and dark variants.

| Screen | Purpose |
|---|---|
| Store Check-In | Connect the session to a store |
| Main Scanner / Smart Search | Scan or search for products |
| Predictive Search Results | Select a product from store-aware results |
| Live Cart Dashboard | Manage the current basket |
| Reality Check / Checkout Modal | Review and verify the final cart |
| Scan Confirmation Toast | Confirm a successful scan/add action |

### Store Check-In

Focuses on store identification, QR scanning, manual connection, frequently visited stores and catalog synchronization.

### Main Scanner / Smart Search

Combines:

- Current store
- Cart total
- Budget
- Camera scanner
- Search
- Recent searches
- Store aisle browsing
- Dietary filters
- Auto-add mode
- Bottom navigation

### Predictive Search Results

Provides:

- Result count
- Aisle context
- Remaining budget
- Product variants
- Pack sizes
- Prices
- Add actions
- Barcode fallback

### Live Cart Dashboard

Provides:

- Item count
- Live scanning stream
- Product rows
- Quantity controls
- Remove actions
- SKU information
- Receipt breakdown
- Estimated total
- Finish Shopping action

### Reality Check / Checkout

Provides the final budget comparison, verified item count, QR generation and checkout readiness.

### Scan Confirmation Toast

Provides non-blocking feedback after a product is added, while keeping the scanner available.

---

## Design System

The CartPulse visual language is described as **Modern Hybrid / Fintech-Utility**.

The system prioritizes:

- High information density
- Strong numeric hierarchy
- Fast visual scanning
- High contrast
- Subtle elevation
- Clear financial states
- Retail-friendly interaction

### Brand Character

The design aims to communicate:

- Real-time agency
- Precision
- Speed
- Financial awareness
- Disciplined optimism

---

## Color System

### Light Theme

| Role | Color |
|---|---|
| Primary | #047857 |
| Deep primary | #005d42 |
| Secondary / mint | #10B981 / #34D399 |
| Warning | #F59E0B |
| Error | #EF4444 |
| Background | #FAF8FF |
| Surface | #FFFFFF |
| Main text | #131B2E |
| Secondary text | #3E4943 |

### Dark Theme

| Role | Color |
|---|---|
| Background | #0B0F17 |
| Surface | #111827 |
| Elevated surface | #1F2937 |
| Primary accent | #10B981 |
| Mint accent | #34D399 |
| Main text | #F9FAFB |
| Secondary text | #9CA3AF |
| Error | #EF4444 |

### Status Semantics

- **Emerald:** safe, successful or verified
- **Amber:** approaching budget limit
- **Crimson:** budget overrun, destructive action or failure
- **Neutral:** inactive or informational

Status should not rely on color alone. Numeric percentage and remaining budget should remain visible.

---

## Typography

CartPulse uses:

### Space Grotesk

For:

- Budget values
- Running totals
- Large metrics
- High-impact headings
- Price emphasis

### Plus Jakarta Sans

For:

- Product names
- Descriptions
- Labels
- Navigation
- Supporting information
- Administrative flows

The system favors stable numeric layouts so changing totals do not create unnecessary visual movement.

---

## Layout and Interaction

### Mobile First

The primary target is a 360px–428px mobile experience.

The design specifies:

- 16px outer margins
- 16px gutters
- Four-column mobile structure
- Thumb-friendly bottom actions

### Tablet

At 768px and above, the design can transition to:

- Eight-column layout
- Fluid scanner/inventory area
- Persistent receipt summary rail
- Approximately 360px receipt rail

### Interaction Zone

Primary actions should remain easy to reach in the lower portion of the viewport.

Important actions include:

- Scanner
- Cart
- Budget controls
- Checkout

---

## Shapes and Elevation

The design uses moderate rounded corners:

| Component | Radius |
|---|---:|
| Inputs / compact chips | 8px |
| Product cards / budget cards | 16px |
| Sheets | 24px |
| Pills / badges | 9999px |
| Scanner reticle | 12px |

Elevation is restrained:

1. **Base:** flat canvas
2. **Cards:** subtle border and ambient shadow
3. **Floating controls:** stronger elevation with emerald tint
4. **Scanner:** dark overlay with highlighted viewport
5. **Modals:** deepest elevation

This hierarchy is intended to remain readable under bright supermarket lighting.

---

## Scanner States

A production scanner should handle:

1. Idle
2. Camera permission request
3. Camera active
4. Barcode detected
5. Product matched
6. Product not found
7. Product added
8. Scan failed
9. Camera unavailable
10. Manual fallback

A successful scan should immediately communicate:

- What was detected
- Whether it was added
- Updated cart total
- Updated budget
- Any relevant error or verification state

Optional haptic/audio feedback can reinforce the visual confirmation.

---

## Budget Logic

The core calculations are:

~~~text
remaining = budget - subtotal
percentageUsed = (subtotal / budget) × 100
~~~

Status thresholds:

~~~text
0%  <= percentageUsed < 80%   → SAFE
80% <= percentageUsed < 95%   → WARNING
95% <= percentageUsed          → OVERRUN
~~~

For example:

~~~text
Budget:  ₦30,000
Subtotal: ₦25,750
Remaining: ₦4,250
Usage: approximately 85.8%
~~~

The threshold values should be configurable at the application level instead of being duplicated throughout UI components.

---

## Suggested Data Model

A future shopping session can be represented conceptually as:

~~~ts
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
~~~

These are architectural recommendations, not currently implemented types.

---

## Technology

The current repository is an Expo React Native project.

### Current Stack

- React Native
- Expo
- React
- JavaScript
- Expo Status Bar

Current package versions include:

- Expo ~57.0.24
- React 19.2.3
- React Native 0.86.3
- Expo Status Bar ~57.0.1

### Scripts

~~~bash
npm start
npm run android
npm run ios
npm run web
~~~

---

## Current Repository State

The repository is currently an **early application scaffold**.

The current codebase contains:

- Expo configuration
- React Native configuration
- Application metadata
- App icons and splash assets
- A basic App.js starter screen

The following product capabilities are **not yet implemented** in the repository:

- Store check-in
- Store catalog synchronization
- Barcode scanning
- Product search
- Cart state
- Budget calculations
- AI product matching
- Authentication
- Payment processing
- QR checkout
- Retailer/express-lane integration

Therefore, the supplied design package should be treated as the **target product specification**, while the current repository is the implementation starting point.

---

## Planned Architecture

A practical implementation can be organized as:

~~~text
CartPulse
│
├── Presentation
│   ├── Store Check-In
│   ├── Scanner
│   ├── Search
│   ├── Search Results
│   ├── Live Cart
│   ├── Budget Meter
│   └── Checkout
│
├── State
│   ├── Shopping Session
│   ├── Cart
│   ├── Budget
│   ├── Store
│   └── User Preferences
│
├── Device Services
│   ├── Camera
│   ├── Barcode Scanner
│   ├── Haptics
│   └── Local Storage
│
├── Backend Services
│   ├── Catalog
│   ├── Product Search
│   ├── Pricing
│   ├── Inventory
│   ├── Sessions
│   └── Checkout Verification
│
└── Integrations
    ├── Retailer Systems
    ├── Payment Providers
    └── AI / Product Recognition
~~~

Suggested project organization:

~~~text
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
~~~

---

## Future Integrations

### Retail Store Catalog

A retailer integration should eventually provide:

- Product catalog
- SKU/barcode mappings
- Store-specific pricing
- Inventory availability
- Aisle information
- Promotions
- Tax/discount rules

### Barcode Scanning

The mobile app will require camera permission and a barcode decoding solution.

### AI Product Matching

AI may assist with ambiguous product matching, but deterministic identifiers such as SKU, UPC or EAN should remain the preferred source for exact identification where available.

### Authentication

A future account can persist:

- Shopping budgets
- Shopping history
- Favorite stores
- Recent products
- Dietary preferences
- Shopping lists

### Checkout

The designed QR/express-exit flow requires real retailer integration and server-side authorization before production use.

---

## Product Principles

### 1. Always show the total

The shopper should not have to navigate to another screen to understand current spending.

### 2. Make budget awareness continuous

The remaining budget should be visible throughout the shopping journey.

### 3. Make scanning faster than typing

Search and manual entry are alternatives and fallbacks.

### 4. Provide immediate feedback

Scanning, adding, deleting and quantity changes should visibly update the cart.

### 5. Avoid checkout surprises

Totals should be clearly marked as estimated when taxes, discounts, promotions or retailer pricing cannot yet be confirmed.

### 6. Design for movement

The interface must remain usable while the shopper is walking through a store.

### 7. Distinguish design from implementation

Mock screens may demonstrate future functionality. Documentation should clearly state what is designed versus what is already implemented.

---

## Accessibility

A production implementation should include:

- Strong color contrast
- Touch targets of approximately 44px or larger
- Screen-reader labels
- Non-color-only status indicators
- Clear error messages
- Reduced-motion support
- Dynamic text sizing where practical
- Visual/haptic alternatives for scan feedback

---

## Security and Privacy

As CartPulse evolves, it may handle shopping history, account information and transaction-related data.

The production architecture should consider:

- Secure authentication
- Encrypted network communication
- Secure token storage
- Minimal retention of shopping history
- Protection of store/customer identifiers
- Explicit camera permissions
- Clear data collection disclosures
- Server-side checkout authorization

Payment credentials should not be stored directly in the mobile application unless required by a compliant payment architecture.

---

## Development Roadmap

### Phase 1 — UI Foundation

- [ ] Navigation
- [ ] Design tokens
- [ ] Light theme
- [ ] Dark theme
- [ ] Reusable cards, buttons and chips
- [ ] Responsive mobile layout

### Phase 2 — Shopping Session

- [ ] Store check-in
- [ ] Shopping session state
- [ ] Budget setup
- [ ] Local persistence

### Phase 3 — Scanner

- [ ] Camera permissions
- [ ] Barcode scanner
- [ ] Scanner feedback
- [ ] Product lookup
- [ ] Scan-to-cart

### Phase 4 — Cart

- [ ] Cart state
- [ ] Quantity controls
- [ ] Swipe-to-remove
- [ ] Live totals
- [ ] Budget meter
- [ ] Receipt breakdown

### Phase 5 — Store Intelligence

- [ ] Store-specific catalog
- [ ] Search
- [ ] Predictive product matching
- [ ] Inventory/aisle data
- [ ] Pricing synchronization

### Phase 6 — Checkout

- [ ] Final cart verification
- [ ] Checkout state
- [ ] QR generation
- [ ] Retailer verification
- [ ] Transaction completion

---

## Design Source

The supplied Stitch package contains:

- Light design tokens
- Dark design tokens
- Typography specifications
- Spacing and radius definitions
- Component specifications
- Scanner interaction guidance
- Six primary screen states
- Light and dark variants of each screen

The design system should remain the visual and interaction reference while implementation is developed, with platform and production constraints taking precedence where necessary.

---

## Contributing

When implementing a new feature:

1. Define the user problem.
2. Identify the affected shopping flow.
3. Update the design specification when necessary.
4. Prefer reusable components.
5. Implement loading, empty, error and success states.
6. Verify cart totals and budget calculations.
7. Test scanner functionality on a physical device.

---

## License

CartPulse is distributed under the license included in this repository.

---

## Status

**Early development / design-to-implementation phase**

The product experience is substantially specified in the design package, while the production application is still at its initial Expo scaffold stage.

The immediate implementation priority is to translate the documented shopping journey into a functional mobile application, beginning with navigation, store session setup, scanner interaction, cart state and real-time budget tracking.
