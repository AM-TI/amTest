import "../src/Sass Styles/GlobalStyles.scss";
import SortNav from "./Helpers/Nav/SortNav";
import FavoritesNav from "./Helpers/favoritesNav/FavoritesNav";
import BGHowarts from "./Assets/img/Background-Howarts.jpg";

function App() {
  return (
    <main className="mainView">
       <img src={BGHowarts} className="mainView__background" alt="Howarts"/>
      <div className="mainView__background"></div>
      <FavoritesNav/>
      <SortNav />
    </main>
  );
}

export default App;
