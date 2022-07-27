import "../Sass/_FavoritesNav.scss";
import bookmarkW from "../Assets/icons/BookMark-W-Fill.svg";
import userAdd from "../Assets/icons/User-fill-add.svg";

export default function FavoritesNav() {
  return (
    <section className="favoritesNav">
      <button className="favoritesNav__btn">
        <span className="favoritesNav__btn__text">FAVORITOS</span>
        <img
          src={bookmarkW}
          className="favoritesNav__btn__icon"
          alt="bookmark"
        />
      </button>

      <button className="favoritesNav__btn">
        <span className="favoritesNav__btn__text">AGREGAR</span>
        <img src={userAdd} className="favoritesNav__btn__icon" alt="bookmark" />
      </button>
    </section>
  );
}
