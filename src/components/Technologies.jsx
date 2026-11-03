import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { technologieData, resume } from "../config";

// #region styled-components
const StyledTile = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 100%;
  margin: 0;
  padding: 1.5rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--card-border);
  background: var(--surface);
  box-shadow: var(--card-shadow);
  transition: var(--transition);

  .display-4 {
    font-size: 2.75rem;
    transition: var(--transition);
  }

  figcaption {
    font-weight: 600;
    font-size: 0.95rem;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--chip-border);
    box-shadow: var(--card-shadow-hover);

    .display-4 {
      transform: scale(1.08);
    }
  }
`;
// #endregion

// #region component
const Technologies = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name={"Technologies"} id="technologies">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} eyebrow={"Built with"} text={"Technologies"} />
          </Container>
          <Row xs={2} sm={3} lg={4} xl={6} className="g-3 g-md-4 mt-4">
            {technologieData.map((technologies) => {
              return (
                <Col key={technologies.id}>
                  <StyledTile>
                    {technologies.technology}
                    <figcaption>{technologies.name}</figcaption>
                  </StyledTile>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-4"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Technologies;
