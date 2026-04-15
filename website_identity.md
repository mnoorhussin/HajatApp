# HajatApp Design Identity

This document defines the core visual identity (Typography, Colors, and UI Components) extracted from the HajatApp web project. You can copy and use this design system across other projects like the mobile app and admin dashboard to ensure a consistent look and feel everywhere.

## 1. Typography

The identity relies on two Google Fonts, one for Arabic and one for English text.

### Fonts
- **Arabic (`font-ar`)**: `Almarai`, sans-serif
  - Weights: `300` (Light), `400` (Regular), `700` (Bold), `800` (ExtraBold)
- **English (`font-en`)**: `Inter`, sans-serif
  - Weights: `300`, `400`, `500`, `600`, `700`, `800`, `900`

**Google Fonts Import URL:**
```css
@import url("https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap");
```

## 2. Core Colors (Brand Palette)

These colors define the core identity of the Hajat brand.

- **Primary (Nubian Violet)**: `#6C5CE7`
- **Secondary (Deep Nile Blue)**: `#1E2A45`
- **Accent (Volt Green)**: `#A3E635`
- **Warning (Amber)**: `#f59e0b`

## 3. Theme Variables & Context Colors

### Light Mode (Default)
- **Background (`--bg`)**: `#f9fafb` (Gray 50)
- **Surface/Cards (`--surface`)**: `#ffffff` (White)
- **Text Primary (`--text`)**: `#1e2a45` (Deep Nile Blue)
- **Text Muted (`--text-muted`)**: `#6b7280` (Gray 500)
- **Border (`--border`)**: `#f3f4f6` (Gray 100)

### Dark Mode
- **Background (`--bg`)**: `#0f172a` (Slate 900)
- **Surface/Cards (`--surface`)**: `#1e293b` (Slate 800)
- **Text Primary (`--text`)**: `#f8fafc` (Slate 50)
- **Text Muted (`--text-muted`)**: `#94a3b8` (Slate 400)
- **Border (`--border`)**: `#334155` (Slate 700)
- **Secondary**: `#f8fafc` (Overridden in dark mode)

## 4. Shadows

- **Small**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **Default / Glow**: `0 4px 20px -2px rgba(30, 42, 69, 0.05)` (Dark mode: `rgba(0, 0, 0, 0.3)`)
- **Large**: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`

## 5. UI Elements & Layouts

- **Buttons**:
  - General base: Highly rounded (`rounded-full`), `py-3`, `px-6`, bold font, active scale down (`active:scale-[0.98]`).
  - **Primary Button**: Violet background (`#6C5CE7`), white text, Violet shadow.
  - **Outline Button**: Surface background, bordered, changes to primary color on hover.
  
- **Cards**:
  - Very rounded corners (`rounded-3xl` or ~`24px` radius).
  - Surface background with a subtle border and shadow.

- **Animations**:
  - `fade-in-up`: Moving up `20px` while fading from opacity `0` to `1` over `0.8s` ease-out.

- **Selection**:
  - Highlight text background: `#6C5CE7` with 10% opacity.
  - Highlight text color: `#6C5CE7`.
