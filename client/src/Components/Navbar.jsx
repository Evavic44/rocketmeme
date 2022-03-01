import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Nav>
      <Container>
        <a className="logo" href="/">
          <img src="/images/logo-dark.svg" alt="logo" loading="eager"></img>
        </a>

        <NavContainer>
          <div className="nav-links">
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <div className="border-medium"></div>
          </div>

          <NavButtons>
            <Upload>
              <a className="btn btn-light" href="/create">
                Create
              </a>
            </Upload>

            <LogIn>
              <a className="btn btn-primary" href="/login">
                Login
              </a>
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
  font-size: 0.9rem;
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
`;

// Navigation links
const NavContainer = styled.div`
  display: flex;
  align-items: center;

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
  button {
    font-size: 0.9rem;
  }
  padding-left: 1rem;
`;

const Upload = styled.button`
  margin-right: 1rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

const LogIn = styled.button`
  color: var(--text-light);
`;

export default Login;
