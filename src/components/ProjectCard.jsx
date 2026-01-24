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
  .card {
    height: var(--card-height);
    border: 1px solid var(--card-border);
    transition: var(--transition);
    background: var(--surface-glass);
    box-shadow: var(--card-shadow);
    backdrop-filter: blur(12px);
    color: inherit;

    .card-img-top {
      height: 50%;
      object-fit: contain;
    }

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: inherit;

      &:hover {
        color: var(--bs-primary);
      }
    }

    .card-footer {
      border-top: 1px solid var(--card-border);
      background: transparent;
      backdrop-filter: blur(8px);

      .card-link {
        color: inherit;
      }
    }

    &:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: ${({ theme }) =>
        theme.name === "light"
          ? "0 18px 70px rgba(15, 23, 42, 0.2)"
          : "0 30px 120px rgba(0, 0, 0, 0.45)"};
    }
  }

  @media (max-width: 575.98px) {
    .card {
      height: auto;
      min-height: 22rem;
    }

    .card .card-img-top {
      height: 12rem;
      padding: 0.75rem;
      object-fit: contain;
    }

    .card .card-link {
      font-size: 1.15rem;
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
          {demo !== (undefined && null && "") ? (
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
