import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from "../Redux/Types";

export const addToFavorites = (characterName) => ({
  type: ADD_TO_FAVORITES,
  payload: characterName,
});

export const delOneFromFavorites = (characterName, all = false) => ({
  type: REMOVE_TO_FAVORITES,
  payload: characterName,
});
