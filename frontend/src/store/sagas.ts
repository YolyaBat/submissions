import { loadUsers, addNewUser } from '../helpers/requests';
import { put } from 'redux-saga/effects';
import { SHOW_ALL_USERS as showAllUsers } from './actionTypes';
import { User, AddUserPayload } from '../types/interfaces';

export function* grabAllUsersSaga() {
	const users: User[] = yield loadUsers();
	if (users.length > 0) {
		yield put({ type: showAllUsers, payload: { users: [...users] } });
	}
}

export function* addNewUserSaga(action: AddUserPayload) {
	yield addNewUser(action.payload);
}
