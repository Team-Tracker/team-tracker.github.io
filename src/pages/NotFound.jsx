import React from "react";
// Styles
import styled, { keyframes } from "styled-components";
// Components
import { Container } from "react-bootstrap";
// Images
import Logo from "../images/defaultNavLogo.svg";
// Utils
import { updateTitle } from "../utils";

// #region styled-components
const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 2 * var(--nav-height) - 1rem);

  span {
    font-family: var(--font-family-display);
    font-weight: 700;
    font-size: 6rem;
    line-height: 1;
    background: var(--brand-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 2rem;
  }

  .logo-img {
    width: 6rem;
    margin: 0 1rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    img {
      animation: ${Spin} infinite 8s ease-in-out;
    }
  }
`;
// #endregion

// #region component
const NotFound = () => {
  React.useEffect(() => {
    updateTitle("Not found...");
  }, []);

  return (
    <>
      <StyledNotFound>
        <Container className="d-flex justify-content-center">
          <span>4</span>
          <img src={Logo} alt="Team-Tracker logo" className="logo-img" />
          <span>4</span>
        </Container>
        <p className="text-center">Sorry, page not found...</p>
      </StyledNotFound>
    </>
  );
};
// #endregion

export default NotFound;
