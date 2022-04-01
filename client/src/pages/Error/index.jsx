import React from "react";
import CoffeeWidget from "../../Components/CoffeeWidget";
import {Container } from "./Error.styled";

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