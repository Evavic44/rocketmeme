import React from "react";
import { motion } from "framer-motion";
import {
	LazyLoadImage,
	trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CoffeeWidget from "../../Components/CoffeeWidget";
import {
	Container,
	Header,
	Section,
	Creators,
	FooterCta,
} from "./About.styled";

export default function About({ images, scrollPosition }) {
	// Fade top
	const fadeTop = {
		hidden: { opacity: 0, y: -30 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<Container>
			<Header>
				<motion.div
					className="header-content"
					variants={fadeTop}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.6 }}
				>
					<h1>About Rocketmeme</h1>
					<h2>
						Rocketmeme is all about creating and sharing laughable memes for
						developers.
					</h2>
					<p>
						Wether you're a beginner or advanced developer, memes are something
						we can all relate with every once in a while.
					</p>

					<a href="/create" className="btn btn-primary">
						Start Creating
					</a>
				</motion.div>
			</Header>

			<LazyLoadImage
				className="showcase-image"
				effect="blur"
				src="https://ik.imagekit.io/eke/Others/rocketmeme-editor_0QJSYGfIX.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1648726474107"
				width="100%"
				height="100%"
				alt="Illustration of how to use memefy editor"
				placeholderSrc={"/images/editor-canvas.png"}
			></LazyLoadImage>

			<Section id="features">
				<div className="heading">
					<h2>Rocketmeme Features</h2>
					<p>
						Our <span className="highlight">features</span> are focused on
						giving you an amazing experience{" "}
						<p>
							to share with loved ones and hopefully get a smile out of you.
						</p>
					</p>
				</div>

				<div className="card-container">
					<div className="card">
						<i className="fas fa-bolt"></i>
						<div>
							<h3>Blazing Fast</h3>
							<p>
								Creating and edit a meme in a matter of seconds, no reload or
								refresh time.
							</p>
						</div>
					</div>

					<div className="card">
						<i className="fas fa-brush"></i>
						<div>
							<h3>Highly Customizable</h3>
							<p>
								Highly customizable and allows users to create their own memes
								from the ground up.
							</p>
						</div>
					</div>

					<div className="card">
						<i className="fas fa-cloud-arrow-down"></i>
						<div>
							<h3>Download</h3>
							<p>
								Easily download memes you created in high quality PNG format.
							</p>
						</div>
					</div>

					<div className="card">
						<i className="fas fa-code"></i>
						<div>
							<h3>Meme API</h3>
							<p>
								Use our powerful meme API to fetch latest memes and templates.
							</p>
						</div>
					</div>
				</div>
			</Section>

			<Section id="creators">
				<div className="heading heading-creators">
					<h2>Meet the creators</h2>
					<p>
						The people behind the idea and iteration of{" "}
						<span className="highlight">Rocketmeme.</span>
					</p>
				</div>

				<Creators>
					<div className="user">
						<LazyLoadImage
							src="https://avatars.githubusercontent.com/u/62628408?v=4"
							alt="User image"
							className="user-image"
							width="250px"
							height="250px"
							effect="blur"
							scrollPosition={scrollPosition}
							placeholderSrc={"/images/canvas-eke.jpg"}
						></LazyLoadImage>
						<h2>Founder, Frontend</h2>
						<h3>Victor Eke</h3>
					</div>

					<div className="user">
						<LazyLoadImage
							src="https://avatars.githubusercontent.com/u/73044138?v=4"
							alt="User image"
							className="user-image"
							width="250px"
							height="250px"
							effect="blur"
							scrollPosition={scrollPosition}
							placeholderSrc={"/images/canvas-spiff.jpg"}
						></LazyLoadImage>

						<h2>Co-Founder, Backend</h2>
						<h3>Spiff Jekey Green</h3>
					</div>
				</Creators>
			</Section>

			<FooterCta>
				<div className="footercta-icon">
					<i className="fas fa-crop"></i>
					<h3>Start Creating now</h3>
					<p>It's completely free, no need to sign up</p>
				</div>

				<div>
					<a href="/create" className="btn">
						Start Creating
					</a>
				</div>
			</FooterCta>

			{/* Buymeacoffee Widget */}
			<CoffeeWidget />
		</Container>
	);
}