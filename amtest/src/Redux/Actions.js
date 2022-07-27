import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from "../Redux/Types";

export const addToFavorites = (name) => ({
  type: ADD_TO_FAVORITES,
  payload: name,
});

export const deleteToFavorites = (name, all = false) => ({
  type: REMOVE_TO_FAVORITES,
  payload: name,
});
