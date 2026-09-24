# CartPulse Implementation Guide

## Current State

The repository is an early Expo/React Native scaffold. The Stitch designs represent the target experience, not completed functionality.

Current foundation:

- Expo ~57.0.24
- React 19.2.3
- React Native 0.86.3
- JavaScript
- Expo Status Bar

## Implementation Priority

### Phase 1: Foundation

- Set up navigation.
- Establish light and dark design tokens.
- Build reusable buttons, cards, chips, inputs and status components.
- Build responsive mobile layouts.

### Phase 2: Shopping Session

- Store check-in.
- Session state.
- Budget setup.
- Local persistence.

### Phase 3: Scanner

- Camera permissions.
- Barcode scanning.
- Scanner states.
- Product lookup.
- Scan-to-cart.
- Success/failure feedback.

### Phase 4: Cart and Budget

- Cart state.
- Quantity controls.
- Remove interactions.
- Live subtotal.
- Remaining budget.
- Budget status.
- Receipt breakdown.

### Phase 5: Store Intelligence

- Store catalog.
- Product search.
- Product variants.
- Store pricing.
- Availability.
- Aisle/shelf information.

Aisle/shelf information is a planned capability and should be considered during data-model and UI implementation even though it was not explicitly shown in the original design specification. Follow the related GitHub issue for the agreed implementation direction.

### Phase 6: Checkout

- Final cart review.
- Verification state.
- QR generation.
- Retailer verification.
- Transaction completion.

## Scanner States

Production code should handle:

1. Idle
2. Permission request
3. Camera active
4. Barcode detected
5. Product matched
6. Product not found
7. Product added
8. Scan failed
9. Camera unavailable
10. Manual fallback

## Financial Accuracy

Do not use floating-point arithmetic casually for monetary values. Prefer integer minor units where practical, or a decimal/money library where appropriate.

Taxes, discounts and promotions should remain retailer-configurable.

## Error and Empty States

Every production screen should have loading, empty, error and success/confirmation states where applicable.

## Current Non-Goals

Do not implement dietary filters in the initial CartPulse release. The core workflow is user-selected products plus live budget tracking.

Payment, retailer checkout and express-exit functionality should only be implemented once the required retailer integration and authorization model are defined.
