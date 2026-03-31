# Repository Guidelines

## Project Structure & Module Organization
`docs/` contains the main wiki content, grouped by topic such as `weapons/`, `heroes/`, and `combat-mechanics/`. Use each folder's `_category_.json` to control sidebar labels and generated index pages. `blog/` holds blog posts plus `authors.yml` and `tags.yml`. `src/pages/` contains custom pages, `src/components/` contains reusable React UI, and `src/css/custom.css` contains global theme overrides. Store static assets in `static/`, usually under `static/img/`. Do not edit generated output in `.docusaurus/` or vendored files in `node_modules/`.

## Build, Test, and Development Commands
Prefer `npm` in this repo because the tracked lockfile is `package-lock.json`.

- `npm install`: install dependencies
- `npm run start`: start the local Docusaurus dev server with live reload
- `npm run build`: generate the production site in `build/`
- `npm run serve`: preview the built site locally
- `npm run typecheck`: run `tsc` against config and custom TS/TSX files
- `npm run clear`: clear Docusaurus caches after config, route, or content-structure changes

## Coding Style & Naming Conventions
Follow the existing Docusaurus TypeScript style: 2-space indentation, semicolons, single quotes, and compact brace spacing such as `const {siteConfig} = ...`. Keep React code component-oriented and small. Use PascalCase for component names and directories, camelCase for local variables, and stable descriptive filenames for docs. Author docs in Markdown/MDX with frontmatter such as `sidebar_position` and `description`. Preserve established content paths when possible, for example `docs/weapons/melee/横刀.md` or `docs/heroes/ninghongye.md`.

## Testing Guidelines
There is no dedicated test framework in this checkout. The minimum validation bar is `npm run typecheck` and `npm run build`. For content-only edits, also run `npm run start` and verify the changed page, sidebar ordering, locale switcher, and image paths in the browser.

## Content, Commits, and Pull Requests
This repository is a gameplay wiki, so cross-check factual edits against official patch notes, in-game text, or other primary references before publishing. Local `.git` metadata is not present in this checkout, so no project history is available to infer conventions; use short imperative commit subjects with scope, such as `docs: add ranged weapon page` or `site: update navbar links`. Pull requests should state the goal, list affected directories, include screenshots for visible UI/theme changes, and call out any slug, sidebar, locale, or version-rule changes from `README.md`.
