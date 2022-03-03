import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Nav>
      <Container>
        <a className="logo" href="/">
          <img src="/images/logo.svg" alt="logo" loading="eager"></img> Rocket
        </a>

        <NavContainer>
          <div className="nav-links">
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <div className="border-medium"></div>
          </div>

          <NavButtons>
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
          </NavButtons>
        </NavContainer>
      </Container>
    </Nav>
  );
};

// Navbar
const Nav = styled.nav`
  background: var(--bg-light);
  border-bottom: var(--border-light);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 1.5rem;
  font-size: var(--font-xsmall);
  z-index: 5;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

// Nav Container
const Container = styled.div`
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
`;

// Navigation links
const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    .border-medium {
      display: none;
    }
  }

  .nav-links {
    display: flex;

    & > a {
      margin: 0 1rem;

      @media (max-width: 800px) {
        display: none;
      }
    }

    .border-medium {
      background: #ccc;
      width: 1px;
      height: 22px;
      margin: 0 0.5rem;
    }
  }
`;

//Nav-buttons
const NavButtons = styled.div`
  padding-left: 1rem;
`;

const Create = styled.button`
  margin-right: 1rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

const LogIn = styled.button``;

export default Login;
