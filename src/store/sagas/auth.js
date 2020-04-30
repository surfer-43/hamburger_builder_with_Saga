import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

/**
 * 'function*' are "generators"?
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function* - official docs
 * https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950 - get an understanding
 * 
 * the "yield" - exicute the current step and wait for it to finish
 */
export function* logoutSaga(){
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');

    // 'put' in this case will dispatch the action 'AUTH_LOGOUT'
    yield put({
        type: actionTypes.AUTH_LOGOUT
    })
}