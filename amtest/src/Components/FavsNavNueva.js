import { useState } from "react";
import "../Sass/_FavoritesNav.scss";
// import { useDispatch } from "react-redux";
// import {  deleteToFavorites } from "../Redux/Actions";
import bookmarkW from "../Assets/icons/BookMark-W-Fill.svg";
import userAdd from "../Assets/icons/User-fill-add.svg";
import NewRegister from "./NewRegister";
import trash from "../Assets/icons/Trash.svg";

export default function FavoritesNav({
  favorites,
  deleteToFavorites,
  UpdateCharacters,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  // const dispatch = useDispatch();

  // const handledeleteToFavs = (name) => {
  //   dispatch(deleteToFavorites(name))
  // };

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

        <button
          className="favoritesNav__btn"
          onClick={() => setIsOpenForm(!isOpenForm)}
        >
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
        {favorites ? (
          favorites.map((favorite, index) => (
            <div className="favoritesNav__favorites__list" key={index}>
              <img
                src={favorite.image}
                className="favoritesNav__favorites_list--img"
                alt=" "
              />
              <span className="favoritesNav__favorites_list--name">
                {favorite.name}
              </span>
              <img
                src={trash}
                className="favoritesNav__favorites_list--icon"
                alt=""
                // onClick={handledeleteToFavs(favorite.name)}
              />
            </div>
          ))
        ) : (
          <div className="favoritesNav__favorites__list favorites Nav__favorites_list--name">
            Agrega elementos a favoritos
          </div>
        )}
      </section>

      <section
        className={
          isOpenForm === false ? "registerForm__hide" : "registerForm__isActive"
        }
      >
        <NewRegister
          UpdateCharacters={UpdateCharacters}
          setIsOpenForm={setIsOpenForm}
        />
      </section>
    </>
  );
}
