import React from "react";
// Styles
import styled, { keyframes } from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Config
import { newAppUrl, newAppHost } from "../config";

// #region styled-components
const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const StyledBanner = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  height: var(--banner-height);
  padding: 0 1rem;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  background: linear-gradient(90deg, #2563eb, #0ea5e9, #10b981, #0ea5e9, #2563eb);
  background-size: 200% 100%;
  animation: ${shimmer} 12s linear infinite;

  &:hover,
  &:focus {
    color: #fff;
  }

  .badge-new {
    padding: 0.1rem 0.55rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.22);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .host {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .arrow {
    transition: var(--transition);
  }

  &:hover .arrow {
    transform: translateX(4px);
  }

  .long {
    display: none;
  }

  @media (min-width: 768px) {
    .long {
      display: inline;
    }

    .short {
      display: none;
    }
  }
`;
// #endregion

// #region component
const NewVersionBanner = () => {
  return (
    <StyledBanner
      href={newAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`The new Team-Tracker is live at ${newAppHost} (opens in a new tab)`}
    >
      <span className="badge-new">New</span>
      <span className="long">
        The new Team-Tracker is live — continue at{" "}
        <span className="host">{newAppHost}</span>
      </span>
      <span className="short">
        New version: <span className="host">{newAppHost}</span>
      </span>
      <Icon icon="mdi:arrow-right" className="arrow" />
    </StyledBanner>
  );
};
// #endregion

export default NewVersionBanner;
