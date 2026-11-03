import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

// #region styled-components
const StyledCard = styled.div`
  height: 100%;

  .card {
    height: var(--card-height);

    .card-img-top {
      height: 45%;
      padding: 1.75rem;
      object-fit: contain;
      background: var(--surface-contrast);
      border-bottom: 1px solid var(--card-border);
    }

    .card-title {
      font-family: var(--font-family-display);
      font-weight: 700;
      font-size: 1.25rem;
    }

    .card-text {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .card-link {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-weight: 600;
      color: var(--bs-primary);

      &:hover {
        opacity: 0.8;
      }
    }

    .card-footer {
      border-top: 1px solid var(--card-border);
      background: transparent;

      .card-link {
        color: var(--fg);
      }
    }

    &:hover {
      transform: translateY(-4px);
      border-color: var(--chip-border);
      box-shadow: var(--card-shadow-hover);
    }
  }

  @media (max-width: 575.98px) {
    .card {
      height: auto;
      min-height: 22rem;
    }

    .card .card-img-top {
      height: 12rem;
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  demo: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.node,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const ProjectCard = ({ demo, description, image, name, url }) => {
  return (
    <StyledCard>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {demo ? (
            <Card.Link href={demo}>
              {"Live Demo "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null}
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url}>
            {"View on GitHub "}
            <Icon icon="icomoon-free:github" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCard>
  );
};

ProjectCard.propTypes = propTypes;
// #endregion

export default ProjectCard;
