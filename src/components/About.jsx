import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";

// #region constants
const highlights = [
  { id: 1, icon: "ph:lightning-bold", label: "Real-time collaboration" },
  { id: 2, icon: "ph:check-square-offset-bold", label: "Task assignments" },
  { id: 3, icon: "ph:chart-line-up-bold", label: "Progress tracking" },
  { id: 4, icon: "ph:devices-bold", label: "Android · iOS · Desktop · Web" },
];
// #endregion

// #region styled-components
const StyledAbout = styled.section`
  position: relative;

  .avatar-ring {
    display: inline-flex;
    padding: 6px;
    border-radius: 50%;
    background: var(--brand-gradient);
    box-shadow: var(--card-shadow-hover);
  }

  .avatar {
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    border: 6px solid var(--bg);
    background: var(--surface);
  }

  p {
    font-size: 1.05rem;
  }

  .highlight {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    border-radius: var(--radius-sm);
    background: var(--surface-contrast);
    font-weight: 600;
    font-size: 0.95rem;
    height: 100%;

    svg {
      flex-shrink: 0;
      font-size: 1.35rem;
      color: var(--bs-primary);
    }
  }

  @media (max-width: 575.98px) {
    .avatar {
      width: 10rem;
      height: 10rem;
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  moreInfo: PropTypes.string,
};

const About = ({ avatar_url, bio, moreInfo }) => {
  return (
    <Element name={"About"} id="about">
      <StyledAbout className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} eyebrow={"The project"} text={"About"} />
          </Container>
          <Row className="align-items-center justify-content-center mt-5 gy-4">
            <Col lg={4} className="text-center">
              <span className="avatar-ring">
                <img src={avatar_url} alt="Team-Tracker avatar" loading="lazy" className="avatar" />
              </span>
            </Col>
            <Col lg={8}>
              <div className="glass-panel">
                {bio && <h3 className="h4 mb-3">{bio}</h3>}
                {moreInfo && <p>{moreInfo.trim()}</p>}
                <Row xs={1} sm={2} className="g-3 mt-1">
                  {highlights.map((item) => (
                    <Col key={item.id}>
                      <div className="highlight">
                        <Icon icon={item.icon} />
                        {item.label}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledAbout>
    </Element>
  );
};

About.propTypes = propTypes;
// #endregion

export default About;
