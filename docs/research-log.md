# CartPulse Documentation Research Log

## 2026-09-24

### Repository checked

Repository: `kayode96-max/CartPulse`

Base branch: `master`

The repository was inspected before writing the documentation. The root contains a minimal Expo project with:

- `App.js`
- `index.js`
- `app.json`
- `package.json`
- `package-lock.json`
- Expo assets
- project instruction/configuration files

### Code findings

`App.js` contains only the default Expo placeholder view and status bar.

`index.js` is the normal Expo registration entry point.

`package.json` currently depends on:

- Expo `~57.0.24`
- React `19.2.3`
- React Native `0.86.3`
- Expo Status Bar `~57.0.1`

No cart, budget, scanner, product, search, navigation or checkout implementation was found in the repository tree.

### Design files checked

The supplied design archive contains:

- Light and dark design-system specifications.
- Store check-in screens.
- Main scanner/search screens.
- Predictive search result screens.
- Live cart dashboard screens.
- Checkout review modal screens.
- Scan confirmation feedback screens.
- Rendered screenshots and HTML representations of those screens.

The design flow was treated as a specification for the core shopping budget experience.

### Scope decision

Only the budget-tracking shopping flow was documented. The documentation does not add unrelated product concepts to the architecture, implementation matrix or design requirements.

### Key product flow inferred from the designs

The supplied screens form this sequence:

```text
Store check-in
      ↓
Main scanner / search
      ↓
Product result
      ↓
Cart update
      ↓
Live budget tracking
      ↓
Checkout review
```

A successful scan also has a confirmation-feedback state.

### Design-system observations

The design package provides separate light and dark token sets.

Light theme highlights:

- Cool off-white surfaces.
- Deep emerald primary tones.
- Mint secondary accents.
- Space Grotesk for headings/metrics.
- Plus Jakarta Sans for body and labels.

Dark theme highlights:

- Obsidian canvas and card surfaces.
- Emerald/mint action accents.
- Space Grotesk across the supplied dark type scale.
- Strong contrast for financial values.

### Ambiguity found: primary green

The light design-system YAML names `#005D42` as `primary` and `#047857` as `primary-container`. The prose palette describes `#047857` as the primary deep emerald.

Decision: preserve the semantic token names from the YAML and document the prose palette as role guidance instead of silently changing the token values.

### Ambiguity found: typography

The light and dark design exports define different font sizes and, in the dark export, use Space Grotesk across more roles.

Decision: document both theme token sets rather than pretending there is one already-implemented typography scale. Implementation should consume theme tokens so the discrepancy can be resolved intentionally during UI development.

### Budget behavior extracted from the designs

The designs consistently show:

- A budget limit.
- A current cart total.
- Remaining available budget.
- A visual progress/status state.
- Warning behavior around the upper part of the budget.
- A critical/over-budget state.

The supplied design prose specifies:

- 0%–79%: safe
- 80%–94%: warning
- 95%+: critical/overrun

Decision: use these thresholds as the documented target behavior.

### Architecture decision

Cart totals should be derived from cart items rather than stored independently.

```text
subtotal = Σ(unitPrice × quantity)
remaining = budgetLimit - subtotal
budgetPercent = subtotal / budgetLimit × 100
```

This keeps the budget display consistent when quantity changes or items are removed.

### Important implementation gap

The design package contains polished UI representations, but the GitHub repository does not contain their corresponding React Native screens or business logic.

Decision: clearly label the designs as target behavior and the repository as a starter baseline. No documentation claims a design feature is implemented unless it is present in the inspected source.

### Branch action

A new `docs` branch was created from `master`.

The documentation files are being added to that branch so the master application code remains untouched by this documentation work.
