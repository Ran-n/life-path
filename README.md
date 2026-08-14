# Life Path Number Calculator

A small static site that calculates a numerology Life Path Number from a birth date.

Served files live in [`src/`](src/); everything else at the repo root is project metadata.

## Features

- Birth date entry with a calendar picker; the date you enter is saved locally and restored next visit, with a one-click Clear
- A clickable dial that jumps straight to the full Numbers Guide
- 25 languages (English + 24 translations), with a language picker that detects your browser language and remembers your choice

## Run locally

Just open `src/index.html` in a browser — no build step or dependencies.

## Adding a language

Translations live in [`src/i18n/`](src/i18n/), one file per language code (e.g. `es.js`), each registering `window.I18N.strings.<code>` (UI text) and `window.I18N.data.<code>` (the 12 life-path number write-ups) — see [`en.js`](src/i18n/en.js) for the full key structure. To add a language: create the file, add its `<script src="i18n/<code>.js">` tag to both `index.html` and `numbers.html`, and list it in the `LANGUAGES` array in [`src/i18n/engine.js`](src/i18n/engine.js) if it isn't already there. The picker only lists languages whose file is actually loaded.

## Publish with GitHub Pages

A workflow at [`.github/workflows/pages.yml`](.github/workflows/pages.yml) deploys `src/` automatically.

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `GitHub Actions`.
4. Push to `main` (or run the workflow manually) to trigger a deploy.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[PayBack License (PBL)](LICENSE)
