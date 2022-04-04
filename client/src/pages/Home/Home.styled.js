import styled from "styled-components";

// Dodge Dog image
export const Image = styled.img`
	width: 30px;
	height: 30px;
`;

// Hero container
export const Container = styled.header`
	position: relative;
	@media (max-width: 430px) {
		margin-top: 3rem;
	}
`;

export const ContentContainer = styled.div`
	background-color: #fff68d;
	background-image: var(--bg-primary);
	background-attachment: fixed;
	background-size: cover;

	@media (max-width: 500px) {
		background: var(--bg-light);
	}
`;

// Hero content
export const Content = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 10;
	max-width: 1000px;
	margin: 2.4rem auto 0;
	padding: 1.2rem;
	min-height: 470px;

	h2 {
		font-weight: 400;
		font-size: 0.8rem;
		margin: 1rem 0 1.5rem;
		letter-spacing: 0;
	}

	p {
		line-height: 1.4;
		font-size: 2rem;
		font-weight: 600;
		letter-spacing: -1px;
		max-width: 900px;
	}

	/* Move items up on screens smaller <= 768px */

	/* 4k & Desktop screens */
	@media (min-width: 1920px) {
		max-width: 1200px;

		h2 {
			font-size: 1.1rem;
		}

		p {
			font-size: 2.3rem;
			max-width: 900px;
		}
	}

	/* Tablet screens */
	@media (max-width: 768px) {
		p {
			font-size: 1.7rem;
		}
	}
`;

// Search bar container (Form)
export const Form = styled.form`
	display: flex;
	flex-wrap: nowrap;
	width: 90%;
	transition: 0.2s ease-in-out;
	max-width: 850px;
	height: 54px;
	background-color: #f5f5f5;
	border-radius: 4px;

	/* Submit search button */
	button {
		background: var(--secondary-color);
		color: #fff;
		transition: 0.3s ease-in-out;
		overflow: hidden;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		padding: 0 1.5rem;
	}
`;

// Search Input
export const Input = styled.input`
	width: 100%;
	font-size: 0.9rem;
	border-width: 0;
	border: var(--border-mid);
	outline: none;
	transition: 0.1s ease-in-out;
	appearance: none;
	-webkit-appearance: none;
	padding-left: 20px;
	padding-right: 20px;

	&:focus {
		border: var(--border-medium);
	}

	/* 4k screens */
	@media (min-width: 1920px) {
		font-size: 1.2rem;
		padding: 1.1rem 1rem;
	}
`;

export const HomeCategory = styled.section`
	max-width: 1100px;
	margin: 0 auto;
	padding: 1rem;
	margin-top: 2rem;

	.categoryHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;

		.category {
			border: var(--border-medium);
			outline: none;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			padding: 0.4rem 0.8rem;
		}
	}

	.homeCategory {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		gap: 0.4em;
		overflow: auto;
		white-space: nowrap;
		overflow-y: none;
		scrollbar-width: none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			display: none;
		}

		.card {
			border: var(--border-mid);
			color: #222;
			text-decoration: none;
			overflow: hidden;
			width: 200px;
			border-radius: 3px;

			.tag {
				padding: 1rem;

				h3 {
					font-weight: 600;
					font-size: 0.9rem;
				}

				p {
					font-size: 0.7rem;
				}
			}

			figure {
				transition: transform 0.3s;
				width: 100%;
				height: 120px;
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center center;
			}
		}
	}
`;

export const GridGallery = styled.section`
	max-width: 1200px;
	margin: 3rem auto;
	padding: 0.3rem;

	.gallery-container {
		-webkit-column-count: 3;
		-moz-column-count: 3;
		-webkit-column-width: 33%;
		-moz-column-width: 33%;
		column-count: 3;
		column-width: 33%;

		@media (max-width: 900px) {
			-webkit-column-count: 2;
			-moz-column-count: 2;
			-webkit-column-width: 50%;
			-moz-column-width: 50%;
			column-count: 2;
			column-width: 50%;
		}

		@media (max-width: 600px) {
			-webkit-column-count: 1;
			-moz-column-count: 1;
			-webkit-column-width: 100%;
			-moz-column-width: 100%;
			column-count: 1;
			column-width: 100%;
		}
	}
`;
