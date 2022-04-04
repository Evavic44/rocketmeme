import styled from "styled-components";

export const Container = styled.section`
	margin: 8rem auto 0;
	background-color: #fff68d;
	background-image: var(--bg-primary);
	background-attachment: fixed;
	background-size: cover;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.2rem;
	margin: 2rem 0;

	.header-content {
		max-width: 800px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		h1 {
			font-size: 1.1rem;
			font-weight: 400;
		}

		h2 {
			font-size: 2.5rem;
			line-height: 1.2;
			font-weight: 600;
			padding: 1rem 0;

			/* Responsiveness */
			@media (max-width: 768px) {
				font-size: 2rem;
			}
		}

		a {
			font-size: 1.2rem;
			transition: 0.1s ease-in-out;

			i {
				transition: 0.2s ease-in-out;
			}

			&:hover {
				color: var(--primary-color);

				i {
					transform: translateX(5px);
				}
			}
		}

		p {
			max-width: 450px;
			margin: 0.7rem 0;
		}
	}
`;

export const ContactCards = styled.div`
	margin: 1rem;
`;
