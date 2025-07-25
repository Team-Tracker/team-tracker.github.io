import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
CSS Custom Properties
===============
*/
:root {
  /* Layout */
  --border: 1px solid var(--bs-primary);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --nav-height: 55px;
  --min-footer-height: 11vh;
  --card-height: 29rem;
  
  /* Typography */
  --font-family-primary: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-family-display: 'Permanent Marker', cursive;
  
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
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;
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
  min-height: 75vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

/*
=============== 
Typography
===============
*/
.title {
  font-family: var(--font-family-primary);
  font-weight: 600;
  letter-spacing: -0.025em;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

p {
  margin-bottom: var(--spacing-md);
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
  border-radius: 0.5rem;
  padding: var(--spacing-xs);

  &:hover,
  &:focus {
    color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-light)" : "var(--bs-dark)"};
    transform: translateY(-2px);
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

.btn {
  transition: var(--transition);
  font-weight: 500;
  border-radius: 0.5rem;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0);
  }
}

.card {
  border-radius: 1rem;
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    box-shadow: var(--shadow-lg);
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
