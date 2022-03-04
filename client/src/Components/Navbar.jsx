import React, { useState } from "react";
// import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import styled from "styled-components";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  // Change it to onMouseLeave
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Nav>
      <Container className="navbar">
        {/* Logo */}
        <a href="/" className="logo" onClick={closeMobileMenu}>
          <img src="/images/logo.svg" alt="logo" loading="eager" /> Rocket
        </a>

        <NavContainer>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/categories"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Categories
              </NavLink>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About <i className="fas fa-angle-down" />
              </NavLink>
              {dropdown && <Dropdown />}
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Create
              </NavLink>
            </li>
          </ul>

          <Create>
            <a className="btn btn-light" href="/create">
              Create
            </a>
          </Create>

          <LogIn>
            <NavLink className="btn btn-primary" to="/login">
              Login
            </NavLink>
          </LogIn>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </NavContainer>
      </Container>
    </Nav>
  );
}

// Nav Container
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
  }
`;

const Nav = styled.div`
  background: var(--bg-light);
  border-bottom: var(--border-light);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 1.5rem;
  font-size: var(--font-xsmall);
  z-index: 5;

  .navbar {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    .logo {
      display: flex;
      align-items: center;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
  }

  .fa-firstdraft {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }

  .nav-menu {
    display: flex;
    align-items: center;
  }

  .nav-links {
    margin: 0 0.3rem;
    padding: 1.5rem 1rem;
    transition: all 0.2s ease-out;
  }

  .nav-links:hover {
    color: var(--primary-color);
  }

  .fa-bars {
    font-size: 1.5rem;
  }

  .fa-angle-down {
    margin-left: 0.2rem;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 400px;
      min-height: 300px;
      position: absolute;
      top: 75px;
      right: -100%;
      opacity: 1;
      transition: all 0.5s cubic-bezier(0.98, 0.01, 0, 0.96);
      border: var(--border-light);
      border-radius: 3px;
    }

    .nav-menu.active {
      background: var(--bg-light);
      right: 0;
      opacity: 1;
      transition: all 0.2s cubic-bezier(0.98, 0.01, 0, 0.96);
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: var(--light-grey);
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }

    .menu-icon {
      display: block;
      cursor: pointer;
      margin-left: 1rem;
    }

    .fa-times {
      color: var(--text-dark);
      font-size: 2rem;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: var(--primary-color);
      text-decoration: none;
      font-size: 1.5rem;
    }

    button {
      display: none;
    }
  }
`;

// Navigation links
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* .nav-links {
    display: flex;

    .border-medium {
      background: #ccc;
      width: 1px;
      height: 22px;
      margin: 0 0.5rem;
    }
  } */
`;

const Create = styled.div`
  margin-right: 1rem;
`;
const LogIn = styled.div``;

export default Navbar;
