import * as actionTypes from './actionTypes';
import { Action } from '../types/interfaces';
const initialState = {
	users: [],
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.SHOW_ALL_USERS:
			return {
				...state,
				users: action.payload.users,
			};
	}
	return state;
};

export default reducer;
