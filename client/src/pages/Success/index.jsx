import React from "react";
import { Container } from "./Success.styled";

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
							Thank you for choosing{" "}
							<span className="highlight">Rocketmeme</span>. Now you can store
							any meme you create and share with friends easily.
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
