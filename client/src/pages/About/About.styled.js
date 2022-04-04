import styled from "styled-components";

export const Container = styled.main`
	background-color: #fff68d;
	background-image: var(--bg-primary);
	background-attachment: fixed;
	background-size: cover;

	@media (max-width: 500px) {
		background: var(--bg-light);
	}

	min-height: 25rem;
	margin: 7.5rem auto 0;
	padding: 1.3rem 1.5rem;

	i {
		transition: 0.3s ease-in-out;
	}

	.showcase-image {
		margin: 7rem 0;
		box-shadow: 2px 5px 50px rgba(0, 0, 0, 0.2);
	}
`;

// Header section
export const Header = styled.header`
	.header-content {
		max-width: 900px;
		margin: 0 auto;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		h1 {
			font-size: 1.3rem;
			font-weight: 400;
			color: var(--primary-color);

			@media (max-width: 320px) {
				font-size: 1rem;
			}
		}

		h2 {
			font-size: 3rem;
			line-height: 1.2;
			font-weight: 600;
			padding: 1rem 0;

			/* Responsiveness */
			@media (max-width: 768px) {
				font-size: 2rem;
			}
			@media (max-width: 320px) {
				font-size: 1.4rem;
			}
		}

		p {
			font-size: 1.1rem;
			font-weight: 400;
			max-width: 600px;
			margin-bottom: 1rem;

			@media (max-width: 320px) {
				font-size: 0.8rem;
			}
		}

		.btn {
			font-size: 0.85rem;
		}

		img {
			position: absolute;
			top: 2px;
			right: 80px;
			width: 50px;
			transform: rotate(20deg);
			border-radius: 50%;

			@media (max-width: 768px) {
				top: 20px;
				right: 10px;
				width: 30px;
			}
		}
	}
`;

export const Section = styled.section`
	padding: 3rem 0;

	.heading {
		max-width: 1200px;
		margin: 0 auto;
		h2 {
			font-size: 2.5rem;
			margin: 1rem 0;

			@media (max-width: 768px) {
				font-size: 1.8rem;
			}
		}

		p {
			font-size: 1rem;
		}

		&.heading-creators {
			text-align: center;
		}
	}

	.card-container {
		display: grid;
		grid-template-columns: repeat(2, minmax(300px, 1fr));
		grid-gap: 2rem;
		max-width: 1200px;
		margin: 2rem auto 6rem;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			grid-auto-rows: minmax(350px, max-content);
			margin: 2rem auto;
		}

		.card {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 1.5rem 2rem;
			border-radius: 30px;
			background: var(--bg-light);
			border: var(--border-medium);

			i {
				color: inherit;
				opacity: 0.8;
				padding: 1rem;
				font-size: 3.5rem;
				border-radius: 5px;
			}

			h3 {
				font-size: 2rem;
				font-weight: 600;
			}

			p {
				font-size: 1.1rem;
				padding: 0.5rem 0;
			}

			&:hover i {
				transform: translateX(5%) translateY(-10px);
			}

			&:nth-child(1) {
				border: 1px solid var(--primary-color);

				i {
					color: var(--primary-color);
				}
			}

			&:nth-child(2) {
				transform: translateY(100px);
				i {
					color: var(--secondary-color);
				}

				@media (max-width: 768px) {
					transform: translateY(0px);
				}
			}

			&:nth-child(3) {
				i {
					color: var(--secondary-color);
				}
			}

			&:nth-child(4) {
				border: 1px solid var(--primary-color);
				transform: translateY(100px);
				i {
					color: var(--primary-color);
				}
				@media (max-width: 768px) {
					transform: translateY(0px);
				}
			}
		}
	}
`;

// Creators
export const Creators = styled.div`
	max-width: 1200px;
	margin: 3rem auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
	}

	.user {
		padding: 1rem;

		.user-image {
			border-radius: 10%;
		}

		h2 {
			margin: 1rem 0 0;
			font-size: 1rem;
			color: var(--secondary-color);
			font-weight: 400;
		}

		h3 {
			font-size: 2rem;
			padding: 0.2rem 0;
		}

		p {
			font-size: 0.9rem;
			padding: 0 3rem;
		}

		@media (max-width: 768px) {
			h3 {
				font-size: 1.1rem;
			}
		}
	}
`;

export const FooterCta = styled.section`
	background: var(--secondary-color);
	padding: 2rem 4rem;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--text-light);
	min-height: 200px;
	max-width: 1200px;
	margin: 0 auto;
	position: relative;

	@media (max-width: 900px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 2.3rem 1.5rem 2rem;
	}

	&:hover i {
		transform: translateX(5%) translateY(10px);
	}

	.footercta-icon {
		i {
			position: absolute;
			top: -37px;
			right: 40px;
			font-size: 3rem;
			background: var(--secondary-color);
			padding: 1rem;
			border-radius: 50%;

			@media (max-width: 600px) {
				top: -27px;
				font-size: 2rem;
			}
		}
	}

	h3 {
		font-size: 3rem;
		letter-spacing: -0.1rem;
		font-weight: 600;

		@media (max-width: 900px) {
			font-size: 1.5rem;
			letter-spacing: 0;
		}

		@media (max-width: 600px) {
			font-size: 1.3rem;
		}
	}

	p {
		font-size: 1.1rem;
		@media (max-width: 600px) {
			font-size: 0.9rem;
		}
	}

	.btn {
		background: #fff;
		color: var(--secondary-color);
		padding: 1rem 2.5rem;
		font-size: 1.2rem;
		font-weight: 600;

		@media (max-width: 900px) {
			font-size: 1rem;
			padding: 0.8rem 1.5rem;
		}
	}
`;
