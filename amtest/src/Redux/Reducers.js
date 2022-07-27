import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from "../Redux/Types";

export const initCharacterState = {
  characters: [],
  favorites: [],
};

console.log(initCharacterState.characters);

///get de base de datos para traer los personajes para el filtrado de favs
export function favoritesState(getDatabase) {
  initCharacterState.characters = getDatabase;
}

export function favoriteReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      {
        let currentCharacter = state.characters.find(
          (character) => character.name === action.payload
        );

        if (state.favorites.length >= 0 && state.favorites.length < 4) {
          return {
            ...state,
            favorites: [...state.favorites, currentCharacter],
          };
        }
        if (state.favorites.length === 5) {
          //  console.log((currentFavorites.shift()).push(currentCharacter))
          return { ...state, favorites: [...state.favorites.pop()] };
        }
        if (state.favorites.length === 5) {
          return {
            ...state,
            favorites: [...state.favorites.pop()],
          };
        }
      }

      break;
    case REMOVE_TO_FAVORITES: {
      return {
        ...state,
        favorites: state.favorites.filter(
          (character) => character.name !== action.payload
        ),
      };
    }

    default:
      return state;
  }
}

// let currentFavorites = [];

// let currentCharacter = [];

// const {favorites}= state;
// if(state){
//   console.log(action.payload);
//   currentFavorites = [favorites, currentCharacter];

// }
