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
					height="400"
					scrollPosition={scrollPosition}
					placeholderSrc={"/images/canvas.png"}
				/>

				<div className="gallery-tag">
					<p className="tag-title">Copy from Stackoverflow</p>

<<<<<<< HEAD
          <div className="tag-content">
            <Link to="/categories" className="tag-category">
              Stackoverflow
            </Link>
            <div className="tag-buttons">
              <div className="tag-icons">
                <button>
                  <i className="fas fa-heart"></i>
                </button>
                <p>200k</p>
              </div>
              <div className="tag-icons">
                <button>
                  <i className="fas fa-eye"></i>
                </button>
                <p>120</p>
              </div>
              <div className="tag-icons">
                <button>
                  <i className="fas fa-circle-down"></i>
                </button>
                <p>55.5k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MemeCardStyle>
  );
=======
					<div className="tag-content">
						<Link to="/categories" className="tag-category">
							Stackoverflow
						</Link>
						<div className="tag-buttons">
							<div className="tag-icons">
								<Link to="/">
									<i className="fas fa-heart"></i>
								</Link>
								<p>200k</p>
							</div>
							<div className="tag-icons">
								<Link to="/">
									<i className="fas fa-eye"></i>
								</Link>
								<p>120</p>
							</div>
							<div className="tag-icons">
								<Link to="/">
									<i className="fas fa-circle-down"></i>
								</Link>
								<p>55.5k</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MemeCardStyle>
	);
>>>>>>> origin
}

export default MemeCard;
