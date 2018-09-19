import {combineReducers} from 'redux';
import {RECEIVE_MEMES} from "../action";


function memes(state=[], action) {
    switch (action.type) {
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state;

    }
}


const rootReducer = combineReducers({memes});
export default rootReducer;


