import * as types from '../constants/actionTypes';

export const addHeader = (data) => {
    return {
        type: types.ADD_HEADER,
        payload: data
    }
}

export const reformatHeader = (data) => {
    return {
        type: types.REFORMAT_HEADER,
        payload: data
    }
}

export const addUrl = (data) => {
    return {
        type: types.ADD_URL,
        payload: data
    }
}

export const addMethod = (data) => {
    return {
        type: types.ADD_METHOD,
        payload: data
    }
}

export const addBody = (data) => {
    return {
        type: types.ADD_BODY,
        payload: data
    }
}

export const getResponseData = (data) => {
    return {
        type: types.RESPONSE,
        payload: data
    }
}

export const resetResponseData = () => {
    const data = [];
    return {
        type: types.RESET_RESPONSE,
        payload: data
    }
}
