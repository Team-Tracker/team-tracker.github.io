import React from "react";
// Styles
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Images
import defaultLogo from "../images/defaultNavLogo.svg";
// Components
import { Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
// Config
import { newAppUrl, newAppHost, htlProjectUrl, githubUsername } from "../config";

// #region styled-components
const StyledFooter = styled.footer`
  position: relative;
  margin-top: 2rem;
  padding: 3.5rem 0 1.5rem;
  background: var(--surface);
  border-top: 1px solid var(--card-border);

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--brand-gradient);
    opacity: 0.8;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    font-family: var(--font-family-display);
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
  }

  h6 {
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li + li {
      margin-top: 0.5rem;
    }

    a {
      color: var(--fg);
      font-weight: 500;

      &:hover {
        color: var(--bs-primary);
      }
    }
  }

  .bottom {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--card-border);
    font-size: 0.875rem;
    color: var(--text-muted);
  }

  .bottom a {
    color: var(--bs-primary);
    font-weight: 600;
  }
`;
// #endregion

// #region component
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row className="gy-4">
          <Col lg={5}>
            <div className="brand mb-3">
              <img src={defaultLogo} alt="" width="36" height="36" />
              Team-Tracker
            </div>
            <p className="mb-3" style={{ maxWidth: "26rem" }}>
              Real-time team management across Android, iOS, Desktop and Web. The project lives on at{" "}
              <a href={newAppUrl} target="_blank" rel="noopener noreferrer">
                {newAppHost}
              </a>
              .
            </p>
            <SocialLinks />
          </Col>
          <Col xs={6} lg={{ span: 3, offset: 1 }}>
            <h6>Product</h6>
            <ul>
              <li>
                <a href={newAppUrl} target="_blank" rel="noopener noreferrer">
                  New Team-Tracker <Icon icon="mdi:arrow-top-right" />
                </a>
              </li>
              <li>
                <a href={htlProjectUrl} target="_blank" rel="noopener noreferrer">
                  HTL project page
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} lg={3}>
            <h6>Source</h6>
            <ul>
              <li>
                <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                  GitHub organization
                </a>
              </li>
              <li>
                <a href="#/All-Projects">All repositories</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© {new Date().getFullYear()} Team-Tracker</span>
          <span>
            Looking for the latest version?{" "}
            <a href={newAppUrl} target="_blank" rel="noopener noreferrer">
              {newAppHost} →
            </a>
          </span>
        </div>
      </Container>
    </StyledFooter>
  );
};
// #endregion

export default Footer;
