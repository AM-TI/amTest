import { combineReducers } from 'redux';
import { favoriteReducer } from './Reducers';

const reducer = combineReducers({
  favorites: favoriteReducer,
});

export default reducer;

