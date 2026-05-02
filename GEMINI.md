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
│   ├── i18n/
│   │   ├── routing.ts
│   │   └── request.ts
│   ├── proxy.ts (formerly middleware.ts)
│   └── app/
│       └── [locale]/
│           ├── layout.tsx
│           └── page.tsx
├── i18n.ts (fallback re-export)
└── next.config.mjs
