import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";

// #region styled-components
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  border: 1px solid var(--card-border);
  background: var(--surface);
  color: var(--fg);
  font-size: 1.15rem;
  transition: var(--transition);

  &:hover {
    border-color: var(--bs-primary);
    color: var(--bs-primary);
    transform: rotate(-12deg);
  }
`;
// #endregion

// #region functions
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);
// #endregion

// #region component
const propTypes = {
  closeDelay: PropTypes.number,
  setExpanded: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
};

const ThemeToggle = ({ closeDelay = 250, setExpanded, setTheme }) => {
  const theme = useSelector(selectMode);

  const toggleTheme = () => {
    const themType = theme === "light" ? "dark" : "light";
    setTheme(themType);
    setStoredTheme(themType);
    setTimeout(() => {
      setExpanded(false);
    }, closeDelay);
  };

  return (
    <StyledButton
      type="button"
      aria-label={`Toggle theme, currently ${theme}.`}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Icon icon="ph:sun-bold" />
      ) : (
        <Icon icon="ph:moon-stars-bold" />
      )}
    </StyledButton>
  );
};

ThemeToggle.propTypes = propTypes;
// #endregion

export default ThemeToggle;
