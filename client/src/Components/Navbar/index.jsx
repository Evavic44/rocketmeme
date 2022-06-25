import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";
import { Container, Nav, NavContainer, Create, LogIn } from "./Navbar.styled";

function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		setDropdown(window.innerWidth >= 800);
	};

	// Change it to onMouseLeave
	const onMouseLeave = () => {
		setDropdown(false);
	};

	return (
		<Nav>
			<Container className="navbar">
				{/* Logo */}
				<a href="/" className="logo" onClick={closeMobileMenu}>
					<img
						src="/images/logo.svg"
						alt="logo"
						width="40px"
						height="40px"
						loading="eager"
					/>{" "}
					<span className="hidden">Rocket</span>
				</a>

				{/* Navlinks */}
				<NavContainer>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<NavLink
								to="/categories"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								<span className="hide" aria-label="none">
									🔥{" "}
								</span>
								Categories
							</NavLink>
						</li>
						<li
							className="nav-item"
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}
						>
							<NavLink
								to="/about"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								<span className="hide" aria-label="none">
									⚙️{" "}
								</span>
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
								<span className="hide" aria-label="none">
									📱{" "}
								</span>
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/create"
								className="btn btn-light nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Start Creating
							</NavLink>
						</li>
					</ul>

					<Create className="hidden">
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
						<i
							className={
								click ? "fas fa-bars-staggered" : "fas fa-bars-staggered"
							}
						/>
					</div>
				</NavContainer>
			</Container>
		</Nav>
	);
}

export default Navbar;
