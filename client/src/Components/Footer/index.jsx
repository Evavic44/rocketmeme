import React from "react";
import { Link } from "react-router-dom";
import {
	LazyLoadImage,
	trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
	Container,
	Content,
	Social,
	Icons,
	FooterLink,
	Masthead,
} from "./Footer.styled";

function Footer({ scrollPosition }) {
	return (
		<Container>
			<Content>
				<Social>
					<div>
						<a href="/" className="logo">
							<LazyLoadImage
								className="gallery-image"
								effect="blur"
								width="40px"
								height="40px"
								src="/images/logo.svg"
								alt="Logo"
								scrollPosition={scrollPosition}
							/>
						</a>

						<p>Collection of interesting and funny programming memes.</p>
					</div>

					<Icons>
						<p>Follow us on all socials</p>
						<div>
							<a
								href="https://web.facebook.com/evavic44"
								title="Facebook"
								aria-label="Facebook"
							>
								<i className="fab fa-facebook"></i>
							</a>
							<a
								href="https://twitter.com/evavic44"
								alt="Twitter icon"
								title="Twitter"
								aria-label="Twitter"
							>
								<i className="fab fa-twitter"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/evavic44"
								title="LinkedIn"
								aria-label="LinkedIn"
							>
								<i className="fab fa-linkedin"></i>
							</a>
							<a
								href="https://github.com/Evavic44/rocketmeme"
								title="GitHub"
								aria-label="GitHub"
							>
								<i className="fab fa-github"></i>
							</a>
							<a
								href="https://eke.hashnode.dev/rocketmeme-a-meme-library-and-editor-for-creating-and-sharing-memes"
								title="Hashnode"
								aria-label="Hashnode"
							>
								<i className="fab fa-hashnode"></i>
							</a>
						</div>
					</Icons>
				</Social>

				{/* Footer links */}
				<FooterLink>
					<div className="footer-categories">
						<h3>Categories</h3>
						<Link to="/categories">JavaScript</Link>
						<Link to="/categories">Programming</Link>
						<Link to="/categories">Stackoverflow</Link>
						<Link to="/categories">NFT</Link>
					</div>

					<div className="footer-resources">
						<h3>Resources</h3>
						<a href="https://github.com/Evavic44/rocketmeme/blob/main/LICENSE">
							License
						</a>
						<a href="https://github.com/Evavic44/rocketmeme/blob/main/CODE_OF_CONDUCT.md">
							Code of Conduct
						</a>
						<a href="https://github.com/Evavic44/rocketmeme/blob/main/README.md">
							Docs
						</a>
					</div>

					<div className="footer-about">
						<h3>About Us</h3>
						<a href="/about">About</a>
						<a href="mailto:evavic44@gmail.com">Contact Us</a>
					</div>

					<div className="footer-donate">
						<h3>Donate</h3>
						<a href="https://www.buymeacoffee.com/evavic44">Support our work</a>
						<a href="/">Share</a>
					</div>

					<div className="footer-contribute">
						<h3>Developer</h3>
						<a href="https://github.com/Evavic44/rocketmeme">Docs</a>
						<a href="https://rocketteam.gitbook.io/rocketmemes-api/">API</a>
					</div>
				</FooterLink>
			</Content>

			<Masthead>
				<small>
					Built with <i className="fas fa-heart highlight"></i> by{" "}
					<a href="https://github.com/Evavic44">Eke</a> and{" "}
					<a href="https://github.com/SpiffGreen">Spiff</a>
				</small>
			</Masthead>
		</Container>
	);
}

export default Footer;
