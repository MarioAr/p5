import { CATEG_FETCH } from '../../api/types';

const defaultState = {

}
const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case CATEG_FETCH:
            console.log(CATEG_FETCH)
            return {...state}

        default:
            return state;
    }
}

export default reducer;