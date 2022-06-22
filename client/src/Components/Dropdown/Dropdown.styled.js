import styled from "styled-components";

export const DropDownContainer = styled.div`
	position: relative;

	.dropdown-menu {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 18px;
		right: -50px;
		width: 22em;
		z-index: 100;
		background-color: var(--bg-light);
		padding: 1.1rem 1.3em;
		font-size: var(--font-small);
		border: var(--border-medium);
		border-radius: 4px;
		box-shadow: var(--shadow-primary);
	}

	/* Dropdown bubble  */
	.dropdown-menu::before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		bottom: 100%;
		right: 30%;
		border: 0.8rem solid transparent;
		border-bottom-color: #fff;
		filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 10, 0.2));
	}

	/* Dropdown links */
	.dropdown-menu li {
		transition: 0.2s ease-in-out;
		border-left: 2px solid transparent;
	}

	/* Dropdown links hover*/
	.dropdown-menu li:hover {
		background: #f7f7f7;
		border-left: 2px solid var(--primary-color);
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}

	.dropdown-menu.clicked {
		display: none;
	}

	.dropdown-link {
		display: block;
		padding: 0.5rem;
	}

	@media (max-width: 800px) {
		.fa-angle-down {
			display: none;
		}
	}
`;