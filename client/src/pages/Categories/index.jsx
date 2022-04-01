import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Container } from "./Categories.styled";

export default function Categories() {
	return (
		<Container>
			<div className="container">
				<section className="left-container">
					<div>
						<a href="https://github.com/Evavic44/rocketmeme/releases">
							<a href="https://github.com/Evavic44/rocketmeme/releases/tag/v-0.1.0-beta">
								<img
									src="https://img.shields.io/static/v1?label=Beta&message=V0.1.0&color=ffcf4b&style=for-the-badge&logo=node&logoColor=white"
									alt="Beta - V0.1.0"
								/>
							</a>
						</a>

						<h2>COMING SOON!</h2>
						<p>
							This feature is still in production, but in the meantime you can
							click the button below to start creating a meme.
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