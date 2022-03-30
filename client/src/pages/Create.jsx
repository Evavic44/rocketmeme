import React, { useRef, useState, useEffect } from "react";
import interact from "interactjs";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { v4 as uuid } from "uuid";
import { saveAs } from "file-saver";
import { useDispatch } from "react-redux";
import CoffeeWidget from "../Components/CoffeeWidget";
import { closeModal, showModal } from "../redux/actions/modalAction";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AddIconForm from "../Components/AddIconForm";
import temp1 from "../assets/images/memeTemplate/temp1.png";

// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

const client = new ApolloClient({
	uri: import.meta.env.VITE_GRAPHQL_CLIENT,
	cache: new InMemoryCache(),
});

const getMemeTemplatesQuery = gql`
	query GetTemplates {
		meme_templates {
			id
			title
			image_link
		}
	}
`;

/**
 * Select file(s).
 * @param {String} contentType The content type of files you wish to select. For instance, use "image/*" to select all types of images.
 * @param {Boolean} multiple Indicates if the user can select multiple files.
 * @returns {Promise<File|File[]>} A promise of a file or array of files in case the multiple parameter is true.
 */
function selectFile(contentType, multiple = false) {
	return new Promise((resolve) => {
		let input = document.createElement("input");
		input.type = "file";
		input.multiple = multiple;
		input.accept = contentType;

		input.onchange = () => {
			let files = Array.from(input.files);
			if (multiple) resolve(files);
			else resolve(files[0]);
		};

		input.click();
	});
}

