import React from "react";
import MemeCardStyle from "../styles/MemeCardStyle";
import { Link } from "react-router-dom";

function MemeCard({ link, downloads, likes, views, id }) {
  return (
    <MemeCardStyle>
      <div className="image-container">
        {/* <img
          className="lazyload gallery-image"
          data-src={link}
          src={link}
          alt="Meme"
        /> */}

        <div className="gallery-tag">
          <p className="tag-title">Copy from Stackoverflow</p>

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
}

export default MemeCard;
