import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { technologieData, resume } from "../config";

// #region component
const Technologies = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name={"Technologies"} id="technologies">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Technologies"} />
          </Container>
          <Row className="mt-3 align-items-center">
            {technologieData.map((technologies) => {
              return (
                <Col xs={4} key={technologies.id} className="my-md-5">
                  <figure>
                    {technologies.technology}
                    <figcaption>{technologies.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
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
