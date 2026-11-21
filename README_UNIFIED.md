# MyBlock Studio — Unified Experience v3 (Museum & Language Hotfix)

This build fixes the Museum page layout, makes its archive actions behave correctly, and replaces the brittle language selectors with complete page-aware translations. The original Studio compiler code and embedded Museum archive HTML are preserved.

## Deploy
1. Extract this ZIP.
2. Upload the contents of this folder to the root of the GitHub repository, replacing the previous Unified files.
3. Keep the `shared/` directory and its contents in place.
4. Open GitHub Pages and hard-refresh the three pages (Ctrl+F5).

## v3 changes
- Explicit page identifiers on all three HTML documents.
- Museum translations cover its title, tagline, intro, archive notice, collection heading, descriptions, both archive actions, file-size note, and footer.
- Museum download actions now use the `download` attribute and descriptive filenames; open actions use a new tab.
- Museum cards and action buttons have improved responsive sizing and wrapping.
- Studio compiler implementation and embedded Museum archive payloads remain untouched.
