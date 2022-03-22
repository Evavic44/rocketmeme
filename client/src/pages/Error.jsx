import React from "react";
import styled from "styled-components";
import CoffeeWidget from "../Components/CoffeeWidget";

export default function Error() {
	return (
		<Container>
			<div className="container">
				<section className="left-container">
					<div>
						<h2>Oops! Page not found</h2>
						<p>
							Our memelords are carefully searching for this page right now, but
							we can't seem to find it. Please use the button below to go back
							home.
						</p>
					</div>

					<div className="buttons">
						<a href="/" className="btn btn-primary">
							Take me home
						</a>
					</div>
				</section>
				<section className="right-container">
					<img
						className="animateY"
						src="/images/error.svg"
						alt="Error 404 Image"
					/>
				</section>
			</div>

			<CoffeeWidget />
		</Container>
	);
}

const Container = styled.main`
	height: 600px;
	padding: 1rem;

	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 100%;
		max-width: 1100px;
		margin: 0 auto;
		padding: 1rem;

		@media (max-width: 900px) {
			flex-direction: column-reverse;
			text-align: center;
			justify-content: center;
		}
	}

	.left-container {
		@media (max-width: 768px) {
			margin-bottom: 2rem;
		}

		h2 {
			font-size: 3rem;
			line-height: 1.1;

			@media (max-width: 900px) {
				font-size: 2.5rem;
			}
			@media (max-width: 500px) {
				font-size: 1.5rem;
			}
		}

		p {
			font-size: 0.85rem;
			max-width: 500px;
			margin: 0.5rem 0 1rem;
		}

		.buttons {
			display: flex;
			align-items: center;

			@media (max-width: 900px) {
				justify-content: center;
			}

			@media (max-width: 500px) {
				justify-content: center;
				flex-direction: column;
			}
			.btn:first-child {
				margin-right: 1rem;

				@media (max-width: 500px) {
					margin: 0 0 0.5rem 0;
				}
			}
		}
	}

	.right-container {
		img {
			display: block;
			width: 300px;

			@media (max-width: 800px) {
				margin-bottom: 1rem;
				width: 150px;
			}
		}
	}
`;
