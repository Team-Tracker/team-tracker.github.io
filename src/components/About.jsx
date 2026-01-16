import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";

// #region styled-components
const StyledAbout = styled.section`
  position: relative;
  
  .about-card {
    position: relative;
    overflow: hidden;
  }

  .avatar {
    width: 15rem;
    height: 15rem;
    box-shadow: 0 18px 80px rgba(0, 0, 0, 0.35);
  }

  p {
    font-size: 1.05rem;
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
            <Title size={"h2"} text={"About"} />
          </Container>
          <Row className="align-items-center justify-content-center mt-5">
            <Col lg={5} className="text-center mb-4 mb-lg-0">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle border border-primary-subtle avatar"
              />
            </Col>
            <Col lg={7}>
              <div className="glass-panel about-card">
                <div className="chip mb-3">Kurzer Überblick</div>
                {bio && <p className="mb-3">{bio}</p>}
                {moreInfo && <p className="mb-0">{moreInfo}</p>}
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
