import React, { useRef, useState } from "react";
import interact from "interactjs";
import styled from "styled-components";
import html2canvas from "html2canvas";
import { v4 as uuid } from "uuid";
import { saveAs } from "file-saver";
import templateOne from "../assets/images/memeTemplate/templateOne.png";
import templateTwo from "../assets/images/memeTemplate/templateTwo.png";
import templateThree from "../assets/images/memeTemplate/templateThree.png";
import templateFour from "../assets/images/memeTemplate/templateFour.png";
import templateFive from "../assets/images/memeTemplate/templateFive.png";
import templateSix from "../assets/images/memeTemplate/templateSix.png";
import templateSeven from "../assets/images/memeTemplate/templateSeven.png";
import templateEight from "../assets/images/memeTemplate/templateEight.png";
import templateNine from "../assets/images/memeTemplate/templateNine.png";
import templateTen from "../assets/images/memeTemplate/templateTen.png";
import templateEleven from "../assets/images/memeTemplate/templateEleven.png";
import templateTwelve from "../assets/images/memeTemplate/templateTwelve.png";
import templateThirteen from "../assets/images/memeTemplate/templateThirteen.png";

export default function Create() {
  const imageContainer = useRef();
  const [memeTemplateView, setMemeTemplate] = useState("");
  const selectedText = useRef();

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
      canvas.toBlob((blob) => saveAs(blob, "rocketmeme.png"));
    });
  };

  const useTemplate = (e) => {
    if(!e.target.src) return;
    setMemeTemplate(e.target.src);
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
    newText.classList.add("meme_text");
    newText.innerText = "Make your funny statements here";
    newText.contentEditable = true;
    imageContainer.current.append(newText);
    newText.focus();

    // Text's are not resizable but are draggle. To change size of text use the toolkit
    interact(`#${random_id}`)
      .on("tap", (e) => {
        // set state of to manipulate the element from the toolkit
        selectedText.current = random_id;
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
  const removeSelections = () => {
    selectedText.current = "";
    console.log("Removed selections");
  }

  // Text functions
  const textFunctions = {
    toggleBold: function() {
      // if(!selectedText) return;
      console.log(selectedText);
    },
    toggleItalics: function() {},
    toggleUnderline: function() {}
  };

  return (
    <Container>
      <HomeCategory>
        <div className="categoryHeader">
          <h2>Meme Templates</h2>

          <div className="categoryOptions">
            <select className="category" name="category" id="category">
              <option value="Latest">Latest</option>
              <option value="Trending">Trending</option>
              <option value="Downloads">Downloads</option>
            </select>
          </div>
        </div>

        {/* Meme Templates */}
        <div className="memeTemplates">
          <div className="card" onClick={useTemplate}>
            <img src={templateSeven} alt="" />
            <h3 className="tag">X X Everywhere</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateNine} alt="" />
            <h3 className="tag">Success Kid</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateEleven} alt="" />
            <h3 className="tag">Distracted Boyfriend</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateFour} alt="" />
            <h3 className="tag">Disaster Girl</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateFive} alt="" />
            <h3 className="tag">Sad Pablo Escobar</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateSix} alt="" />
            <h3 className="tag">Sad Girlfriend</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateThirteen} alt="" />
            <h3 className="tag">Drake Hotline Bling</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateEight} alt="" />
            <h3 className="tag">Think about it</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateTwo} alt="" />
            <h3 className="tag">Left exit twelve off ramp</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateTen} alt="" />
            <h3 className="tag">Laughing Leo</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateThree} alt="" />
            <h3 className="tag">I am once again asking</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateTwelve} alt="" />
            <h3 className="tag">Two buttons</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateThree} alt="" />
            <h3 className="tag">I am once again asking</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateTen} alt="" />
            <h3 className="tag">Laughing Leo</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateOne} alt="" />
            <h3 className="tag">Drake Hotline Bling</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateTwelve} alt="" />
            <h3 className="tag">Two Buttons</h3>
          </div>
          <div className="card" onClick={useTemplate}>
            <img src={templateEight} alt="" />
            <h3 className="tag">Think About it</h3>
          </div>
        </div>
      </HomeCategory>

      {/*  */}
      <Flex onBlur={removeSelections}>
        {/* Editing View */}
        <div className="editContainer">
          <EditView ref={imageContainer} className="editorView" style={{backgroundImage: `url(${memeTemplateView})`}}></EditView>
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
            <textarea type="text" placeholder="Type your text here" />
          </div>

          {/* Font Size */}
          <div className="formatting">
            {/* Bold, Italics, and Underline */}
            <div className="styling">
              <p>Font Style:</p>
              <div>
                <button className="bold" onClick={textFunctions.toggleBold}>B</button>
                <button className="italic" onClick={textFunctions.toggleItalics}>I</button>
                <button className="underline" onClick={textFunctions.toggleUnderline}>U</button>
              </div>
            </div>

            <div>
              <p>Font size:</p>
              <input type="text" placeholder="10" maxLength={3} />
            </div>

            <div>
              <p>Font color:</p>
              <input type="color" value="#000000"></input>
            </div>
          </div>
          <div className="formatting">
            {/* Text alignment */}
            <div className="styling">
              <p>Text alignment:</p>
              <div>
                <button className="leftAlign">
                  <i className="fas fa-align-left"></i>
                </button>
                <button className="midAlign">
                  <i className="fas fa-align-center"></i>
                </button>
                <button className="rightAlign">
                  <i className="fas fa-align-right"></i>
                </button>
              </div>
            </div>

            {/* Stroke */}
            <div>
              <p>Stroke width:</p>
              <div className="inputStroke">
                <input type="text" placeholder="3" />
              </div>
            </div>

            <div>
              <p>Stroke color:</p>
              <div className="inputStroke">
                <input type="color" value="#ffcf4b" />
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
            <ActionButton className="btn delete">Reset</ActionButton>
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
  height: 350px;
  padding: 10px;
  border: var(--border-light);
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  > * {
    position: absolute;
  }

  [contenteditable] {
    outline: none;
    padding: 5px;
    border: 1px solid transparent;

    :focus {
      border: 1px solid grey;
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
