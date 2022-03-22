import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ChatwootWidget from "../Components/Chatwoot";
import Comments from "../Components/Comments";

function Contact() {
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
					<h1 className="highlight">Contact Rocketmeme</h1>
					<h2>Got a question about using Rocketmeme?</h2>
					<a href="mailto:evavic44@gmail.com">
						Contact Team <i className="fas fa-arrow-right"></i>
					</a>
					<p>
						Or sign into your GitHub account and leave a review in the box
						below.
					</p>
				</motion.div>
			</Header>

			<ContactCards>
				<Comments />
			</ContactCards>
			<ChatwootWidget />
		</Container>
	);
}

export default Contact;

const Container = styled.section`
	margin: 8rem auto 3rem;
`;

const Header = styled.div`
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

const ContactCards = styled.div``;
