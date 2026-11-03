import React from "react";
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import PropTypes from "prop-types";
// Router
import { Link, useLocation } from "react-router-dom";
// Icons
import { Icon } from "@iconify/react";
// Images
import defaultLogo from "../images/defaultNavLogo.svg";
// Components
import { Link as ScrollLink } from "react-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";
import NewVersionBanner from "./NewVersionBanner";
// Config
import { newAppUrl } from "../config";

// #region constants
const navLinks = {
  routes: [
    { id: "1R", name: "Home", route: "/" },
    { id: "2R", name: "All Projects", route: "/All-Projects" },
  ],
  to: [
    { id: "1T", name: "Home", to: "Home" },
    { id: "2T", name: "About", to: "About" },
    { id: "3T", name: "Technologies", to: "Technologies" },
    { id: "4T", name: "Projects", to: "Projects" },
    { id: "5T", name: "Contact", to: "Contact" },
  ],
};
// #endregion

// #region styled-components
const StyledDiv = styled.div`
  .spacer {
    height: var(--header-height);
  }

  .site-header {
    z-index: 1030;
  }

  .navbar {
    min-height: var(--nav-height);
    background: ${({ theme }) =>
      theme.name === "light" ? "rgba(246, 248, 252, 0.78)" : "rgba(7, 11, 22, 0.72)"};
    backdrop-filter: saturate(180%) blur(14px);
    -webkit-backdrop-filter: saturate(180%) blur(14px);
    border-bottom: 1px solid var(--card-border);
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    font-family: var(--font-family-display);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--fg);
  }

  .logo-img {
    width: 36px;
    height: 36px;
  }

  .navbar-toggler {
    border: 1px solid var(--card-border);
    border-radius: 0.75rem;
    padding: 0.45rem 0.6rem;
  }

  .navbar-nav .nav-link {
    position: relative;
    padding: 0.5rem 0.85rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--text-muted);

    &:hover {
      color: var(--fg);
    }

    &.active {
      color: var(--fg);
      background: var(--chip-bg);
    }
  }

  .nav-cta {
    padding: 0.45rem 1.1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 1199.98px) {
    .navbar-collapse {
      margin-top: 0.5rem;
      padding: 0.75rem 0;
      border-top: 1px solid var(--card-border);
      max-height: calc(100dvh - var(--header-height) - 1rem);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    .navbar-nav .nav-link {
      padding: 0.7rem 0.9rem;
    }

    .nav-actions {
      margin-top: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--card-border);
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  Logo: PropTypes.node,
  callBack: PropTypes.func,
  closeDelay: PropTypes.number,
};

const NavBar = ({ Logo = defaultLogo, callBack, closeDelay = 125 }) => {
  const theme = useSelector(selectMode);
  const [isExpanded, setisExpanded] = React.useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => {
    setTimeout(() => {
      setisExpanded(false);
    }, closeDelay);
  };

  return (
    <StyledDiv>
      <div className="spacer" />
      <div className="fixed-top site-header">
        <NewVersionBanner />
        <Navbar
          id="nav"
          collapseOnSelect={true}
          expand="xl"
          expanded={isExpanded}
          variant={theme === "light" ? "light" : "dark"}
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                alt="Team-Tracker logo"
                src={Logo === null ? defaultLogo : Logo}
                width="36"
                height="36"
                className="rounded-circle logo-img"
              />
              Team-Tracker
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setisExpanded(!isExpanded)}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav navbarScroll className="mx-auto">
                {pathname === "/"
                  ? navLinks.to.map((el) => {
                      return (
                        <Nav.Item key={el.id}>
                          <ScrollLink
                            to={el.to}
                            spy={true}
                            offset={-80}
                            activeClass="active"
                            className="nav-link"
                            onClick={closeMenu}
                          >
                            {el.name}
                          </ScrollLink>
                        </Nav.Item>
                      );
                    })
                  : navLinks.routes.map((el) => {
                      return (
                        <Nav.Item key={el.id}>
                          <Link
                            to={el.route}
                            className={
                              pathname === el.route
                                ? "nav-link active"
                                : "nav-link"
                            }
                            onClick={closeMenu}
                          >
                            {el.name}
                          </Link>
                        </Nav.Item>
                      );
                    })}
              </Nav>
              <Nav className="nav-actions flex-row align-items-center gap-3">
                <ThemeToggle
                  closeDelay={closeDelay}
                  setExpanded={setisExpanded}
                  setTheme={callBack}
                />
                <a
                  href={newAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary nav-cta"
                >
                  New Team-Tracker <Icon icon="mdi:arrow-top-right" />
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </StyledDiv>
  );
};

NavBar.propTypes = propTypes;
// #endregion

export default NavBar;
