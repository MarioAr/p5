import {
    PROD_UPDATE,
    PROD_DELETE,
    PROD_INSERT,
    PROD_GET_UNO_START,
    PROD_GET_UNO_SUCCES,
    PROD_GET_UNO_ERROR,
    PROD_FETCH_START,
    PROD_FETCH_SUCCES,
    PROD_FETCH_ERROR,
    PROD_GET_UNO_CLEAR,
    PROD_GET_DELETE_START,
    PROD_GET_UPDATE_START,
    PROD_GET_INSERT_START,
    PROD_GET_MODIFY_START,
    PROD_GET_MODIFY_SUCCES,
    PROD_GET_MODIFY_ERROR
 } from '../../api/types';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]

const defaultState = {
    lista: rows,
    uno: {},
    loading: false,
    error: false
}
const reducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case PROD_FETCH_START:
            
            return {
                ...state,
                loading: true,
                error: false,
                lista: []
            }
        case PROD_FETCH_SUCCES:
            
            return {
                ...state,
                loading: false,
                error: false,
                lista: action.payload.lista
            }
        case PROD_FETCH_ERROR:
            // console.log(action)
            return {
                ...state,
                error: true,
                errorMsg: action.payload,
                loading: false,
                lista: []
            }
        case PROD_UPDATE:
            // console.log(PROD_UPDATE)
            // console.log(action)
            return {...state}
        case PROD_DELETE:
            // console.log(PROD_DELETE)
            // console.log(action)
            let lista = state.lista.filter(item => {
                return item.id !== action.id;
            })
            return {...state, lista}
        case PROD_INSERT:
            // console.log(PROD_INSERT)
            return {...state}
        case PROD_GET_UNO_START:
        // console.log("action", action)
            return {
                ...state,
                loading: true,
                error: false,
                uno: {}
            }
        case PROD_GET_UNO_SUCCES:
            // console.log(action)
            return {
                ...state,
                loading: false,
                error: false,
                uno: action.payload
            }
        case PROD_GET_UNO_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                uno: {}
            }
        case PROD_GET_UNO_CLEAR:
            return {
                ...state,
                uno: {}
            }
        /**
         * UPDATE e INSERT
         */
        case PROD_GET_DELETE_START:

            return {
                ...state,
                loading: true,
                error: false
            }
        case PROD_GET_UPDATE_START:

            return {
                ...state,
                loading: true,
                error: false
            }
        case PROD_GET_INSERT_START:

            return {
                ...state,
                loading: true,
                error: false
            }
        case PROD_GET_MODIFY_START:

            return {
                ...state,
                loading: true,
                error: false
            
            }
        case PROD_GET_MODIFY_SUCCES:

            return {
                ...state,
                loading: false,
                error: false
            }
        case PROD_GET_MODIFY_ERROR:
            // console.log(action)
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducer;