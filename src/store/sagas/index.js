import { takeEvery } from 'redux-saga/effects';
import { 
    authUserSaga,
    authCheckStateSaga,
    logoutSaga,
    checkAuthTimeoutSaga } from "./auth";
import {
    initIngredientsSaga
} from './burgerBuilder';
import {
    purchaseOrderSaga,
    fetchOrdersSaga
} from './order';
        
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
};

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
    yield takeEvery(actionTypes.PURCHASE_ORDER, purchaseOrderSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}

