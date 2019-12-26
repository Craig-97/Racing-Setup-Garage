import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import gameReducer from './gameReducer';

export default combineReducers({
    games: gameReducer,
    errors: errorReducer,
});