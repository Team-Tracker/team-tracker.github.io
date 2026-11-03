import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
===============
CSS Custom Properties
===============
*/
:root {
  /* Layout */
  --transition: all 0.25s ease-in-out;
  --nav-height: 64px;
  --banner-height: 2.5rem;
  --header-height: calc(var(--nav-height) + var(--banner-height));
  --min-footer-height: 11vh;
  --card-height: 29rem;
  --radius-sm: 0.625rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;

  /* Brand */
  --brand-blue: #2563eb;
  --brand-green: #10b981;
  --brand-gradient: linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #10b981 100%);

  /* Typography */
  --font-family-primary: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-family-display: 'Space Grotesk', 'Manrope', sans-serif;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}

/*
===============
CSS Reset & Base Styles
===============
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  color-scheme: ${({ theme }) => (theme.name === "light" ? "light" : "dark")};
}

body,
#root {
  min-height: 100dvh;
}

body {
  font-family: var(--font-family-primary);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;

  /* theme-driven tokens */
  --bg: ${({ theme }) => (theme.name === "light" ? "#f6f8fc" : "#070b16")};
  --fg: ${({ theme }) => (theme.name === "light" ? "#0b1220" : "#e6ecff")};
  --surface: ${({ theme }) => (theme.name === "light" ? "#ffffff" : "#0d1424")};
  --surface-contrast: ${({ theme }) => (theme.name === "light" ? "#eef3ff" : "#111a2e")};
  --surface-glass: ${({ theme }) =>
    theme.name === "light" ? "rgba(255, 255, 255, 0.82)" : "rgba(13, 20, 36, 0.72)"};
  --text-muted: ${({ theme }) =>
    theme.name === "light" ? "rgba(15, 23, 42, 0.68)" : "rgba(226, 232, 255, 0.68)"};
  --grid-line: ${({ theme }) =>
    theme.name === "light" ? "rgba(15, 23, 42, 0.06)" : "rgba(255, 255, 255, 0.05)"};
  --chip-bg: ${({ theme }) =>
    theme.name === "light" ? "rgba(37, 99, 235, 0.08)" : "rgba(96, 165, 250, 0.10)"};
  --chip-border: ${({ theme }) =>
    theme.name === "light" ? "rgba(37, 99, 235, 0.18)" : "rgba(96, 165, 250, 0.22)"};
  --chip-fg: ${({ theme }) => (theme.name === "light" ? "#1d4ed8" : "#bfdbfe")};
  --card-border: ${({ theme }) =>
    theme.name === "light" ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.08)"};
  --card-shadow: ${({ theme }) =>
    theme.name === "light"
      ? "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)"
      : "0 1px 2px rgba(0, 0, 0, 0.3), 0 12px 32px rgba(0, 0, 0, 0.35)"};
  --card-shadow-hover: ${({ theme }) =>
    theme.name === "light"
      ? "0 2px 4px rgba(15, 23, 42, 0.06), 0 16px 40px rgba(37, 99, 235, 0.14)"
      : "0 2px 4px rgba(0, 0, 0, 0.4), 0 18px 44px rgba(37, 99, 235, 0.22)"};

  color: var(--fg);
  background: var(--bg);
}

/*
===============
Layout Components
===============
*/
main {
  min-height: calc(100vh - 2 * var(--nav-height) - 2rem);
}

section {
  margin: var(--spacing-md) 0;
}

.section {
  padding: calc(var(--nav-height) + 1.5rem) 0;
  position: relative;
}

/*
===============
Typography
===============
*/
h1, h2, h3, h4, h5, h6,
.title {
  font-family: var(--font-family-display);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin-bottom: var(--spacing-sm);
}

p {
  margin-bottom: var(--spacing-md);
  color: var(--text-muted);
}

small {
  color: var(--text-muted);
}

.text-gradient {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.eyebrow {
  display: inline-block;
  font-family: var(--font-family-display);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bs-primary);
}

