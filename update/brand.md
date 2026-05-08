# Brand Guidelines — Adam Portsmouth Personal Site

## Colour Palette

| Token       | Hex       | Name        | Usage                                                                 |
|-------------|-----------|-------------|-----------------------------------------------------------------------|
| `--teal`    | `#2C5F5A` | Teal        | Primary text, nav, countdown bar background, borders, filled buttons |
| `--accent`  | `#2C5F5A` | Teal accent | The full-stop dot after the typewriter word, "five ambitious goals" link highlight, active states |
| `--offwhite`| `#F2EFE9` | Off-white   | Page background, card fills on dark sections                          |
| `--rule`    | `#E0DBD3` | Rule        | Horizontal dividers, section borders                                  |
| `--midgrey` | `#8C8C8C` | Mid grey    | Secondary text — captions, meta only                                  |

> Note: Teal (`#2C5F5A`) is the dominant colour across the site, replacing the navy from earlier iterations. There is no ember/orange accent in this design — the teal serves both the structural and accent role.

---

## Typography

### Typefaces
| Face | Role | Source | Weights |
|------|------|--------|---------|
| **Playfair Display** | Display & headlines | Google Fonts (free) | 400 regular |
| **Plus Jakarta Sans** | UI, nav, body, labels | Google Fonts (free) | 300 light, 400 regular, 500 medium, 600 semibold |

### Type Scale
| Style           | Spec                                                             |
|-----------------|------------------------------------------------------------------|
| Hero word       | Playfair Display 400 · `clamp(80px, 13vw, 140px)` · line-height 1.0 |
| Nav name        | Plus Jakarta Sans 500 · 12px · 0.09em letter-spacing · all caps |
| Nav button      | Plus Jakarta Sans 600 · 12px · 0.1em letter-spacing · all caps  |
| Body line       | Plus Jakarta Sans 300–400 · 16px · line-height 1.7              |
| Countdown label | Plus Jakarta Sans 600 · 11px · 0.16em letter-spacing · all caps |
| Countdown nums  | Playfair Display 400 · 44–52px                                   |
| Countdown units | Plus Jakarta Sans 300 · 11px · 0.1em letter-spacing · all caps  |

---

## Layout

- **Single page, no scroll** — `overflow: hidden` on html and body, `height: 100vh` flex column
- **Nav**: transparent background, no border, sticky to top. Name left, button right. `padding: 28px 6vw`
- **Hero**: fills remaining space between nav and body line. Word sits in the lower half of this space, left-aligned with `padding-left: 6vw`. Full stop rendered as a teal circle `●` inline after the word
- **Rule**: 1px solid `#E0DBD3` spanning full width, separating hero from body line
- **Body line**: centred single line of text, `padding: 24px 6vw`. "five ambitious goals" is a `<span>` styled in teal with `font-weight: 500`
- **Countdown bar**: full-width, teal background (`#2C5F5A`), pinned to bottom. `padding: 18px 6vw`. Label left, units right. Numerals in Playfair Display, off-white. Unit labels in mid-grey, all-caps, small

---

## Component Details

### Nav button
```
border: 1px solid var(--teal)
background: transparent
color: var(--teal)
padding: 10px 28px
hover → background: var(--teal); color: var(--offwhite)
```

### Typewriter word
- Words cycle: `Husband.` · `Father.` · `Consultant.` · `Contractor.`
- The full stop is **not** typed — it is a permanent teal `●` circle element positioned after the word
- Type speed: 80ms per character
- Delete speed: 45ms per character
- Pause when complete: 1800ms
- Pause before next word: 350ms
- Cursor: 3px wide, teal, blinking (step-end, 0.75s)

### Countdown bar
- Counts down to `Dec 31, [current year], 23:59:59`
- Updates every 1 second
- Format: `239 DAYS   19 HOURS   28 MINUTES   47 SECONDS`
- Numerals: large Playfair Display, off-white
- Unit labels: Plus Jakarta Sans, small, mid-grey, inline after numeral

---

## Spacing & Layout Rules

| Rule                  | Value                                      |
|-----------------------|--------------------------------------------|
| Horizontal padding    | `6vw` left and right on all sections       |
| No rounded corners    | All buttons and borders are square-edged   |
| Border width          | 1px                                        |
| Max content width     | `1200px` centred (nav and body line)       |
| White space           | Generous — one idea per zone, never crowded|
