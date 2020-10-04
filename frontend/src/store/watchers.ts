import { takeEvery } from 'redux-saga/effects';
import { grabAllUsersSaga, addNewUserSaga } from './sagas';
import * as actionTypes from './actionTypes';

export function* sagaWatcher() {
	yield takeEvery(actionTypes.REQUEST_ALL_USERS, grabAllUsersSaga);
	yield takeEvery(actionTypes.ADD_USER, addNewUserSaga);
}
