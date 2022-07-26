import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from "../Redux/Types";

import Luna from "../Assets/icons/luna.png";

/////fake data simulacionCharacters
// export let initCharacterState = {
//   characters: [],
//   favorites: [],
// };

export const simulacionCharacters = {
  CharacterFakeData: [
    { id: 1, img: { Luna }, characterName: "Luna Lovegood" },
    { id: 2, img: { Luna }, characterName: "Luna Lovegood" },
    { id: 3, img: { Luna }, characterName: "Luna Lovegood" },
  ],
  characterlist: [],
};

export function favoriteReducer(state = simulacionCharacters, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      

    }
    default:
      return state;
  }
}

// export function favoritesState(initDatabase) {
//   initCharacterState.characters = initDatabase;
// }

// export function favoriteReducer(state = initCharacterState, action) {
//   switch (action.type) {
//     case ADD_TO_FAVORITES: {
//       let FavCharacter = state.characters.find(
//         (character) => character.name === action.payload
//       );

//       let characterExistInFavorites = state.favorites.find(
//         (character) => character.name === FavCharacter.name
//       );

//       if (state.favorites.length >= 0 && state.favorites.length < 5) {
//         return characterExistInFavorites
//           ? {
//               ...state,
//               favorites: state.favorites.map((character) =>
//                 character.name === FavCharacter.name
//                   ? { ...character, quantity: character.quantity + 1 }
//                   : character
//               ),
//             }
//           : {
//               ...state,
//               favorites: [...state.favorites, { ...FavCharacter, quantity: 1 }],
//             };
//       } else {
//         return { ...state, favorites: [...state.favorites] };
//       }
//     }

//     case REMOVE_TO_FAVORITES: {
//       return {
//         ...state,
//         favorites: state.favorites.filter(
//           (character) => character.name !== action.payload
//         ),
//       };
//     }

//     default:
//       return state;
//   }
// }
