import styled from "styled-components";

// Nav Container
export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.logo {
		display: flex;
		align-items: center;
	}

	@media (max-width: 800px) {
		.hidden {
			display: none;
		}
	}
`;

export const Nav = styled.div`
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

	.nav-menu {
		display: flex;
		align-items: center;

		.hide {
			display: none;
		}
	}

	/* Navbar links */
	.nav-links {
		padding: 1.2rem 1rem;
		transition: all 0.2s ease-out;
	}

	.fa-bars-staggered {
		font-size: 1.5rem;
	}

	.fa-angle-down {
		margin-left: 0.2rem;

		@media (max-width: 800px) {
			display: none;
		}
	}

	.nav-links-mobile {
		display: none;
	}

	.menu-icon {
		display: none;
	}

	@media (max-width: 800px) {
		.nav-menu {
			display: flex;
			align-items: stretch;
			justify-content: center;
			flex-direction: column;
			min-width: 400px;
			min-height: 200px;
			position: absolute;
			top: 75px;
			right: -100%;
			opacity: 1;
			transition: 0.2s cubic-bezier(0.98, 0.01, 0, 0.96);
			box-shadow: var(--shadow-primary);
			border: var(--border-mid);
			border-radius: 3px;
			padding: 0.5rem 0;
			@media (max-width: 500px) {
				min-width: 90vw;
			}

			.hide {
				display: inherit;
			}
		}

		/* Dropdown bubble  */
		.nav-menu::before {
			content: "";
			position: absolute;
			width: 0;
			height: 0;
			bottom: 100%;
			right: 8px;
			border: 0.8rem solid transparent;
			border-bottom-color: #fff;
			filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 10, 0.1));
		}

		.nav-menu.active {
			background: var(--bg-light);
			right: 10px;
			opacity: 1;
			transition: all 0.2s cubic-bezier(0.2, 0.01, 0, 1);
			z-index: 55;
		}

		.nav-item {
			font-size: 0.9rem;
			margin: 1.5rem 1rem 0;

			&:nth-child(3) {
				margin-bottom: 0.5rem;
			}
		}

		.menu-icon {
			display: block;
			cursor: pointer;
			margin-left: 1rem;
		}

		.nav-links-mobile {
			display: block;
			margin: 1rem auto 1.5rem;
			border-radius: 3px;
			width: 80%;
			text-align: center;
		}

		button {
			display: none;
		}
	}
`;

// Navigation links
export const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Create = styled.div`
	margin-right: 1rem;
`;
export const LogIn = styled.div``;
