import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Link as ScrollLink } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
// Config
import { newAppUrl, newAppHost, htlProjectUrl } from "../config";

// #region styled-components
const StyledHero = styled.header`
  position: relative;
  overflow: hidden;
  padding: 4.5rem 0 4rem;

  .glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }

  .glow-blue {
    width: 520px;
    height: 520px;
    top: -220px;
    left: -140px;
    background: rgba(37, 99, 235, ${({ theme }) => (theme.name === "light" ? 0.18 : 0.32)});
  }

  .glow-green {
    width: 460px;
    height: 460px;
    bottom: -240px;
    right: -120px;
    background: rgba(16, 185, 129, ${({ theme }) => (theme.name === "light" ? 0.16 : 0.24)});
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-size: clamp(2.75rem, 6vw, 4.75rem);
    line-height: 1.02;
    letter-spacing: -0.045em;
  }

  .lead {
    font-size: 1.15rem;
    max-width: 34rem;
  }

  .moved-note {
    display: flex;
    gap: 0.85rem;
    align-items: flex-start;
    max-width: 34rem;
    padding: 1rem 1.15rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--chip-border);
    background: var(--chip-bg);
    text-align: left;

    .note-icon {
      flex-shrink: 0;
      font-size: 1.35rem;
      color: var(--bs-primary);
      margin-top: 0.1rem;
    }

    p {
      margin: 0;
      font-size: 0.95rem;
    }

    a {
      font-weight: 700;
      color: var(--bs-primary);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 991.98px) {
    .lead,
    .moved-note {
      margin-inline: auto;
    }
  }

  @media (max-width: 575.98px) {
    padding: 2.5rem 0 2.5rem;
  }
`;

const MediaCard = styled.div`
  position: relative;
  padding: 0.75rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: var(--brand-gradient);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.6;
    pointer-events: none;
  }

  .media-meta {
    padding: 0.5rem 0.5rem 0.25rem;
  }
`;

const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface-contrast);

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
};

const Hero = ({ name }) => {
  const theme = useSelector(selectMode);
  const secondaryVariant = theme === "light" ? "outline-dark" : "outline-light";

  return (
    <StyledHero>
      <span className="grid-overlay" aria-hidden="true" />
      <span className="glow glow-blue" aria-hidden="true" />
      <span className="glow glow-green" aria-hidden="true" />

      <Container className="hero-content">
        <Row className="align-items-center gy-5">
          <Col lg={6} className="text-center text-lg-start fade-in">
            <a
              href={newAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="chip mb-4"
            >
              <Icon icon="ph:sparkle-fill" /> The new Team-Tracker is live
              <Icon icon="mdi:arrow-right" />
            </a>
            <h1 className="hero-title mb-4">
              <span className="text-gradient">{name ?? "Team-Tracker"}</span>
              <br />
              your team, in sync.
            </h1>
            <p className="lead mb-4">
              One hub for live status, assignments and alerts across web, desktop and mobile. Keep everyone
              aligned, respond faster and ship with confidence.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-4 justify-content-center justify-content-lg-start">
              <a href={newAppUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Open the new Team-Tracker <Icon icon="mdi:arrow-top-right" />
              </a>
              <ScrollLink to={"Projects"} smooth offset={-80} className="d-inline-block">
                <Button size="lg" variant={secondaryVariant} className="w-100">
                  Explore projects
                </Button>
              </ScrollLink>
            </div>
            <div className="moved-note mb-4">
              <Icon icon="ph:info-bold" className="note-icon" />
              <p>
                This page showcases the original HTL project. Development continues on the new Team-Tracker at{" "}
                <a href={newAppUrl} target="_blank" rel="noopener noreferrer">
                  {newAppHost}
                </a>
                .
              </p>
            </div>
            <div className="d-flex align-items-center gap-2 justify-content-center justify-content-lg-start flex-wrap">
              <SocialLinks />
              <a
                href={htlProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="small fw-semibold ms-1"
                aria-label="Open the HTL project page for Team-Trackr (opens in a new tab)"
              >
                HTL project page <Icon icon="mdi:open-in-new" />
              </a>
            </div>
          </Col>

          <Col lg={6} className="fade-in" style={{ animationDelay: "0.15s" }}>
            <MediaCard className="glass-panel">
              <VideoFrame>
                <iframe
                  title="Team-Tracker showcase video"
                  src="https://www.youtube.com/embed/O0ty3WvZ60c"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </VideoFrame>
              <div className="media-meta d-flex align-items-center justify-content-between flex-wrap gap-2">
                <span className="chip">
                  <Icon icon="mdi:play" /> Showcase
                </span>
                <small className="fw-semibold">HTL Hollabrunn · 2025</small>
              </div>
            </MediaCard>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
