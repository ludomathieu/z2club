<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: z2club
description: Community for Zone 2 athletes — slow is fast
colors:
  pacer-orange: "#E03D1A"
  ink-black: "#111111"
  paper-white: "#F5F3EE"
  ash: "#6B6B6B"
  stone: "#DEDBD5"
typography:
  display:
    fontFamily: "Oswald, sans-serif"
    fontWeight: 700
    fontSize: "clamp(3rem, 10vw, 7rem)"
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Oswald, sans-serif"
    fontWeight: 600
    lineHeight: 1.0
  title:
    fontFamily: "Oswald, sans-serif"
    fontWeight: 500
    lineHeight: 1.1
  body:
    fontFamily: "'DM Sans', sans-serif"
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.65
  label:
    fontFamily: "'Space Mono', monospace"
    fontWeight: 400
    fontSize: "0.75rem"
    letterSpacing: "0.06em"
---

# Design System: z2club

## 1. Overview

**Creative North Star: "The Pacer's Notebook"**

z2club is a training log turned into a brand. The visual language belongs to the athlete who doesn't need to announce themselves. Typography does the structural work; whitespace does the rest. No gradients. No hero metrics. No transformation photography.

The color system is near-black and near-white, tinted the faintest warm gold-grey so the surface reads like paper under track lighting, not a monitor in a dark room. One vivid accent — used on no more than 10% of any screen — signals effort without aggression. It appears exactly where something demands action, and nowhere else. State-change-only motion: elements are simply there.

This system explicitly rejects the aesthetics of SaaS landing pages (hero metrics, gradient CTAs, bento feature grids) and loud fitness branding (aggressive uppercase everywhere, neon accents, transformation-before-after energy). References: Satisfy Running (radical minimalism, strong type), Ciele Athletics (sober technical identity), Soar Running (lifestyle without fuss).

**Key Characteristics:**
- Typography as structure, not decoration — Oswald display, Space Mono for technical data
- Warmly tinted neutrals: never pure `#000` or `#fff`
- One vivid signal color, used with surgical restraint
- Sharp or near-zero radius — no casual rounding
- Flat surfaces — no decorative shadows
- State-change-only motion — nothing choreographed

## 2. Colors: The Pacer's Palette

A near-monochrome palette of warm near-blacks and near-whites. One vivid accent acts as a signal, not a theme.

### Primary
- **Pacer's Orange** (`#E03D1A`): The one vivid signal. Used on the primary CTA, active states, and the accent moment in the hero or logo. Total coverage ≤10% of any given screen.

### Neutral
- **Ink Black** (`#111111`): Body copy, display type, borders, and dark-mode backgrounds. Never pure black.
- **Paper White** (`#F5F3EE`): Default background. Never pure white.
- **Ash** (`#6B6B6B`): Secondary text, labels, nav links at rest.
- **Stone** (`#DEDBD5`): Dividers, input borders, subtle surface separation.

### Named Rules

**The One Signal Rule.** Pacer's Orange is used on ≤10% of any screen. Its rarity is the point. If it appears twice in the same view, one instance is wrong.

**The No-Pure Rule.** `#000` and `#fff` are prohibited. Every neutral carries a warm tint (chroma 0.004–0.010, hue 55–65°). The surface should read like paper, not a display.

## 3. Typography

**Display Font:** Oswald, Bold 700 (Google Fonts, open source)
**Technical / Accent Font:** Space Mono, Regular 400 (Google Fonts, open source)
**Body Font:** DM Sans, Regular 400 (Google Fonts, open source)

**Character:** Oswald brings the condensed authority of a race bib — tight, direct, no apology. Space Mono brings split times and data: technical, unadorned, precise. The pairing is discipline and measurement. Body text should offer relief from both: warm and readable.

### Hierarchy
- **Display** (Oswald 700, `clamp(3rem, 10vw, 7rem)`, line-height 0.92, letter-spacing -0.02em): Hero headings and the primary brand mark. Uppercase where maximum condensed impact is needed.
- **Headline** (Oswald 600, `clamp(1.75rem, 5vw, 3rem)`, line-height 1.0): Major section headers.
- **Title** (Oswald 500, `1.25rem–1.5rem`, line-height 1.1): Sub-section labels.
- **Body** (DM Sans 400, `1rem`, line-height 1.65, max 65ch): Reading text. Comfortable, not compressed.
- **Label** (Space Mono 400, `0.75rem`, letter-spacing 0.06em, uppercase): Technical labels, pace notations, distances, metadata. The running-data layer.

### Named Rules

**The Oswald Gate Rule.** Oswald is for structure only: display, headline, title. Never for body copy or paragraph text. Space Mono is for technical data only — never for long-form prose.

## 4. Elevation

This system is flat by default. No decorative shadows. Depth is expressed through type scale, color contrast, and whitespace alone.

When a surface needs to signal elevation — a sticky nav scrolled past threshold, an open dropdown — use a 1px warm-tinted border (Stone) as the edge signal. Never a blur. Never a soft shadow on a static surface.

**The Flat-By-Default Rule.** Shadows appear only as a direct response to interaction state (hover lift, focus ring) and are removed when the element returns to rest. A static element that needs a shadow is an element that needs better layout instead.

## 5. Components

No components exist yet. Synthesize canonical primitives from the tokens above during implementation.

### Buttons
- **Shape:** Sharp — `border-radius: 0` or `2px` maximum. No soft rounding.
- **Primary:** Pacer's Orange background, Ink Black or Paper White text. Oswald uppercase label, tight tracking. Padding: `14px 40px`.
- **Hover:** `translateY(-2px)`, slight orange darkening. 150ms ease-out. No shadow.
- **Ghost:** 1px Ink Black border, transparent fill. Hover: fill with Ink Black, text to Paper White. Same 150ms ease-out.

### Navigation
- **Style:** Space Mono, 0.7rem, uppercase, letter-spacing 0.08em. Ash at rest. Pacer's Orange on active. No underlines.
- **Desktop:** horizontal, right-aligned. Sticky border-bottom (1px Stone) activates on scroll — no opaque background.

### Inputs / Fields
- **Style:** 1px Stone border, no radius, Paper White fill. DM Sans for input text. Focus: border shifts to Ink Black, width stays 1px.
- **No glow.** Focus is the border, not a shadow.

## 6. Do's and Don'ts

### Do:
- **Do** tint every neutral toward warm (oklch hue 55–65°, chroma ≥0.004). No pure black or white anywhere.
- **Do** use Oswald only at display / headline / title scale, with tight tracking (-0.01 to -0.02em).
- **Do** use Space Mono for pace data, distances, labels, and metadata — the numbers layer.
- **Do** reserve Pacer's Orange for the single most important action on any given screen.
- **Do** express depth through scale and whitespace. Shadows are interaction responses, not decoration.
- **Do** verify WCAG AA contrast before committing any color combination to a component.

### Don't:
- **Don't** use `#000` or `#fff`. Every neutral must carry a warm tint.
- **Don't** use gradient CTAs, bento feature grids, or hero metric layouts. This is the SaaS landing page anti-reference.
- **Don't** use neon accents, aggressive uppercase-everywhere styling, or transformation-before-after imagery. This is the loud fitness anti-reference.
- **Don't** place Pacer's Orange on more than one element in the same viewport simultaneously.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, callouts, or list items.
- **Don't** use gradient text (`background-clip: text`). Type is solid color only.
- **Don't** use soft radius (≥6px) on buttons or containers. The system is angular.
- **Don't** animate layout properties or use bounce/elastic easing curves.
