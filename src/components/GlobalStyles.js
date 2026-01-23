import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

/*
=============== 
CSS Custom Properties
===============
*/
:root {
  /* Layout */
  --border: 1px solid var(--bs-primary);
  --transition: all 0.25s ease-in-out;
  --nav-height: 55px;
  --min-footer-height: 11vh;
  --card-height: 29rem;
  
  /* Typography */
  --font-family-primary: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-family-display: 'Space Grotesk', 'Manrope', sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-md: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10);

  /* Z-index layers */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal: 1040;
  --z-tooltip: 1070;
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
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  font-family: var(--font-family-primary);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;
  color: ${({ theme }) => (theme.name === "light" ? "#0b1220" : "#e6ecff")};
  background: ${({ theme }) =>
    theme.name === "light"
      ? "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.10), transparent 32%), radial-gradient(circle at 80% 0%, rgba(16, 185, 129, 0.10), transparent 28%), linear-gradient(155deg, #f7f9ff 0%, #eef2ff 45%, #e8f0ff 100%)"
      : "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.15), transparent 32%), radial-gradient(circle at 80% 0%, rgba(16, 185, 129, 0.18), transparent 28%), linear-gradient(160deg, #0b1020 0%, #0f172a 55%, #0b1120 100%)"};

  /* theme-driven surface tokens */
  --surface: ${({ theme }) => (theme.name === "light" ? "#ffffff" : "#0f172a")};
  --surface-contrast: ${({ theme }) => (theme.name === "light" ? "#f3f6ff" : "#0b1022")};
  --surface-glass: ${({ theme }) =>
    theme.name === "light" ? "rgba(255, 255, 255, 0.82)" : "rgba(255, 255, 255, 0.06)"};
  --text-muted: ${({ theme }) =>
    theme.name === "light" ? "rgba(15, 23, 42, 0.72)" : "rgba(255, 255, 255, 0.75)"};
  --grid-line: ${({ theme }) =>
    theme.name === "light" ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.08)"};
  --chip-bg: ${({ theme }) =>
    theme.name === "light" ? "rgba(37, 99, 235, 0.12)" : "rgba(255, 255, 255, 0.08)"};
  --chip-border: ${({ theme }) =>
    theme.name === "light" ? "rgba(37, 99, 235, 0.25)" : "rgba(255, 255, 255, 0.12)"};
  --chip-fg: ${({ theme }) => (theme.name === "light" ? "#0b1220" : "#e5e7eb")};
  --card-border: ${({ theme }) =>
    theme.name === "light" ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.08)"};
  --card-shadow: ${({ theme }) =>
    theme.name === "light"
      ? "0 14px 45px rgba(15, 23, 42, 0.16)"
      : "0 20px 80px rgba(0, 0, 0, 0.35)"};
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
  min-height: 70vh;
  padding: calc(var(--nav-height) + 2rem) 0;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.section::before {
  content: "";
  position: absolute;
  inset: 4%;
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(16, 185, 129, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.06);
  z-index: -2;
}

.section::after {
  content: "";
  position: absolute;
  inset: 6%;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 30px 120px rgba(0, 0, 0, 0.45);
  z-index: -1;
}

/*
=============== 
Typography
===============
*/
.title {
  font-family: 'Space Grotesk', var(--font-family-primary);
  font-weight: 700;
  letter-spacing: -0.03em;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
  font-family: 'Space Grotesk', var(--font-family-primary);
}

p {
  margin-bottom: var(--spacing-md);
  color: var(--text-muted);
}

small {
  color: var(--text-muted);
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

a:hover,
a:focus {
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--bs-primary);
  outline-offset: 2px;
}

.btn {
  transition: var(--transition);
  font-weight: 600;
  border-radius: 0.75rem;
  letter-spacing: 0.01em;
  padding-inline: 1.5rem;
  
  &:hover {
    transform: translateY(-1.5px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.btn-primary {
  background: linear-gradient(120deg, #2563eb 0%, #10b981 120%);
  border: none;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.35);
}

.btn-primary:hover {
  filter: brightness(1.05);
}

.btn-outline-light,
.btn-outline-dark {
  border-width: 1.5px;
}

/*
=============== 
Icon Links
===============
*/
.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  margin: 0 var(--spacing-md);
  color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-dark)" : "var(--bs-light)"};
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  padding: var(--spacing-xs);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover,
  &:focus {
    color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-light)" : "var(--bs-dark)"};
    transform: translateY(-2px) scale(1.02);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
}

/*
=============== 
Bootstrap Overrides
===============
*/
.page-item.active .page-link {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  box-shadow: var(--shadow-sm);
}

.card {
  border-radius: 1.25rem;
  overflow: hidden;
  transition: var(--transition);
  background: var(--surface-glass);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(12px);
  color: inherit;
  box-shadow: var(--card-shadow);
  
  &:hover {
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 18px 70px rgba(15, 23, 42, 0.2)"
        : "0 30px 120px rgba(0, 0, 0, 0.45)"};
  }
}

/*
=============== 
Utilities
===============
*/
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--bs-primary);
  color: white;
  padding: 8px;
  z-index: var(--z-modal);
  text-decoration: none;
  border-radius: 0 0 4px 4px;
  
  &:focus {
    top: 0;
  }
}

.glass-panel {
  background: var(--surface-glass);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  padding: 2rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.95rem;
  border-radius: 999px;
  background: var(--chip-bg);
  color: var(--chip-fg);
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 1px solid var(--chip-border);
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 120px 120px;
  mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 65%);
  pointer-events: none;
  z-index: -1;
}

/*
=============== 
Animations
===============
*/
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
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
  .link-icons {
    font-size: 2.5rem;
    margin: 0 var(--spacing-lg);
  }
  
  .form-group {
    max-width: 750px;
  }
}

@media screen and (min-width: 1024px) {
  .link-icons:hover {
    color: var(--bs-primary);
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
  
  a,
  a:visited {
    text-decoration: underline;
  }
  
  .no-print {
    display: none !important;
  }
}

/*
=============== 
Dark Mode Specific Styles
===============
*/
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
}
`;

export default GlobalStyles;
