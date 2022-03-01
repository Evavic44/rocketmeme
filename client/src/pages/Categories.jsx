import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Categories() {
  return (
    <Container>
      <div className="container">
        <section className="left-container">
          <div>
            <a href="https://github.com/Evavic44/rocketmeme/releases">
              <img
                src="https://img.shields.io/static/v1?label=BETA&message=v1.0&color=63ad44&style=for-the-badge"
                alt="BETA - v1.0"
              />
            </a>

            <h2>COMING SOON!</h2>
            <p>
              This feature is still in production. Updates will be made as soon
              as possible. In the meantime click the button below to create a
              meme.
            </p>
          </div>

          <div className="buttons">
            <a href="/create" className="btn btn-primary">
              Create Meme
            </a>
          </div>
        </section>
      </div>

      {/* <HomeCategory>
  <Outlet />
  <SideMenu>
    <NavLink className="bugs" to="/categories/bugs">
      Bugs
    </NavLink>

    <NavLink className="stackoverflow" to="/categories/stackoverflow">
      Stackoverflow
    </NavLink>
    <NavLink className="javascript" to="/categories/javascript">
      JavaScript
    </NavLink>
    <NavLink className="coding" to="/categories/coding">
      Coding
    </NavLink>
    <NavLink className="css" to="/categories/css">
      Css
    </NavLink>
    <NavLink className="developer" to="/categories/developer">
      Developer
    </NavLink>
    <NavLink className="git" to="/categories/git">
      Git
    </NavLink>
    <NavLink className="nft" to="/categories/nft">
      NFT
    </NavLink>
    <NavLink className="computer" to="/categories/computer">
      Computer
    </NavLink>
    <NavLink className="monitor" to="/categories/monitor">
      Monitor
    </NavLink>
    <NavLink className="comrade" to="/categories/comrade">
      Comrade
    </NavLink>
  </SideMenu>
</HomeCategory> */}
    </Container>
  );
}

const Container = styled.main`
  height: 600px;
  padding: 1rem;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;

    h2 {
      font-size: 3rem;
      line-height: 1.1;
    }

    p {
      font-size: 1.1rem;
      margin: 0.8rem 0;
      max-width: 700px;
    }

    @media (max-width: 900px) {
      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

// const HomeCategory = styled.section`
//   height: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const SideMenu = styled.div`
//   padding: 0 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   overflow: auto;
//   white-space: nowrap;
//   overflow-y: scroll;
//   scrollbar-width: none;
//   -ms-overflow-style: none;
//   box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

//   a {
//     padding: 1rem;
//     font-size: 0.85rem;
//     font-weight: 400;
//     letter-spacing: -1px;
//     color: var(--dark-grey);
//     border-bottom: 1px solid transparent;
//     transition: 0.2s ease-in-out;

//     &:hover {
//       color: var(--text-dark);
//     }

//     &.active {
//       border-bottom: var(--border-black);
//       color: var(--text-dark);
//     }
//   }
// `;
