# Anna Villa Project Instructions

## Package Management
- **Yarn Only**: This project strictly uses `yarn`. Never use `npm` or `pnpm`.

## Documentation & Versioning
- **Version-Correct Docs**: Before implementing features or troubleshooting, always check `package.json` for the exact versions of libraries (e.g., `next`, `next-intl`, `tailwindcss`).
- **Research Workflow**: Use `google_web_search` and `web_fetch` to consult the official documentation for those specific versions to ensure API compatibility and follow current best practices.

## i18n
- **Framework**: `next-intl` with App Router.
- **Locales**: English (`en`) and Vietnamese (`vi`).
- **Routing**: Uses `src/proxy.ts` (deprecated `middleware.ts`) for locale detection and routing.
- **Static Export**: The project is configured for static export (`output: 'export''). Avoid features that require a dynamic Node.js runtime (like non-static `headers()` or `cookies()`) without appropriate static generation fallbacks.
