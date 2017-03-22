import * as types from '../constants/actionTypes';

export const addHeader = (data) => ({
        type: types.ADD_HEADER,
        payload: data
    });

export const reformatHeader = (data) => ({
        type: types.REFORMAT_HEADER,
        payload: data
    });

export const addUrl = (data) => ({
        type: types.ADD_URL,
        payload: data
    });

export const addMethod = (data) => ({
        type: types.ADD_METHOD,
        payload: data
    });

export const addBody = (data) => ({
        type: types.ADD_BODY,
        payload: data
    });

export const reformatBody = (data) => ({
        type: types.REFORMAT_BODY,
        payload: data
    });

export const getResponseData = (data) => ({
        type: types.RESPONSE,
        payload: data
    });