/*
===============
Interactive Elements
===============
*/
a {
  text-decoration: none;
  transition: var(--transition);
}

::selection {
  background: rgba(37, 99, 235, 0.25);
}

:focus-visible {
  outline: 2px solid var(--bs-primary);
  outline-offset: 3px;
}

.btn {
  transition: var(--transition);
  font-weight: 700;
  border-radius: 999px;
  letter-spacing: 0.01em;
  padding-inline: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
  }
}

.btn-primary,
.btn-primary:focus {
  background: var(--brand-gradient);
  background-size: 160% 160%;
  background-position: 0% 50%;
  border: none;
  color: #fff;
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.28);
}

.btn-primary:hover,
.btn-primary:active {
  background: var(--brand-gradient);
  background-size: 160% 160%;
  background-position: 100% 50%;
  color: #fff;
  box-shadow: 0 10px 28px rgba(16, 185, 129, 0.3);
}

.btn-outline-light,
.btn-outline-dark {
  border-width: 1px;
  background: var(--surface-glass);
  backdrop-filter: blur(8px);
}

.btn-outline-light {
  border-color: rgba(255, 255, 255, 0.18);
  color: #e6ecff;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.35);
    color: #fff;
  }
}

.btn-outline-dark {
  border-color: rgba(15, 23, 42, 0.15);
  color: #0b1220;

  &:hover {
    background: #fff;
    border-color: rgba(15, 23, 42, 0.35);
    color: #0b1220;
  }
}

/*
===============
Icon Links
===============
*/
.link-icons {
  line-height: 0;
  font-size: 1.75rem;
  margin: 0 var(--spacing-sm);
  color: var(--fg);
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: var(--spacing-xs);
  opacity: 0.8;

  &:hover,
  &:focus {
    color: var(--bs-primary);
    opacity: 1;
    transform: translateY(-2px);
  }
}

/*
===============
Bootstrap Overrides
===============
*/
.nav-link {
  transition: var(--transition);
}

.page-item.active .page-link {
  background: var(--brand-gradient);
  border-color: transparent;
}

.page-link {
  transition: var(--transition);
  background: var(--surface);
  border-color: var(--card-border);
}

.form-control,
.input-group-text {
  border-radius: var(--radius-sm);
  border-color: var(--card-border);
  background: var(--surface);
  padding: 0.75rem 1rem;

  &:focus {
    border-color: var(--bs-primary);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
  }
}

.card {
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: var(--transition);
  background: var(--surface);
  border: 1px solid var(--card-border);
  color: inherit;
  box-shadow: var(--card-shadow);
}

/*
===============
Utilities
===============
*/
.glass-panel {
  background: var(--surface-glass);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  padding: 2rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: var(--chip-bg);
  color: var(--chip-fg);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: 1px solid var(--chip-border);
}

a.chip:hover {
  border-color: var(--bs-primary);
  color: var(--chip-fg);
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 70%);
  pointer-events: none;
  z-index: 0;
}

/*
===============
Animations
===============
*/
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out both;
}

/*
===============
Responsive Design
===============
*/
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media screen and (min-width: 768px) {
  .form-group {
    max-width: 750px;
  }
}

@media screen and (max-width: 575.98px) {
  .section {
    padding: calc(var(--nav-height) + 0.5rem) 0;
  }

  .glass-panel {
    padding: 1.25rem;
    border-radius: var(--radius-md);
  }

  .btn {
    padding-inline: 1.1rem;
  }

  /* Consistent full-width buttons in stacked (mobile) CTA groups */
  .d-flex.flex-column > .btn,
  .d-flex.flex-column > a,
  .d-flex.flex-column > a > .btn {
    width: 100%;
  }
}

/*
===============
Print Styles
===============
*/
@media print {
  *,
  *::before,
  *::after {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  .no-print {
    display: none !important;
  }
}
`;

export default GlobalStyles;
