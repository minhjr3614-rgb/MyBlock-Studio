# Unified Experience v3 — Release notes

This release packages the recovered three-page website and shared assets for a fresh GitHub repository.

- `index.html`: homepage
- `MyBlock_Studio_v1_5.html`: MyBlock Studio compiler
- `MyBlock_Studio_Museum.html`: version museum
- `shared/`: common CSS, JavaScript, logo, and favicon assets

The Studio compiler and embedded Museum version data are retained from the v3 source package. Browser-level validation on the published GitHub Pages site still needs to be performed after deployment.

## UI hotfix — 2026-11-22
- Fixed homepage language toggle with a delegated click handler.
- Dark mode now replaces unreadable dark saved text colors with a readable light color while preserving readable custom colors.
- Museum versions can be previewed in an in-page modal; existing HTML download links remain available.