export default function Create() {
	const imageContainer = useRef();
	const offScreenImage = useRef();
	const [memeTemplateView, setMemeTemplate] = useState(temp1);
	const [selectedText, setSelectedText] = useState(""); // Id of generated element
	const [currentText, setCurrentText] = useState("");
	const [memeTemplates, setMemeTemplates] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		client
			.query({
				query: getMemeTemplatesQuery,
			})
			.then((result) => {
				setMemeTemplates(result.data.meme_templates);
			});
	}, []);

	function dragMoveListener(event) {
		var target = event.target;
		// keep the dragged position in the data-x/data-y attributes
		var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
		var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

		// translate the element
		target.style.transform = "translate(" + x + "px, " + y + "px)";

		// update the posiion attributes
		target.setAttribute("data-x", x);
		target.setAttribute("data-y", y);
	}

	const downloadMeme = () => {
		html2canvas(imageContainer.current).then(function (canvas) {
			canvas.toBlob((blob) => saveAs(blob, `rocketmeme-${Date.now()}.png`));
		});
	};

	const useTemplate = (e) => {
		if (!e.target.src) return;
		// const { width, height } = getComputedStyle(offScreenImage.current);
		const { width: ContainerWidth } = getComputedStyle(imageContainer.current);
		offScreenImage.current.src = e.target.src;
		const width = offScreenImage.current.width;
		const height = offScreenImage.current.height;
		const ratio = width / height;
		console.log("Widdth: ", ContainerWidth);
		const newHeight = parseFloat(ContainerWidth) / ratio;
		imageContainer.current.style.height = newHeight + "px";
		console.log(newHeight);
		setMemeTemplate(e.target.src);
	};

	const deleteSelected = (e) => {
		if (selectedText) {
			document.querySelector(`#${selectedText}`).remove();
		}
	};

	const addFile = async () => {
		try {
			const selectedFile = await selectFile("png, jpg");
			const fileReader = new FileReader();
			fileReader.readAsDataURL(selectedFile);

			fileReader.onload = function (oEvnt) {
				const newImage = document.createElement("img");
				newImage.src = oEvnt.target.result;
				newImage.setAttribute("alt", ".");
				const random_id = "meme-" + uuid();
				newImage.setAttribute("id", random_id);
				imageContainer.current.append(newImage);

				interactIcon(random_id);
				dispatch(closeModal());
			};
		} catch (error) {
			console.log(error);
		}
	};

	function interactIcon(id) {
		interact(`#${id}`)
			.on("tap", (e) => {
				// set state of to manipulate the element from the toolkit
			})
			.resizable({
				edges: { top: true, left: true, bottom: true, right: true },
				listeners: {
					move: function (event) {
						let { x, y } = event.target.dataset;

						x = (parseFloat(x) || 0) + event.deltaRect.left;
						y = (parseFloat(y) || 0) + event.deltaRect.top;

						Object.assign(event.target.style, {
							width: `${event.rect.width}px`,
							height: `${event.rect.height}px`,
							transform: `translate(${x}px, ${y}px)`,
						});

						Object.assign(event.target.dataset, { x, y });
					},
				},
			})
			.draggable({
				// enable inertial throwing
				inertia: true,
				// keep the element within the area of it's parent
				modifiers: [
					interact.modifiers.restrictRect({
						restriction: "parent",
						endOnly: true,
					}),
				],
				// enable autoScroll
				autoScroll: true,

				listeners: {
					// call this function on every dragmove event
					move: dragMoveListener,

					// call this function on every dragend event
					end(event) {
						// -------
					},
				},
			});
	}

	const AddImageToCanvas = (e) => {
		dispatch(
			showModal(<AddIconForm addFile={addFile} addIcon={AddIconToCanvas} />),
		);
	};

	const AddIconToCanvas = (e) => {
		const newImage = document.createElement("img");
		// newImage.src = templateFive;
		newImage.src = e.target.src;
		newImage.setAttribute("alt", ".");
		const random_id = "meme-" + uuid();
		newImage.setAttribute("id", random_id);
		imageContainer.current.append(newImage);
		dispatch(closeModal());

		interactIcon(random_id);
	};

	const AddTextToCanvas = (e) => {
		const newText = document.createElement("div");
		const random_id = "meme-" + uuid();
		newText.setAttribute("id", random_id);
		newText.toggleAttribute("data-text-underlined");
		newText.toggleAttribute("data-text-bold");
		newText.toggleAttribute("data-text-italics");
		newText.classList.add("meme_text");
		newText.innerText = "Enter text here...";
		newText.contentEditable = true;
		imageContainer.current.append(newText);
		newText.focus();

		// Text's are not resizable but are draggle. To change size of text use the toolkit
		interact(`#${random_id}`)
			.on("tap", (e) => {
				// set state of to manipulate the element from the toolkit
				setSelectedText(random_id);
				setCurrentText(e.target.innerText);
			})
			.on("keypress", (e) => {
				setCurrentText(e.target.innerText);
			})
			.resizable({
				edges: { top: true, left: true, bottom: true, right: true },
				listeners: {
					move: function (event) {
						let { x, y } = event.target.dataset;

						x = (parseFloat(x) || 0) + event.deltaRect.left;
						y = (parseFloat(y) || 0) + event.deltaRect.top;

						Object.assign(event.target.style, {
							width: `${event.rect.width}px`,
							height: `${event.rect.height}px`,
							transform: `translate(${x}px, ${y}px)`,
						});

						Object.assign(event.target.dataset, { x, y });
					},
				},
			})
			.draggable({
				// enable inertial throwing
				inertia: true,
				// keep the element within the area of it's parent
				modifiers: [
					interact.modifiers.restrictRect({
						restriction: "parent",
						endOnly: true,
					}),
				],
				// enable autoScroll
				autoScroll: true,

				listeners: {
					// call this function on every dragmove event
					move: dragMoveListener,

					// call this function on every dragend event
					end(event) {
						// -------
					},
				},
			});
	};

	// Reset selections
	/**
	 * @deprecated This feature is no longer in use
	 */
	const removeSelections = () => {
		setSelectedText("");
	};

	// Text functions
	const textFunctions = {
		toggleBold: function () {
			if (!selectedText) return;
			const textElem = document.querySelector(`#${selectedText}`);
			if (!textElem) return setSelectedText("");
			textElem.toggleAttribute("data-text-bold");
			if (textElem.hasAttribute("data-text-bold")) {
				textElem.style.fontWeight = "bolder";
				return;
			}
			textElem.style.fontWeight = "normal";
		},
		toggleItalics: function () {
			if (!selectedText) return;
			const textElem = document.querySelector(`#${selectedText}`);
			if (!textElem) return setSelectedText("");
			textElem.toggleAttribute("data-text-italic");
			if (textElem.hasAttribute("data-text-italic")) {
				textElem.style.fontStyle = "italic";
				return;
			}
			textElem.style.fontStyle = "normal";
		},
		toggleUnderline: function () {
			if (!selectedText) return;
			const textElem = document.querySelector(`#${selectedText}`);
			if (!textElem) return setSelectedText("");
			textElem.toggleAttribute("data-text-underlined");
			if (textElem.hasAttribute("data-text-underlined")) {
				textElem.style.textDecoration = "underline";
				return;
			}
			textElem.style.textDecoration = "none";
		},
		changeText: function (e) {
			setCurrentText(e.target.value);
			const textElem = document.getElementById(selectedText);
			if (!textElem) return setSelectedText("");
			textElem.innerText = e.target.value;
		},
		changeTextSize: function (e) {
			if (!selectedText) return;
			const textElem = document.querySelector(`#${selectedText}`);
			if (!textElem) return setSelectedText("");
			textElem.style.fontSize = `${e.target.value}px`;
		},
		changeTextColor: function (e) {
			if (!selectedText) return;
			const textElem = document.querySelector(`#${selectedText}`);
			if (!textElem) return setSelectedText("");
			textElem.style.color = e.target.value;
		},
		justify: function (e) {
			console.log(e.target.dataset["justification"]);
			if (!selectedText) return;
			const textElem = document.querySelector(`#${selectedText}`);
			if (!textElem) return setSelectedText("");
			textElem.style.textAlign = e.target.dataset["justification"];
		},
	};

	return (
		<Container>
			<HomeCategory>
				<div className="categoryHeader">
					<h2>Meme Templates</h2>
					<div className="categoryOptions">
						<select className="category" name="category" id="category">
							<option defaultValue="Latest">Latest</option>
							<option defaultValue="Trending">Trending</option>
							<option defaultValue="Downloads">Downloads</option>
						</select>
					</div>
				</div>

				{/* Meme Templates */}
				<div className="memeTemplates">
					{memeTemplates.map((i) => (
						<div className="card" key={i.id} onClick={useTemplate}>
							<LazyLoadImage
								src={i.image_link}
								alt="Rocketmeme Template"
								effect="blur"
							/>
							<h3 className="tag">{i.title}</h3>
						</div>
					))}
				</div>
			</HomeCategory>

			{/*  */}
			<Flex>
				{/* Editing View */}
				<div className="editContainer">
					<img src="." alt="off-screen" hidden ref={offScreenImage} />
					<EditView
						ref={imageContainer}
						className="editorView"
						style={{
							backgroundImage: `url(${memeTemplateView})`,
							height: "290px",
						}}
					></EditView>
					<Actions>
						<ActionButton className="btn btn-light">
							Upload <i className="fas fa-share-from-square"></i>
						</ActionButton>
						<ActionButton className="btn btn-secondary" onClick={downloadMeme}>
							Download <i className="fas fa-cloud-arrow-down"></i>
						</ActionButton>
					</Actions>
				</div>

				{/* Editing Controls */}
				<Controls>
					<Actions>
						<ActionButton className="btn btn-light" onClick={AddTextToCanvas}>
							Add Text <i className="fas fa-text-height"></i>
						</ActionButton>
						<ActionButton className="btn btn-light" onClick={AddImageToCanvas}>
							Add Image <i className="fas fa-image"></i>
						</ActionButton>
					</Actions>
					<div className="text">
						<textarea
							type="text"
							onChange={textFunctions.changeText}
							value={currentText}
						/>
					</div>

					{/* Font Size */}
					<div className="formatting">
						{/* Bold, Italics, and Underline */}
						<div className="styling">
							<p>Font Style:</p>
							<div>
								<button className="bold" onClick={textFunctions.toggleBold}>
									B
								</button>
								<button
									className="italic"
									onClick={textFunctions.toggleItalics}
								>
									I
								</button>
								<button
									className="underline"
									onClick={textFunctions.toggleUnderline}
								>
									U
								</button>
							</div>
						</div>

						<div>
							<p>Font size:</p>
							<input
								type="text"
								defaultValue={16}
								maxLength={3}
								onChange={textFunctions.changeTextSize}
							/>
						</div>

						<div>
							<p>Font color:</p>
							<input
								type="color"
								defaultValue="#ffffff"
								onChange={textFunctions.changeTextColor}
							></input>
						</div>
					</div>
					<div className="formatting">
						{/* Text alignment */}
						<div className="styling">
							<p>Text alignment:</p>
							<div>
								<button
									className="leftAlign"
									onClick={textFunctions.justify}
									data-justification="left"
								>
									<i className="fas fa-align-left"></i>
								</button>
								<button
									className="midAlign"
									onClick={textFunctions.justify}
									data-justification="center"
								>
									<i className="fas fa-align-center"></i>
								</button>
								<button
									className="rightAlign"
									onClick={textFunctions.justify}
									data-justification="right"
								>
									<i className="fas fa-align-right"></i>
								</button>
							</div>
						</div>

						{/* Stroke */}
						<div>
							<p>Stroke width:</p>
							<div className="inputStroke">
								<input type="text" defaultValue="0" />
							</div>
						</div>

						<div>
							<p>Stroke color:</p>
							<div className="inputStroke">
								<input type="color" defaultValue="#000000" />
							</div>
						</div>

						{/* Background Color */}
						{/* <div>
              <p>BG Color:</p>
              <div className="bgColor">
                <input type="color" />
              </div>
            </div> */}
					</div>
					{/* <div className="formatting">
            <div className="range">
              <p>Opacity:</p>
              <input type="range" />
            </div>
          </div> */}
					<div>
						<ActionButton className="btn delete" onClick={deleteSelected}>
							Delete
						</ActionButton>
					</div>
				</Controls>
			</Flex>
			<FileButtons></FileButtons>

			{/* Buymeacoffee Widget */}
			<CoffeeWidget />
		</Container>
	);
}

