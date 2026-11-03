import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Link } from "react-scroll";

// #region styled-components
const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;
  z-index: 2;

  .link-icons {
    font-size: 2.5rem;
    opacity: 1;
    color: var(--bs-primary);
    background: var(--surface);
    border-radius: 50%;
    padding: 0;
    box-shadow: var(--card-shadow-hover);
  }

  &.show-up {
    visibility: visible;
  }
`;
// #endregion

// #region component
const propTypes = { home: PropTypes.string };

const BackToTop = ({ home = "Home" }) => {
  const [scrollYNum, setScrollYNum] = React.useState(null);
  const up = React.useRef(null);

  React.useEffect(() => {
    const updateScrollY = () => {
      setScrollYNum(window.scrollY);
      if (scrollYNum > 500) {
        up.current.classList.add("show-up");
      } else {
        up.current.classList.remove("show-up");
      }
    };
    window.addEventListener("scroll", updateScrollY);

    return () => window.removeEventListener("scroll", updateScrollY);
  }, [scrollYNum]);

  return (
    <StyledDiv ref={up}>
      <Link to={home} className="link-icons">
        <Icon icon="fa6-solid:circle-chevron-up" />
      </Link>
    </StyledDiv>
  );
};

BackToTop.propTypes = propTypes;
// #endregion

export default BackToTop;
