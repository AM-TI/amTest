import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoritesState } from "../Redux/Reducers";
import { addToFavorites, deleteToFavorites } from "../Redux/Actions";
import { helperHttp } from "../API/helperHttp";
import FavoritesNav from "../Components/FavoritesNav";
import SortNav from "../Components/SortNav";
import CardsOfCharacters from "../Components/CardsOfCharacters";
import "../Sass/_GlobalStyles.scss";
import BGHowarts from "../Assets/img/Background-Howarts.jpg";

function App() {
  /// actions redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { favorites } = state.favorites;
  /// duplicado de la data para primer renderizado
  const [charactersData, setCharactersData] = useState([]);
  const [rol, setRol] = useState("");
  /////btns Actions
  const [isBtnActive, setIsBtnActive] = useState();

  // let api = helperHttp();  //UseEffect para hacer el get de la API
  let charactersUrl = "http://localhost:4000/characters";
  useEffect(() => {
    helperHttp()
      .get(charactersUrl)
      .then((res) => {
        if (!res.err && rol === "") {
          setCharactersData(res);
          favoritesState(res);
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
      <FavoritesNav
        favorites={favorites}
        deleteToFavorites={() => dispatch(deleteToFavorites())}
        setIsBtnActive={setIsBtnActive}
      />

      <SortNav rol={rol} setRol={setRol} />

      <section className="mainCharacters">
        {charactersData.map((character, index) => (
          <CardsOfCharacters
            key={index}
            character={character}
            setIsBtnActive={setIsBtnActive}
            isBtnActive={isBtnActive}
            addToFavorites={() => dispatch(addToFavorites(character.name))}
            deleteToFavorites={() =>
              dispatch(deleteToFavorites(character.name))
            }
          />
        ))}
      </section>
    </main>
  );
}

export default App;