const Container = styled.main`
	color: var(--text-dark);
	max-width: 1100px;
	margin: 50px auto 20px;
	padding: 1rem;

	input {
		font-size: 16px;
	}
`;

const HomeCategory = styled.section`
	max-width: 1100px;
	margin: 2rem auto;
	padding: 1rem;

	.categoryHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;

		.category {
			border: var(--border-medium);
			outline: none;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			padding: 0.4rem 0.8rem;
		}
	}

	.memeTemplates {
		display: grid;
		grid-template-columns: repeat(100, 1fr);
		grid-template-rows: 100%;
		flex-wrap: nowrap;
		overflow: auto;

		.card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			text-align: center;
			text-decoration: none;
			width: 150px;
			border-radius: 5px;
			margin: 0 0.1rem;
			border: var(--border-medium);
			cursor: pointer;

			img {
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
				width: 100%;
				height: 150px;
				object-fit: cover;
			}

			.tag {
				padding: 0.5rem;
				color: var(--text-priamry);
				font-weight: 500;
				font-size: 0.7rem;
			}
		}
	}
`;

const Flex = styled.div`
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: 1fr 1.2fr;
	gap: 15px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	border-radius: 5px;
	border-radius: 3px;
	padding: 1.5rem;

	.editContainer .btn {
		margin-top: 1.5rem;
	}

	@media (max-width: 900px) {
		grid-template-columns: 1.2fr 1.2fr;
	}
	@media (max-width: 880px) {
		grid-template-columns: 1fr;
	}
`;

