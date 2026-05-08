# CLAUDE.md — Adam Portsmouth Personal Site

## Project Overview

A single-page personal website. No framework, no build step — plain HTML, CSS, and vanilla JS in one file (`index.html`). The page is a personal item, not a public-facing product, but it should be pixel-perfect and production-grade.

---

## Tech Stack

- **Single file**: `index.html` — all CSS in `<style>`, all JS in `<script>` at end of body
- **No frameworks, no bundlers, no dependencies**
- **Fonts via Google Fonts CDN** (Playfair Display + Plus Jakarta Sans)
- **No external JS libraries**

---

## Brand & Design Reference

All colour tokens, typography, spacing rules, and component specs are in `brand.md`. Read that file first before writing any code.

Key tokens:
```css
--teal:     #2C5F5A;
--offwhite: #F2EFE9;
--rule:     #E0DBD3;
--midgrey:  #8C8C8C;
```

---

## Page Structure

The page is a **full-viewport, no-scroll layout** using a flex column:

```
┌─────────────────────────────┐  ← html, body: height 100vh, overflow hidden
│  NAV                        │  flex-shrink: 0
├─────────────────────────────┤
│                             │
│  HERO                       │  flex: 1  (fills remaining space)
│    [typewriter word] ●      │  word sits in lower portion of this space
│                             │
├─────────────────────────────┤  1px rule
│  BODY LINE                  │  flex-shrink: 0, centred text
├─────────────────────────────┤
│  COUNTDOWN BAR              │  flex-shrink: 0, teal background
└─────────────────────────────┘
```

---

## Component Specs

### 1. Nav
- Transparent background, no border
- Left: name `ADAM PORTSMOUTH` in Plus Jakarta Sans 500, 12px, 0.09em letter-spacing, uppercase, teal
- Right: `WELCOME BACK ↗` button — 1px solid teal border, transparent bg, teal text, square edges, hover inverts to teal bg / off-white text
- `padding: 28px 6vw`
- `position: sticky; top: 0; z-index: 100`

### 2. Hero
- `flex: 1` — grows to fill space between nav and body line
- Word is displayed in **Playfair Display 400**, `clamp(80px, 13vw, 140px)`, teal, left-aligned, `padding-left: 6vw`
- Word is positioned in the **lower portion** of the hero — use `display: flex; flex-direction: column; justify-content: flex-end` with `padding-bottom: 48px`
- Full stop: a teal `●` circle rendered as a `<span>` element sitting inline after the `#tw-word` span. It does **not** get typed — it is always visible. Size it to roughly match the cap height of the display word (use `font-size: 0.45em; vertical-align: 0.1em`)
- Cursor: a 3px wide, teal, `step-end` blinking bar placed immediately after the word text (before the dot span)

### 3. Typewriter behaviour
```
Words (in order): Husband · Father · Consultant · Contractor
Type speed:    80ms per character
Delete speed:  45ms per character
Pause at end:  1800ms before deleting
Pause between: 350ms before typing next word
```
- The cursor blinks continuously throughout (CSS animation, `step-end`, 0.75s)
- On page load, start typing after a 400ms delay

### 4. Rule + Body line
- `border-top: 1px solid var(--rule)` divides hero from body line
- Body line: centred, `padding: 22px 6vw`
- Text: Plus Jakarta Sans 300, 16px, teal for primary text
- `"five ambitious goals"` is wrapped in a `<span>` with `font-weight: 500; color: var(--teal)`
- Full text: `Working on five ambitious goals to make myself useful, competent and to set my family up for financial freedom.`

### 5. Countdown bar
- Full-width, `background: var(--teal)`, `padding: 18px 6vw`
- Left: `YEAR COUNTDOWN` in Plus Jakarta Sans 600, 11px, 0.16em letter-spacing, uppercase, off-white
- Right: four units — `239 DAYS   19 HOURS   28 MINUTES   47 SECONDS`
  - Numeral: Playfair Display 400, ~48px, off-white
  - Unit label: Plus Jakarta Sans 300, 11px, 0.1em letter-spacing, uppercase, `rgba(255,255,255,0.5)` (mid grey on dark)
  - Layout: `display: flex; align-items: baseline; gap: 8px` per unit, `gap: 40px` between units
- Counts to `Dec 31, [current year], 23:59:59`
- Updates every 1000ms via `setInterval`

---

## Behaviour & Animations

- **Goal bar fills**: not present in this design — removed per final design direction
- **Page load**: no elaborate entrance animations needed. Keep it clean.
- **Countdown**: live, ticks every second
- **Typewriter**: continuous loop, cycles through all four words indefinitely

---

## File Output

- Single file: `index.html`
- Self-contained — no separate CSS or JS files
- Fonts loaded from Google Fonts CDN at top of `<head>`
- No other external resources

---

## What Not To Do

- Do not add scroll
- Do not add rounded corners to any element
- Do not use any colour other than those in `brand.md`
- Do not use Inter, Roboto, Arial, or any system font
- Do not add a goals section, progress bars, or any content not listed above
- Do not add shadows, gradients, or decorative effects
- Do not use any JavaScript libraries
