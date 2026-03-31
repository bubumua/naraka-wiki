# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install (must run from this directory, NOT from D:/codesaves/serverless)
pnpm install

# Dev server with hot reload
pnpm start

# Production build → ./build/
pnpm build

# Serve production build locally
pnpm serve

# Clear .docusaurus cache and build output
pnpm clear

# Type-check
pnpm typecheck
```

## pnpm Workspace Caveat

This project lives inside a pnpm workspace rooted at `D:/codesaves/serverless/`. The workspace `pnpm-workspace.yaml` explicitly excludes `naraka-wiki` so it can manage its own `node_modules`. Running `pnpm install` from the workspace root will **not** install this project's dependencies.

## Architecture

- **`docusaurus.config.ts`** — All site configuration: metadata, i18n (default `zh-Hans`, also `en`), presets, navbar, footer, Prism themes. Site title is `永劫无间 Wiki`. The `future.v4: true` flag is enabled for Docusaurus v4 compatibility.
- **`sidebars.ts`** — Auto-generates sidebar from `docs/` filesystem structure.
- **`docs/`** — Wiki content in Markdown/MDX. Use `_category_.json` files to control sidebar labels and ordering.
- **`src/pages/`** — Standalone pages (not in the docs sidebar). `index.tsx` is the homepage.
- **`src/components/`** — Shared React components.
- **`src/css/custom.css`** — Infima CSS variable overrides for light/dark themes.
- **`static/`** — Assets served at site root (images, favicon).

## i18n

Two locales are configured: `zh-Hans` (default) and `en`. Translation files go in `i18n/<locale>/`. Run `pnpm write-translations` to extract translatable strings.

## Broken Links

`onBrokenLinks: 'throw'` — the build will fail if any internal link is broken. Fix links before building.
