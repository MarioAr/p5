import {
    PROD_FETCH_START,
    PROD_GET_UNO_START,
    PROD_GET_INSERT_START,
    PROD_GET_UPDATE_START,
    PROD_GET_DELETE_START
} from '../../api/types';
import {
    productosSuccess,
    productosError,
    productoSuccess,
    productoError,
    productoModifyError,
    productoModifySuccess,
    fetchProductos
} from '../actions/productos';

import { api } from '../../api/api';


const mid = state => next => async action => {
    next(action);
    // console.log(action);
    let type = action.type
    
    if (type === PROD_FETCH_START) {
        try {
            let data = await api.productos.get();
            // console.log(data)
            if (Array.isArray(data)) {
                state.dispatch(productosSuccess(data))
            } else {
                state.dispatch(productosError(data));    
            }
        } catch (e) {
            state.dispatch(productosError(e))
        }
    } else if (type === PROD_GET_UNO_START) {
        try {
            let data = await api.productos.getUno(action.payload);
            // console.log(data)
            if (data) {
                state.dispatch(productoSuccess(data))
            } else {
                state.dispatch(productoError(data));    
            }
        } catch (e) {
            state.dispatch(productoModifyError(e))
        }
    } else if(type === PROD_GET_INSERT_START) {
        
        try {
            let data = await api.productos.setUno(action.payload);
            // console.log(data)
            if (data.id) {
                state.dispatch(productoModifySuccess(data))
            } else {
                state.dispatch(productoModifyError(data));    
            }
        } catch (e) {
            state.dispatch(productoModifyError(e))
        }
    } else if(type === PROD_GET_UPDATE_START) {
        
        try {
            let data = await api.productos.putUno(action.payload);
            // console.log(data)
            if (data.id) {
                state.dispatch(productoModifySuccess(data))
            } else {
                state.dispatch(productoModifyError(data));    
            }
        } catch (e) {
            state.dispatch(productoModifyError(e))
        }
    } else if(type === PROD_GET_DELETE_START) {
        
        try {
            let data = await api.productos.deleteUno(action.payload);
            
            if (!data.error) {
                state.dispatch(productoModifySuccess(data))
                state.dispatch(fetchProductos(data))
            } else {
                state.dispatch(productoModifyError(data));    
            }
        } catch (e) {
            state.dispatch(productoModifyError(e))
        }
    }
     else { 
        next(action);
    }
}

export default mid;