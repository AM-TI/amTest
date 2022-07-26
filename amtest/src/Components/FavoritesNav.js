import { useState } from "react";
// import { useDispatch } from "react-redux";
import { simulacionCharacters } from "../Redux/Reducers";
import "../Sass/_FavoritesNav.scss";
import bookmarkW from "../Assets/icons/BookMark-W-Fill.svg";
import userAdd from "../Assets/icons/User-fill-add.svg";
import trash from "../Assets/icons/Trash.svg";
// import Luna from "../Assets/icons/luna.png";

export default function FavoritesNav() {
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();

  const fakepers = simulacionCharacters.CharacterFakeData;

  return (
    <>
      <nav className="favoritesNav">
        <button
          className="favoritesNav__btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="favoritesNav__btn__text">FAVORITOS</span>
          <img
            src={bookmarkW}
            className="favoritesNav__btn__icon"
            alt="bookmark"
          />
        </button>

        <button className="favoritesNav__btn">
          <span className="favoritesNav__btn__text">AGREGAR</span>
          <img
            src={userAdd}
            className="favoritesNav__btn__icon"
            alt="bookmark"
          />
        </button>
      </nav>

      <section
        className={
          isOpen === false
            ? "favoritesNav__favorites"
            : "favoritesNav__favorites isActive"
        }
      >
        {fakepers &&
          fakepers.map((persnje) => (
            <div className="favoritesNav__favorites__list" key={persnje.id}>
              <img
                src={persnje.img}
                className="favoritesNav__favorites_list--img"
                alt=" "
              />
              <span className="favoritesNav__favorites_list--name">
               {persnje.characterName}
              </span>
              <img
                src={trash}
                className="favoritesNav__favorites_list--icon"
                alt=""
                // delOneFromFavorites={() => dispatch(delOneFromFavorites(name, true))}
              />
            </div>
          ))}
      </section>
    </>
  );
}
