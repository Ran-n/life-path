# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- `?lang=` query param support (mirroring the existing `?theme=` one) so the breren.com portal tile can hand off the visitor's current language on the way in; both params are stripped from the URL once applied, and both are now carried on the topbar's outbound link back to `breren.com`
- Clickable dial that links straight to the full Numbers Guide, with a caption link
- Date of birth is saved locally and restored on return visits, with a one-click Clear button
- Multi-language support: 25 languages (English + 24 translations) with a language picker, browser-language detection, and RTL support for Arabic/Urdu/Persian
- Custom domain support via `src/CNAME` for `life-path.breren.com`
- Light/dark theme toggle, persisted per visitor and carried across the `breren.com` link via a `?theme=` query param
- breren logo in the topbar linking back to `breren.com`, theme-aware and matching the site's brass/parchment palette
