import React from "react";
// Styles
import styled, { keyframes } from "styled-components";
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

// #region styled-components
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const StyledHero = styled.header`
  position: relative;
  overflow: hidden;
  padding: calc(var(--nav-height) + 2rem) 0 3rem;
  background: ${({ theme }) =>
    theme.name === "light"
      ? "#f8fafc"
      : "#0f172a"};
  color: ${({ theme }) => (theme.name === "light" ? "#0b1220" : "#e5e7eb")};

  .grid-lines {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
    background-size: 120px 120px;
    opacity: 0.15;
    mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 70%);
    z-index: 0;
    pointer-events: none;
  }

  .floating-orb {
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0) 65%);
    filter: blur(20px);
    z-index: 0;
  }

  .orb-left {
    top: 10%;
    left: -6%;
  }

  .orb-right {
    bottom: -10%;
    right: -4%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0) 65%);
  }

  .hero-content {
    position: relative;
    z-index: 1;
  }
`;

const MediaCard = styled.div`
  position: relative;
  overflow: hidden;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 0.75rem;
`;

const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 18px;
  overflow: hidden;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);

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
      <span className="grid-lines" aria-hidden="true" />
      <span className="floating-orb orb-left" aria-hidden="true" />
      <span className="floating-orb orb-right" aria-hidden="true" />

      <Container className="hero-content">
        <Row className="align-items-center gy-5">
          <Col lg={6} className="text-center text-lg-start">
            <div className="chip mb-3">
              <Icon icon="mdi:flash" /> Team status at a glance
            </div>
            <h1 className="display-4 fw-bold title mb-3">
              {name === null ? "null" : name}
            </h1>
            <p className="lead mb-4">
              One hub for live status, assignments, and alerts across web, desktop, and mobile. Keep everyone aligned,
              respond faster, and ship with confidence.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4 mb-4 justify-content-center justify-content-lg-start">
              <ScrollLink to={"Projects"} smooth offset={-60} className="d-inline-block">
                <Button size="lg" variant="primary">View projects</Button>
              </ScrollLink>
              <ScrollLink to={"Contact"} smooth offset={-60} className="d-inline-block">
                <Button size="lg" variant={secondaryVariant}>Get in touch</Button>
              </ScrollLink>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <SocialLinks />
            </div>
          </Col>

          <Col lg={6}>
            <MediaCard className="glass-panel">
              <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-3">
                <div className="chip">
                  <Icon icon="mdi:play" /> Featured Video
                </div>
                <small className="text-uppercase fw-semibold">Showreel · 2026</small>
              </div>
              <VideoFrame>
                <iframe
                  title="Featured video"
                  src="https://www.youtube.com/embed/O0ty3WvZ60c"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </VideoFrame>
              <div
                className="d-flex align-items-center gap-2 mt-3"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon icon="mdi:arrow-down" />
                <span>Keep scrolling for projects &amp; tech stack</span>
              </div>
            </MediaCard>
          </Col>
        </Row>

        <Row className="align-items-end mt-4">
          <Col className="text-center">
            <ScrollLink to={"About"} className="link-icons" smooth offset={-60}>
              <Icon icon="fa6-solid:circle-chevron-down" />
            </ScrollLink>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
