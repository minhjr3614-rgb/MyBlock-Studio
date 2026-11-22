# MyBlock Studio

**MyBlock Studio** is a browser-based tool for turning PenguinMod/Scratch-style custom My Blocks into a PenguinMod extension.

This repository contains the **Unified Experience v3** website: three connected pages with a shared visual system, settings, theme handling, and Vietnamese/English language support.

## Pages

- **Homepage** — `index.html`
- **MyBlock Studio compiler** — `MyBlock_Studio_v1_5.html`
- **Version Museum** — `MyBlock_Studio_Museum.html`

## Project structure

```text
.
├── index.html
├── MyBlock_Studio_v1_5.html
├── MyBlock_Studio_Museum.html
├── shared/
│   ├── assets/
│   ├── css/
│   └── js/
├── README.md
├── README_UNIFIED.md
└── .nojekyll
```

Keep the `shared/` directory alongside the three HTML files. The pages load their shared styles and scripts using relative paths.

## Run locally

You can open `index.html` in a modern browser. For the most reliable local testing, serve this folder using a simple local static web server.

## Publish with GitHub Pages

1. Create a repository named `MyBlock-Studio`.
2. Upload the **contents** of this folder to the repository root. Do not upload the enclosing folder as an extra nested directory.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/(root)` folder, then save.
6. Wait for the Pages deployment to finish, then open the published site and test all three pages.

## Current release

**Unified Experience v3 — Museum & Language Fix**

- Shared navigation, styling, theme, and language modules.
- Museum archive layout and action-button fixes.
- Page-aware Vietnamese and English translations.
- Original Studio compiler implementation and embedded Museum archive data retained from the recovered v1.5/v3 source package.

See `README_UNIFIED.md` for the v3-specific deployment notes.

## License

No license file is included because the project's intended license has not been confirmed for this rebuilt repository. Before inviting reuse or contributions, add the license you have chosen. Public visibility alone does not grant others permission to redistribute or publish modified copies of the code.
