import React from 'react';
import styled from "styled-components";


// Images
import meme1 from "../assets/images/iconTemplates/meme.png";
import meme2 from "../assets/images/iconTemplates/meme1.webp";
import meme3 from "../assets/images/iconTemplates/meme2.png";
import meme4 from "../assets/images/iconTemplates/pepe1.png";
import meme5 from "../assets/images/iconTemplates/pepe2.png";
import meme6 from "../assets/images/iconTemplates/pepe3.webp";
import meme7 from "../assets/images/iconTemplates/pepe4.webp";

function AddIconForm(props) {
  return (
    <IconForm>
        <AddImageBtn className='btn btn-primary' onClick={props.addFile}>
            Upload Image
        </AddImageBtn>
        <p className="title">You can also choose from our library of icons</p>
        <div className="gallery">
            <img src={meme1} alt="." onClick={props.addIcon} />
            <img src={meme2} alt="." onClick={props.addIcon} />
            <img src={meme3} alt="." onClick={props.addIcon} />
            <img src={meme4} alt="." onClick={props.addIcon} />
            <img src={meme5} alt="." onClick={props.addIcon} />
            <img src={meme6} alt="." onClick={props.addIcon} />
            <img src={meme7} alt="." onClick={props.addIcon} />
            <img src={meme1} alt="." onClick={props.addIcon} />
            <img src={meme2} alt="." onClick={props.addIcon} />
            <img src={meme3} alt="." onClick={props.addIcon} />
            <img src={meme4} alt="." onClick={props.addIcon} />
            <img src={meme5} alt="." onClick={props.addIcon} />
            <img src={meme6} alt="." onClick={props.addIcon} />
            <img src={meme7} alt="." onClick={props.addIcon} />
        </div>
    </IconForm>
  )
}

const IconForm = styled.div`
    padding-bottom: 0.5rem;
    text-align: center;
    
    .title {
        margin: 1rem 0;
    }
    
    .gallery {
        overflow-y: scroll;
        max-height: 350px;
        padding: 10px 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, auto));
        gap: 10px;

        @media(max-width: 500px) {
            grid-template-columns: repeat(auto-fit, minmax(40px, auto));
            gap: 12px;
        }

        img {
            width: 55px;
            height: 55px;
            cursor: pointer;

            @media(max-width: 500px) {
                width: 40px;
                height: 40px;
            }
        }
    }
`;

const AddImageBtn = styled.button`
    width: 70%;
`;

export default AddIconForm;