import { useEffect, useReducer, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
import { simulacionCharacters } from "../Redux/Reducers";
import { favoritesState, favoriteReducer } from "../Redux/Reducers";
import { helperHttp } from "../API/helperHttp";
import FavoritesNav from "../Components/FavoritesNav";
import SortNav from "../Components/SortNav";
import CardsOfCharacters from "../Components/CardsOfCharacters";
import "../Sass/_GlobalStyles.scss";
import BGHowarts from "../Assets/img/Background-Howarts.jpg";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [rol, setRol] = useState("");

  // const [character, setCharacter] = useState({});

  const [state, dispatch] = useReducer(favoriteReducer, simulacionCharacters);
  const { CharacterFakeData, characterlist } = state;

  const addToFavs = () => {};

  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // const { characters, favorites } = state.favorites;

  // let api = helperHttp();
  let charactersUrl = "http://localhost:4000/characters";
  //UseEffect para hacer el get de la API
  useEffect(() => {
    helperHttp()
      .get(charactersUrl)
      .then((res) => {
        if (!res.err && rol === "") {
          setCharactersData(res);
          // favoritesState(res);
        } else if (!res.err && rol === "hogwartsStudent") {
          setCharactersData(
            res.filter((character) => character.hogwartsStudent === true)
          );
        } else if (!res.err && rol === "hogwartsStaff") {
          setCharactersData(
            res.filter((character) => character.hogwartsStaff === true)
          );
        } else {
          setCharactersData(null);
        }
      });
  }, [charactersUrl, rol]);

  return (
    <main className="mainView">
      <img src={BGHowarts} className="mainView__background" alt="Howarts" />
      <div className="mainView__background"></div>
      <FavoritesNav />
      <SortNav rol={rol} setRol={setRol} />
      <section className="mainCharacters">
        {charactersData.map((character) => (
          <CardsOfCharacters
            key={character.name}
            character={character}
            addToFavs={addToFavs}
            // setCharacter={setCharacter}
            // addToFavorites={() => dispatch(addToFavorites(character))}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
