import styled from "styled-components";

export const ModalContainer = styled.div`
	background: rgba(0, 0, 0, 0.75);
	min-height: 100vh;
	display: grid;
	place-content: center;
	place-items: center;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
	padding: 1rem;
`;

export const ModalMain = styled.div`
	min-width: 500px;
	margin: 0 auto;
	background: #fff;
	border-radius: 4px;
	padding: 1.5rem 1.5rem 0;

	@media (max-width: 500px) {
		padding: 1.5rem 1rem 0;
	}

	.close-container {
		text-align: right;
		margin-bottom: 0.5rem;

		> * {
			cursor: pointer;
			font-size: 2rem;
			padding: 0.3rem 0.7rem;
			transition: 0.2s ease-in-out;
			border-radius: 50%;

			&:hover {
				background: #ddd;
				padding: 0.3rem 0.7rem;
			}
		}
	}

	@media (max-width: 500px) {
		min-width: 100%;
	}
`;
