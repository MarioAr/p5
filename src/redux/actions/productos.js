import {
    PROD_FETCH_ERROR,
    PROD_FETCH_START,
    PROD_FETCH_SUCCES,
    PROD_GET_UNO_ERROR,
    PROD_GET_UNO_START,
    PROD_GET_UNO_SUCCES,
    PROD_GET_UNO_CLEAR,
    PROD_GET_UPDATE_START,
    PROD_GET_INSERT_START,
    PROD_GET_MODIFY_START,
    PROD_GET_MODIFY_SUCCES,
    PROD_GET_MODIFY_ERROR,
    PROD_GET_DELETE_START
} from '../../api/types';

export function fetchProductos() {
    return {type: PROD_FETCH_START}
}

export function productosSuccess(data) {
    return {
        type: PROD_FETCH_SUCCES,
        payload: { lista: data }
    }
}

export function productosError(e) {
    return {
        type: PROD_FETCH_ERROR,
        payload: e,
        error: true
    }
}

/**
 * UNO
 */
export function fetchProducto(id) {
    return {
        type: PROD_GET_UNO_START,
        payload: id
    }
}

export function productoSuccess(data) {
    return {
        type: PROD_GET_UNO_SUCCES,
        payload: { ...data }
    }
}

export function productoError(e) {
    return {
        type: PROD_GET_UNO_ERROR,
        payload: e,
        error: true
    }
}

export function clearProducto() {
    return {
        type: PROD_GET_UNO_CLEAR
    }
}

/**
 * INSERT, DELETE y UPDATE
 */
export function fetchProductoUpdate(id) {
    return {
        type: PROD_GET_UPDATE_START,
        payload: id
    }
}

export function fetchProductoInsert(id) {
    return {
        type: PROD_GET_INSERT_START,
        payload: id
    }
}
export function fetchProductoDelete(id) {
    return {
        type: PROD_GET_DELETE_START,
        payload: id
    }
}
export function fetchProductoBorrar(id) {
    return {
        type: PROD_GET_MODIFY_START,
        payload: id
    }
}
export function productoModifySuccess(data) {
    return {
        type: PROD_GET_MODIFY_SUCCES,
        payload: { ...data }
    }
}

export function productoModifyError(e) {
    return {
        type: PROD_GET_MODIFY_ERROR,
        payload: e,
        error: true
    }
}
