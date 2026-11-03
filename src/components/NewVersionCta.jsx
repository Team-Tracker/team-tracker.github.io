import React from "react";
// Styles
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Container } from "react-bootstrap";
// Config
import { newAppUrl, newAppHost } from "../config";

// #region styled-components
const StyledCta = styled.section`
  .cta-card {
    position: relative;
    overflow: hidden;
    padding: clamp(2rem, 5vw, 4rem);
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 45%, #0d9488 100%);
    color: #fff;
    box-shadow: 0 24px 60px rgba(37, 99, 235, 0.3);
  }

  .cta-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse at top right, #000 0%, transparent 70%);
    pointer-events: none;
  }

  .cta-inner {
    position: relative;
    z-index: 1;
  }

  .eyebrow {
    color: rgba(255, 255, 255, 0.8);
  }

  h2 {
    font-size: clamp(1.9rem, 4vw, 3rem);
    color: #fff;
  }

  p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.1rem;
    max-width: 38rem;
  }

  .btn-light {
    color: #1e3a8a;
    border: none;

    &:hover {
      color: #1e3a8a;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
    }
  }

  .host {
    font-family: var(--font-family-display);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  }
`;
// #endregion

// #region component
const NewVersionCta = () => {
  return (
    <StyledCta className="section">
      <Container>
        <div className="cta-card">
          <div className="cta-inner">
            <span className="eyebrow mb-3">Team-Tracker has moved on</span>
            <h2 className="mb-3">The new Team-Tracker is ready for your team.</h2>
            <p className="mb-4">
              This site documents the original HTL project. Team-Tracker lives on as a new, actively developed app —
              head over to its new home to get started.
            </p>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3">
              <a href={newAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
                Go to the new Team-Tracker <Icon icon="mdi:arrow-top-right" />
              </a>
              <span className="host">
                <Icon icon="ph:globe-bold" /> {newAppHost}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </StyledCta>
  );
};
// #endregion

export default NewVersionCta;
