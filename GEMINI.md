# Anna Villa Project Instructions

## Package Management
- **Yarn Only**: This project strictly uses `yarn`. Never use `npm` or `pnpm`.

## Documentation & Versioning
- **Version-Correct Docs**: Before implementing features or troubleshooting, always check `package.json` for the exact versions of libraries (e.g., `next`, `next-intl`, `tailwindcss`).
- **Research Workflow**: Use `google_web_search` and `web_fetch` to consult the official documentation for those specific versions to ensure API compatibility and follow current best practices.

## i18n
├── messages/
│   ├── en.json
│   └── vi.json
├── src/
│   ├── i18n.ts (main request config)
│   ├── i18n/
│   │   └── routing.ts
│   ├── proxy.ts (Next.js 16 routing)
│   └── app/
│       └── [locale]/
├── i18n.ts (root re-export for CI resolution)
└── next.config.mjs (explicitly pointing to src/i18n.ts)
