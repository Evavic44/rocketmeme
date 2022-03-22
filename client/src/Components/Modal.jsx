import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalContainer, ModalMain } from "./Modal.styled";
import { closeModal } from "../redux/actions/modalAction";

function Modal() {
	const modal = useSelector((data) => data.modal);
	const dispatch = useDispatch();

	const close = (e) => {
		document.querySelector("body").style.overflow = "auto";
		dispatch(closeModal());
	};

	return (
		<ModalContainer>
			<ModalMain>
				<p onClick={close} className="close-container">
					<i className="fa-solid fa-times"></i>
				</p>
				{modal.view}
			</ModalMain>
		</ModalContainer>
	);
}

export default Modal;
