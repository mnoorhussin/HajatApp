# Hajat Landing Page Agent Instructions

## Context
You are an AI agent assisting in the development of the **Hajat Landing Page**, a React / Vite application tailored for the Sudanese market. The app uses **Tailwind CSS** for styling and acts as the entry point for both Customers and Captains.

## Golden Rules for Landing Page

### 1. Web-Specific UI & Responsive Design
- Adhere to modern web design principles.
- Ensure the application is fully responsive across all viewports (Mobile, Tablet, Desktop) using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).
- Optimize for fast loading and SEO best practices (meta tags, semantic HTML).
- Use dynamic animations and hover states to create a premium feel.

### 2. Strict RTL Compliance
Arabic RTL is the default for this market.
- **Directional Margins/Padding**: Use Tailwind's logical properties (`ms-`, `me-`, `ps-`, `pe-`). Avoid physical properties like `ml-`, `mr-`.
- **Text Alignment**: Ensure text aligns right by default (in RTL mode). Use `text-start` and `text-end`.
- **Flexbox Layout**: Let the `dir="rtl"` attribute on the `<html>` or `<body>` tag handle the flex direction natively. Use standard `flex-row`.
- **Directional Icons**: Ensure icons (e.g., arrows) are mirrored where appropriate.

### 3. Tech Stack Best Practices
- **React / Vite**: Use functional components and React hooks. Keep components modular.
- **Tailwind CSS**: Use standard Tailwind utility classes. Follow the defined color palette in `tailwind.config.js`.
- **SEO & Performance**: Use proper heading hierarchy (`<h1>`, `<h2>`) and optimize assets.

### 4. Code Quality
- Write clean, modular, and reusable components.
- Do not leave unused imports or console logs.
- Maintain consistent spacing and structure within files.
