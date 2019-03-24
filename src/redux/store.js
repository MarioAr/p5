import {
    createStore,
    combineReducers,
    applyMiddleware } from 'redux';
import middleware from './middlewares/productosMiddleware';

/**
 * IMPORT REDUCERS
 */
import categorias from './reducers/categorias';
import productos from './reducers/productos';

const reducers = combineReducers({
    categorias,
    productos
})

const store = createStore(reducers,
        applyMiddleware(middleware)
    );

export default store;
