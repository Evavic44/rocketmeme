import React from "react";
import styled from "styled-components";

export default function Success() {
	const Success = true;
	if (Success) {
		alert(`🎉 Login Successful! 🎉`);
	} else {
		alert(`😿 Login Failed! 😿`);
	}

	return (
		<Container>
			<div className="container">
				<section className="left-container">
					<div>
						<h2>Login Successful 🎉</h2>
						<p>
							Thank you for choosing <span className="highlight">Memefy</span>.{" "}
							Now you can store any meme you create and share with friends
							easily.
						</p>
					</div>

					<div className="buttons">
						<a href="/create" className="btn btn-primary">
							Start Creating
						</a>
						<a href="/" className="btn btn-light">
							Back Home
						</a>
					</div>
				</section>
				<section className="right-container">
					<img
						className="animateY"
						src="/images/hurray.svg"
						alt="Success Image"
						width="200px"
					/>
				</section>
			</div>
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
				width: 200px;
			}
		}
	}
`;
