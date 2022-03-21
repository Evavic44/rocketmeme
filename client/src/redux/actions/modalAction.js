import { ActionTypes } from "../contants/action-types";

export const showModal = (modal) => {
	return {
		type: ActionTypes.SHOW_MODAL,
		payload: modal,
	};
};

export const closeModal = () => {
	return {
		type: ActionTypes.CLOSE_MODAL,
	};
};
