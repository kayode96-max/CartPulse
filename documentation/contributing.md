# Contributing to CartPulse

## Before You Code

1. Read the relevant documentation in `documentation/`.
2. Check existing GitHub issues before introducing a new feature.
3. Confirm whether the feature is part of the current scope.
4. Keep implementation aligned with the design system.
5. For design changes, update the design documentation alongside the code.

## Development Principles

- Prefer reusable components.
- Keep business logic out of presentational components where practical.
- Centralize design tokens.
- Support both light and dark themes.
- Keep budget calculations deterministic and testable.
- Treat money as money, not generic floating-point numbers.
- Provide loading, empty, error and success states.
- Do not claim a feature is implemented until it works in the application.

## Testing

When implementing scanner or camera functionality, test on a physical device.

Verify:

- Barcode recognition
- Product matching
- Cart updates
- Quantity changes
- Budget calculations
- Over-budget behavior
- Light/dark theme rendering
- Permission denial and recovery
- Network failure states

## Pull Requests

A pull request should explain:

- What changed
- Why it changed
- Which user flow it affects
- How it was tested
- Known limitations

Keep PRs focused and avoid mixing unrelated refactors with feature work.

## Design Changes

If implementation requires changing the Stitch design:

1. Document why the change is necessary.
2. Update `documentation/design-system.md` or the relevant design document.
3. Include screenshots when useful.
4. Keep light and dark states consistent.

## Scope

Dietary filtering is not currently part of the implementation scope.

Aisle/shelf information is a planned capability and should be discussed through the related GitHub issue before implementation decisions are finalized.
