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
          <div className="glass-panel mt-4">
            <Row className="g-4 align-items-center">
              {technologieData.map((technologies) => {
                return (
                  <Col xs={6} md={4} lg={3} key={technologies.id}>
                    <figure className="m-0 d-flex flex-column align-items-center gap-2">
                      <div className="chip">{technologies.technology}</div>
                      <figcaption className="fw-semibold">{technologies.name}</figcaption>
                    </figure>
                  </Col>
                );
              })}
            </Row>
          </div>
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
