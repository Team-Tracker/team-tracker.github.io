import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import Title from "./Title";
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";

// #region styled-components
const StyledSection = styled.section`
  padding: calc(var(--nav-height) + 1.5rem) 0 2rem;
`;
// #endregion

// #region component
const Contact = () => {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} eyebrow={"Get in touch"} text={"Contact"} />
        </Container>
        <Container className="mt-4">
          <div className="glass-panel">
            <ContactForm />
          </div>
        </Container>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Contact;
