import React from "react";
import { motion } from "framer-motion";
import Comments from "../../Components/Comments";
import CoffeeWidget from "../../Components/CoffeeWidget.jsx";
import { Container, Header, ContactCards } from "./Contact.styled";

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

			{/* Buymeacoffee Widget */}
			<CoffeeWidget />
		</Container>
	);
}

export default Contact;
