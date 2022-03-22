import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Images
import meme1 from "../assets/images/iconTemplates/typescript.png";
import meme2 from "../assets/images/iconTemplates/gun-hand.png";
import meme3 from "../assets/images/iconTemplates/meme2.png";
import meme4 from "../assets/images/iconTemplates/pepe1.png";
import meme5 from "../assets/images/iconTemplates/pepe2.png";
import meme6 from "../assets/images/iconTemplates/pepe3.webp";
import meme7 from "../assets/images/iconTemplates/pepe4.webp";
import meme8 from "../assets/images/iconTemplates/deal-with-it.png";
import meme9 from "../assets/images/iconTemplates/text-bubble.png";
import meme10 from "../assets/images/iconTemplates/hand-open.png";
import meme11 from "../assets/images/iconTemplates/pepe-dipsy.png";
import meme12 from "../assets/images/iconTemplates/pepe-po.png";
import meme13 from "../assets/images/iconTemplates/pepe-smile.png";
import meme14 from "../assets/images/iconTemplates/pepe-sunbaby.png";
import meme15 from "../assets/images/iconTemplates/pepe-tinkywinky.png";
import meme16 from "../assets/images/iconTemplates/pepe-wtf.png";
import meme17 from "../assets/images/iconTemplates/red-cap.png";
import meme18 from "../assets/images/iconTemplates/shades.png";
import meme19 from "../assets/images/iconTemplates/nft-ape.png";
import meme20 from "../assets/images/iconTemplates/javascript.png";
import meme21 from "../assets/images/iconTemplates/react.png";
import meme22 from "../assets/images/iconTemplates/css3.png";
import meme23 from "../assets/images/iconTemplates/html5.png";

function AddIconForm(props) {
	return (
		<IconForm>
			<AddImageBtn className="btn btn-primary" onClick={props.addFile}>
				Upload Image
			</AddImageBtn>
			<p className="title">You can also choose from our library of icons</p>
			<div className="gallery">
				<LazyLoadImage
					className="upload-image"
					src={meme1}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme2}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme3}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme4}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme5}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme6}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme7}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme8}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme9}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme10}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme11}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme12}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme13}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme14}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme15}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme16}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme17}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme18}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme19}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme20}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme21}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme22}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
				<LazyLoadImage
					className="upload-image"
					src={meme23}
					alt="icon"
					onClick={props.addIcon}
					width="40px"
					height="40px"
					effect="blur"
					placeholderSrc={"/images/icon-canvas.png"}
				/>
			</div>
		</IconForm>
	);
}

const IconForm = styled.div`
	padding-bottom: 0.5rem;
	text-align: center;

	.title {
		margin: 1rem 0;
	}

	.gallery {
		max-height: 350px;
		padding: 10px 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(60px, auto));
		gap: 10px;

		@media (max-width: 500px) {
			grid-template-columns: repeat(auto-fit, minmax(40px, auto));
			gap: 12px;
		}

		.upload-image {
			cursor: pointer;
		}
	}
`;

const AddImageBtn = styled.button`
	width: 70%;
`;

export default AddIconForm;
