# The Floating Hero Section

Round-1 assignment implementation of a **Legal Work Platform** hero section using **Next.js (App Router)** and **Tailwind CSS**.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- lucide-react icons

## What’s Implemented

- Split hero layout (left content + right floating card composition)
- Reusable `FloatingCard` component with configurable tone, rotation, icon, and label
- Dedicated `portal` variant for the **John Doe – Portal** card
- Blurred background blob shapes
- Typography hierarchy and CTA styling
- Responsive behavior:
  - mobile-first centered content
  - simplified stacked floating cards on small screens
  - full floating scene from `md` and above
  - no horizontal overflow

## Bonus Features

- Manual dark mode toggle with `localStorage` persistence
- Subtle floating animations (keyframes)
- Fade-in on load
- Hover elevation on pills (`hover:scale-105`)

## Project Structure

```text
src/
	app/
		globals.css
		layout.tsx
		page.tsx
	components/
		FloatingCard.tsx
		ThemeToggle.tsx
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Validation

```bash
npm run lint
npm run build
```

## Notes

- The app was scaffolded in the `round-1-task` folder because the parent folder name contained spaces/capital letters that are not valid for npm package naming.
