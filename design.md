# Hajat Landing Page Design System

## Platform Architecture
The Hajat Landing Page is a modern web application built with React and Tailwind CSS. It serves as the primary marketing and onboarding funnel for the Hajat ecosystem, targeting both Customers and Captains in the Sudanese market. The design emphasizes premium aesthetics, trust, and strict Arabic (RTL) compatibility.

## Brand Identity & Color Palette

### Primary Brand (Customer Focus)
- **Primary Accent**: Sudanese Gold (`#C8A951`)
- **Primary Light**: `#F5EDD6`
- **Primary Dark**: `#A68B3C`
- **Customer Purple**: `#6C5CE7`

### Secondary Brand (Captain Focus)
- **Captain Accent**: iOS Orange (`#FF9500`) or Android Orange (`#FF7D00`)
- **Captain Dark**: `#CC7700`

### Backgrounds & Surfaces
- **Background**: `#FFFFFF` or `#F8FAFC`
- **Surface Secondary**: `#F2F2F7`

### Text Colors
- **Primary**: `#1A1B23`
- **Secondary**: `#444655`
- **Tertiary**: `#757683`
- **Inverse**: `#FFFFFF`

## Typography
Uses the **IBM Plex Sans Arabic** font family to ensure high readability and consistency with the mobile apps.
- **body**: 16px / 1.6 line-height for Arabic clarity.
- **headings**: 24px (h3), 32px (h2), 48px (h1).

## Spacing & Geometry
- **Spacing**: Base 8px scale (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px)
- **Border Radii**: Consistent with the mobile apps (sm: 8px, md: 12px, lg: 16px, xl: 20px, full: 9999px).
- **Shadows**: Soft, modern web shadows.

## RTL (Right-to-Left) Strict Rules
This application is designed for the Sudan market (Arabic). **Strict compliance is required**:
1. **HTML Dir Attribute**: Ensure `<html dir="rtl">` is set by default.
2. **Logical CSS Properties**: Use `start` and `end` instead of `left` and `right` (e.g., `text-start`, `ps-4`).
3. **Flexbox**: Use standard `flex-row`. The browser will naturally reverse the layout when `dir="rtl"`.
4. **Icons**: Mirrored appropriately for RTL layout using CSS transforms (e.g., `rtl:-scale-x-100`).
