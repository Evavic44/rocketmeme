import { ActionTypes } from "../contants/action-types";

const initialState = {
	showing: false,
	view: null,
};

export const modalReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SHOW_MODAL:
			return { showing: true, view: payload };
		case ActionTypes.CLOSE_MODAL:
			return { ...state, showing: false };
		default:
			return state;
	}
};
