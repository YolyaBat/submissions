import * as ActionTypes from './actionTypes';
import { User, AddUserPayload } from '../types/interfaces';

export const showAllUsers = () => {
	return {
		type: ActionTypes.SHOW_ALL_USERS,
	};
};

export const requestAllUsers = () => {
	return {
		type: ActionTypes.REQUEST_ALL_USERS,
	};
};

export const addNewUser = (payload: User): AddUserPayload => {
	return {
		type: ActionTypes.ADD_USER,
		payload,
	};
};
