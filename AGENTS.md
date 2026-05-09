# Atelier A'mari Agent Guide

This file defines the project conventions for all future work in this repo.
Follow these guidelines without re-asking.

## Goals

- Build a high-quality, editorial experience for a ceramic atelier.
- Keep content semantic and Sanity-ready while remaining mock-driven for now.
- Use composition-first React patterns and UI primitives from `@/components/ui`.

## Folder Structure

- Page-specific blocks live under `components/pages/<page>/`.
  - Example: `components/pages/home/hero-block.tsx`
- Each block is a single file with a single responsibility.
- Each block reads its own mock JSON (no data passed from `app/page.tsx`).
- Mock data lives under `data/<page>/mock-*.json`.
  - Example: `data/home/mock-hero.json`
- Placeholder image assets live under `public/images/<page>/`.
  - Example: `public/images/home/hero-collection.svg`

## Composition Patterns

- Use the available skill

## Content Modeling (Sanity-Ready)

- Use the available skill

## Images

- Store image data in mock JSON as:
  - `image: { src, alt }`
  - `gallery: [{ src, alt }]`
  - `portraitImage: { src, alt }`
- Render images with `next/image`.
- All images must include meaningful `alt` text.

## UI Primitives

- Compose using `@/components/ui` primitives.
- Avoid custom low-level UI when a primitive already exists.

## Styling

- Maintain the warm, ceramic editorial aesthetic already established.
- Use typography pairing: `Cormorant Garamond` (serif) + `Manrope` (sans).
- Keep motion subtle and accessible.

## Page Assembly

- `app/page.tsx` should only compose block components.
- Do not inline content or mock data in `app/page.tsx`.

## Quality Checks

- Run `npm run lint -- app components/pages/home` after changes.
- Fix any lint errors you introduce.
