import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <DropDownContainer>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </DropDownContainer>
  );
}

// Dropdown Menu
const DropDownContainer = styled.div`
  .dropdown-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 72px;
    width: 22em;
    right: 300px;
    text-align: left;
    z-index: 100;
    background-color: var(--bg-light);
    padding: 1.125em 1.5em;
    font-size: 1.25em;
    border: 1px solid #d2d5d9;
    border-radius: 4px;
    box-shadow: 0 5px 30px 5px rgba(66, 71, 76, 0.1);
  }

  /* Dropdown bubble  */
  .dropdown-menu::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    right: 4.2em;
    border: 0.8rem solid transparent;
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 10, 0.2));
  }

  .dropdown-menu li {
    cursor: pointer;
  }

  .dropdown-menu li:hover {
    background: #f4f4f4;
  }

  .dropdown-menu.clicked {
    display: none;
  }

  .dropdown-link {
    display: block;
    color: var(--text-dark);
    padding: 0.5rem;
  }

  @media screen and (max-width: 960px) {
    .fa-angle-down {
      display: none;
    }
  }
`;

export default Dropdown;