const Actions = styled.div`
	display: flex;
	gap: 10px;
	padding-bottom: 10px;
`;

const ActionButton = styled.button`
	padding: 0.5rem;
	width: 50%;
	border-radius: 3px;

	i {
		margin-left: 0.2rem;
	}

	&.delete {
		border: 1px solid #f85656;
		color: #f85656;
		width: 20%;
	}
`;

const EditView = styled.div`
	/* min-width: 300px; */
	flex-grow: 1;
	/* min-height: 500px;
  
  
  
  */
	padding: 10px;
	border: var(--border-light);
	background-size: 100%;
	background-repeat: no-repeat;
	background-position: top center;

	@media (max-width: 900px) {
		background-size: contain;
	}

	> * {
		position: absolute;
	}

	[contenteditable] {
		outline: none;
		padding: 5px;
		border: 1px solid transparent;
		font-weight: bolder;
		font-size: 26px;
		text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
		color: #fff;

		:focus {
			border: var(--border-dark);
		}

		.justify-center {
			text-align: center;
		}

		.justify-left {
			text-align: left;
		}

		.justify-right {
			text-align: right;
		}
	}
`;

const FileButtons = styled.div``;

const Controls = styled.div`
	input,
	textarea {
		border: var(--border-medium);
		border-radius: 3px;
		padding: 5px;
		outline: none;
		font-family: "Poppins", sans-serif;
		width: 100%;

		&:focus {
			border: var(--border-dark);
		}
	}

	textarea {
		resize: none;
	}

	.text {
		input {
			min-width: 100%;
			width: 100%;
		}
	}

	.formatting {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 8px 0;

		@media (max-width: 768px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}

		input {
			margin-top: 0.5rem;
			background: none;
			border: var(--border-light);

			&:focus {
				background: var(--bg-gray);
			}
		}

		[type="text"] {
			width: 80px;
		}

		[type="color"] {
			width: 50px;
			box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
			height: 35px;
		}

		[type="range"] {
			width: 100%;
		}

		.styling {
			& > div * {
				margin: 0.2rem;
			}

			button {
				background: #fff;
				color: var(--text-dark);
				border: var(--border-light);
				border-radius: 3px;
				font-family: "Times New Roman", Serif;
				font-weight: bold;
				font-size: 1rem;
				width: 35px;
				height: 30px;
				padding: 0.3rem 0.5rem 0.5rem;
			}
		}
	}
`;
