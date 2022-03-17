import React, { useRef, useState } from "react";
import interact from "interactjs";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { v4 as uuid } from "uuid";
import { saveAs } from "file-saver";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import temp1 from "../assets/images/memeTemplate/temp1.png";
import temp2 from "../assets/images/memeTemplate/temp2.png";
import temp3 from "../assets/images/memeTemplate/temp3.png";
import temp4 from "../assets/images/memeTemplate/temp4.png";
import temp5 from "../assets/images/memeTemplate/temp5.png";
import temp6 from "../assets/images/memeTemplate/temp6.png";
import temp7 from "../assets/images/memeTemplate/temp7.png";
import temp8 from "../assets/images/memeTemplate/temp8.png";
import temp9 from "../assets/images/memeTemplate/temp9.png";
import temp10 from "../assets/images/memeTemplate/temp10.png";
import temp11 from "../assets/images/memeTemplate/temp11.png";
import temp12 from "../assets/images/memeTemplate/temp12.png";
import temp13 from "../assets/images/memeTemplate/temp13.png";
import temp14 from "../assets/images/memeTemplate/temp14.png";
import temp15 from "../assets/images/memeTemplate/temp15.png";
import temp16 from "../assets/images/memeTemplate/temp16.png";
import temp17 from "../assets/images/memeTemplate/temp17.png";
import temp18 from "../assets/images/memeTemplate/temp18.png";
import temp19 from "../assets/images/memeTemplate/temp19.png";
import temp20 from "../assets/images/memeTemplate/temp20.png";
import temp21 from "../assets/images/memeTemplate/temp21.png";
import temp22 from "../assets/images/memeTemplate/temp22.png";
import temp23 from "../assets/images/memeTemplate/temp23.png";
import temp24 from "../assets/images/memeTemplate/temp24.png";
import temp25 from "../assets/images/memeTemplate/temp25.png";
import temp26 from "../assets/images/memeTemplate/temp26.png";
import temp27 from "../assets/images/memeTemplate/temp27.png";
import temp28 from "../assets/images/memeTemplate/temp28.png";
import temp29 from "../assets/images/memeTemplate/temp29.png";
import temp30 from "../assets/images/memeTemplate/temp30.png";
import temp31 from "../assets/images/memeTemplate/temp31.png";
import temp32 from "../assets/images/memeTemplate/temp32.png";
import temp33 from "../assets/images/memeTemplate/temp33.png";
import temp34 from "../assets/images/memeTemplate/temp34.png";
import temp35 from "../assets/images/memeTemplate/temp35.png";
import temp36 from "../assets/images/memeTemplate/temp36.png";
import temp37 from "../assets/images/memeTemplate/temp37.png";
import temp38 from "../assets/images/memeTemplate/temp38.png";
import temp39 from "../assets/images/memeTemplate/temp39.png";
import temp40 from "../assets/images/memeTemplate/temp40.png";
import temp41 from "../assets/images/memeTemplate/temp41.png";
import temp42 from "../assets/images/memeTemplate/temp42.png";
import temp43 from "../assets/images/memeTemplate/temp43.png";
import temp44 from "../assets/images/memeTemplate/temp44.png";
import temp45 from "../assets/images/memeTemplate/temp45.png";
import temp46 from "../assets/images/memeTemplate/temp46.png";
import temp47 from "../assets/images/memeTemplate/temp47.png";
import temp48 from "../assets/images/memeTemplate/temp48.png";
import temp49 from "../assets/images/memeTemplate/temp49.png";
import temp50 from "../assets/images/memeTemplate/temp50.png";
import temp51 from "../assets/images/memeTemplate/temp51.png";
import temp52 from "../assets/images/memeTemplate/temp52.png";
import temp53 from "../assets/images/memeTemplate/temp53.png";
import temp54 from "../assets/images/memeTemplate/temp54.png";
import temp55 from "../assets/images/memeTemplate/temp55.png";
import temp56 from "../assets/images/memeTemplate/temp56.png";
import temp57 from "../assets/images/memeTemplate/temp57.png";

export default function Create() {
  const imageContainer = useRef();
  const [memeTemplateView, setMemeTemplate] = useState("");
  const [selectedText, setSelectedText] = useState(""); // Id of generated element
  const [currentText, setCurrentText] = useState("");

  // useEffect(() => {

  // }, [selectedText]);

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
    setMemeTemplate(e.target.src);
  };

  const deleteSelected = (e) => {
    if (selectedText) {
      document.querySelector(`#${selectedText}`).remove();
    }
  };

  const AddImageToCanvas = (e) => {
    const newImage = document.createElement("img");
    newImage.src = templateFive;
    newImage.setAttribute("alt", ".");
    const random_id = "meme-" + uuid();
    newImage.setAttribute("id", random_id);
    imageContainer.current.append(newImage);

    interact(`#${random_id}`)
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
      // document.querySelector(`#${selectedText}`).classList.toggle("bold");
      // document.querySelector(`#${selectedText}`).toggleAttribute("data-text-bold");
      // document.querySelector(`#${selectedText}`).style.fontWeight = "bolder";

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
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp1}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">X X Everywhere</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp2}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Success Kid</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp3}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Distracted Boyfriend</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp4}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Disaster Girl</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp5}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Sad Pablo Escobar</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp6}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Sad Girlfriend</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp7}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Drake Hotline Bling</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp8}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think about it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp9}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Left exit twelve off ramp</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp10}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Laughing Leo</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp11}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">I am once again asking</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp12}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Two buttons</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp13}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">I am once again asking</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp14}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Laughing Leo</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp15}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Drake Hotline Bling</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp16}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Two Buttons</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp17}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp18}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp19}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp20}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp21}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp22}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp23}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp24}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp25}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp26}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp27}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp28}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp29}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp30}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp31}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp32}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp33}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp34}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp35}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp36}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp37}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp38}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp39}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp40}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp41}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp42}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp43}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp44}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp45}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp46}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp47}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp48}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp49}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp50}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp51}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp52}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp53}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp54}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp55}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp56}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <LazyLoadImage
              src={temp57}
              alt="Rocketmeme Template"
              effect="blur"
            />
            <h3 className="tag">Think About it</h3>
          </div>
        </div>
      </HomeCategory>

      {/*  */}
      <Flex>
        {/* Editing View */}
        <div className="editContainer">
          <EditView
            ref={imageContainer}
            className="editorView"
            style={{ backgroundImage: `url(${memeTemplateView})` }}
          ></EditView>
          <Actions>
            <ActionButton className="btn btn-light">
              Post <i className="fas fa-share-from-square"></i>
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
  min-width: 300px;
  flex-grow: 1;
  min-height: 500px;
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
