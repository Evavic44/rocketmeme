import React from "react";
import MemeCardStyle from "../styles/MemeCardStyle";
import { Link } from "react-router-dom";
import {
	LazyLoadImage,
	trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function MemeCard({
	images,
	scrollPosition,
	link,
	downloads,
	likes,
	views,
	category,
	title,
	id,
}) {
	return (
		<MemeCardStyle>
			<div className="image-container">
				<LazyLoadImage
					className="gallery-image"
					effect="blur"
					src={link}
					alt="Meme"
					width="100%"
					height="100%"
					scrollPosition={scrollPosition}
					placeholderSrc={"/images/canvas.png"}
				/>

				<div className="gallery-tag">
					<p className="tag-title">{title}</p>

					<div className="tag-content">
						<Link to="/categories" className="tag-category">
							{category}
						</Link>
						<div className="tag-buttons">
							<div className="tag-icons">
								<button aria-label="Like button">
									<i className="fas fa-heart" aria-hidden="true"></i>
								</button>
								<p>{likes}</p>
							</div>
							<div className="tag-icons">
								<button aria-label="Views icon">
									<i className="fas fa-eye" aria-hidden="true"></i>
								</button>
								<p>{views}</p>
							</div>
							<div className="tag-icons">
								<button aria-label="Download button">
									<i className="fas fa-circle-down" aria-hidden="true"></i>
								</button>
								<p>{downloads}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MemeCardStyle>
	);
}

export default MemeCard;
