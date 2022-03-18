import styled from "styled-components";

export const ModalContainer = styled.div`
    background: rgba(0, 0, 0, 0.75);
    min-height: 100vh;
    display: grid;
    place-content: center;
    place-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
`;

export const ModalMain = styled.div`
    /* min-width: 600px; */
    width: 75vw;
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    border-radius: 4px;
    padding: 1.5rem 1.5rem 0;

    .close-container {
        text-align: right;

        > * {
            cursor: pointer;
            font-size: 24px;
        }
    }
`;