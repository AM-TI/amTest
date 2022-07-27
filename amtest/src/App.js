import { useEffect, useState } from "react";
import "../src/Sass/_GlobalStyles.scss";
import { helperHttp } from "./API/helperHttp";
import FavoritesNav from "./Components/FavoritesNav";
import SortNav from "./Components/SortNav";
import CardsOfCharacters from "./Components/CardsOfCharacters";
import BGHowarts from "./Assets/img/Background-Howarts.jpg";

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [rol, setRol] = useState("");

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
      <SortNav rol ={rol} setRol={setRol} />
      <CardsOfCharacters charactersData={charactersData} />
    </main>
  );
}

export default App;
