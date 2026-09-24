# CartPulse

> **Shop with your budget in view.**

CartPulse is a smart in-store shopping assistant that helps shoppers track the cost of their basket while they shop. Instead of discovering at the cashier that the basket has exceeded the intended budget, CartPulse maintains a live running total as products are scanned or added.

## Overview

CartPulse is built around a simple idea:

**Know what your cart costs before you reach the cashier.**

The core journey is:

1. Connect to a participating store.
2. Set or confirm a shopping budget.
3. Scan or search for products.
4. Add products to a live cart.
5. See the running total and remaining budget.
6. Adjust quantities or remove products.
7. Review the estimated total before checkout.

The current repository is an early Expo/React Native scaffold. The supplied Stitch package represents the target product experience.

## Documentation

Detailed documentation is split into focused files so the README remains a quick entry point.

| Document | Contents |
|---|---|
| [Design System](documentation/design-system.md) | Light/dark themes, colors, typography, spacing, radius, elevation and UI principles |
| [Architecture](documentation/architecture.md) | Application layers, data model, state, services and planned structure |
| [Implementation Guide](documentation/implementation.md) | Development phases, scanner behavior, budget implementation and scope |
| [Contributing](documentation/contributing.md) | Development workflow, testing and pull-request expectations |

### Product Scope Notes

- **Dietary filtering is not part of the initial scope.** Users select the products they want themselves, so this feature is unnecessary for the core shopping workflow.
- **Aisle/shelf information is a planned capability.** It was not explicitly specified in the original Stitch design, but it should be considered during implementation because it can improve in-store product discovery. See [Issue #1](https://github.com/kayode96-max/CartPulse/issues/1) for the designer/developer task.

## Current Features in the Design

The design system covers:

- Store check-in
- Barcode scanning
- Smart product detection
- Store-aware product search
- Live cart
- Budget tracking
- Quantity management
- Swipe-to-remove
- Recent scans/searches
- Auto-add mode
- Receipt breakdown
- Reality-check/checkout review
- Light and dark themes

These are design targets. They should not be interpreted as already implemented features.

## Current Repository State

The current codebase contains the initial Expo foundation:

- Expo ~57.0.24
- React 19.2.3
- React Native 0.86.3
- JavaScript
- Expo Status Bar
- Basic application starter screen

The following are not yet implemented:

- Store check-in
- Store catalog synchronization
- Barcode scanning
- Product search
- Cart state
- Budget calculations
- AI/product matching
- Authentication
- Payment processing
- QR checkout
- Retailer/express-lane integration

## Running the App

### Prerequisites

Install:

- [Node.js](https://nodejs.org/)
- npm
- Expo-compatible development environment
- Android Studio/emulator for Android testing, or a physical Android device
- Xcode/simulator for iOS testing on macOS

### Install Dependencies

Clone the repository and enter the project directory:

```bash
git clone https://github.com/kayode96-max/CartPulse.git
cd CartPulse
```

Install dependencies:

```bash
npm install
```

### Start the Development Server

```bash
npm start
```

Expo will start the development server and provide options for opening the app.

### Run on Android

With an Android emulator/device available:

```bash
npm run android
```

### Run on iOS

On macOS with an iOS simulator available:

```bash
npm run ios
```

### Run on Web

```bash
npm run web
```

## Testing the Current App

Because the repository is still an early scaffold, testing currently focuses on confirming that the Expo application starts and renders correctly.

### Basic Test Checklist

1. Run `npm install`.
2. Run `npm start`.
3. Open the application on a supported target.
4. Confirm that the application launches without a bundling error.
5. Test Android, iOS or web as applicable to your development environment.
6. When a feature is implemented, add feature-specific verification to the relevant pull request.

For scanner/camera features, test on a physical device rather than relying only on a simulator.

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
- [ ] Inventory/availability
- [ ] Aisle/shelf information
- [ ] Pricing synchronization

### Phase 6 — Checkout

- [ ] Final cart verification
- [ ] Checkout state
- [ ] QR generation
- [ ] Retailer verification
- [ ] Transaction completion

## Design Source

The supplied Stitch package contains the visual and interaction direction for the product, including light and dark variants of the primary shopping states.

See the [Design System](documentation/design-system.md) for implementation tokens and styling guidance.

## Contributing

Start with [Contributing](documentation/contributing.md), then check the relevant architecture and implementation documentation before making changes.

## License

CartPulse is distributed under the license included in this repository.

## Status

**Early development / design-to-implementation phase**

The immediate engineering priority is to translate the documented shopping journey into a functional mobile application, beginning with navigation, store session setup, scanner interaction, cart state and real-time budget tracking.
