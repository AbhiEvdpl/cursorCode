# AGENTS.md

## Cursor Cloud specific instructions

This is a **zero-dependency static website** — no package manager, no build step, no backend, no database.

### Serving the site locally

```bash
cd /workspace && python3 -m http.server 8080
```

Then open `http://localhost:8080/index.html` in Chrome. All five HTML pages are served from the workspace root.

### Pages

| Page | URL path |
|---|---|
| American Hose Co. (main) | `/index.html` |
| American Hose & Gasket | `/american-hose-gasket.html` |
| Idaho Pharmacy LTC Services | `/ltc-services.html` |
| Trinity Rubber & Machine | `/trinity-rubber-machine.html` |
| RecycleTroop T&C | `/terms-and-conditions.html` |

### Gotchas

- Three pages (`american-hose-gasket.html`, `trinity-rubber-machine.html`, `terms-and-conditions.html`) load **Tailwind CSS via CDN** (`https://cdn.tailwindcss.com`). Internet access is required for those pages to render with full styling.
- `index.html` and `ltc-services.html` use local CSS files and inline styles respectively; they render correctly offline.
- `script.js` uses a `fakeSubmit()` stub — form submissions always succeed locally without a real API endpoint.
- No linter, test runner, or build tool is configured. Validation is manual/visual via the browser.
- See `README.md` for full project documentation and Figma guidance.
