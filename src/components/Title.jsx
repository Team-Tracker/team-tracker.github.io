import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";

// #region styled-components
const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 90vw;
  word-wrap: break-word;
  margin: 0.5rem 0;

  .title {
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin-bottom: 0.75rem;
  }

  .underline {
    height: 4px;
    width: 3.5rem;
    border-radius: 999px;
    background: var(--brand-gradient);
  }
`;
// #endregion

// #region component
const propTypes = {
  eyebrow: PropTypes.string,
  size: PropTypes.oneOf(["h1", "h2"]),
  text: PropTypes.string.isRequired,
};

const Title = ({ eyebrow, size = "h1", text }) => {
  return (
    <TitleDiv>
      {eyebrow && <span className="eyebrow mb-2">{eyebrow}</span>}
      {size === "h1" ? (
        <h1 className="title">{text}</h1>
      ) : (
        <h2 className="title">{text}</h2>
      )}
      <div className="underline" />
    </TitleDiv>
  );
};

Title.propTypes = propTypes;
// #endregion

export default Title;
