import { useState } from "react";
import "../Sass/_FavoritesNav.scss";
import bookmarkW from "../Assets/icons/BookMark-W-Fill.svg";
import userAdd from "../Assets/icons/User-fill-add.svg";
import FavoriteList from "./FavoritesList";
import NewRegister from "./NewRegister";


export default function FavoritesNav({
  favorites,
  deleteToFavorites,
  setIsBtnActive,
  UpdateCharacters
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

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

        <button className="favoritesNav__btn"
         onClick={() => setIsOpenForm(!isOpenForm)}>
          <span className="favoritesNav__btn__text">AGREGAR</span>
          <img
            src={userAdd}
            className="favoritesNav__btn__icon"
            alt="bookmark"
          />
        </button>
      </nav>

      <section className={ isOpen === false
            ? "favoritesNav__favorites"
            : "favoritesNav__favorites isActive"
        }
      >
        {favorites ? (
          favorites.map((favorite, index) => ( 
          <div className="favoritesNav__favorites__list" key={index}>
          <FavoriteList 
          key={index}
          favorite={favorite}
          deleteToFavorites={deleteToFavorites}
          setIsBtnActive={setIsBtnActive}  />
          </div>
          ))
        ) : (
          <div className="favoritesNav__favorites__list favoritesNav__favorites_list--name">
            Agrega elementos a favoritos
          </div>
        )}
      </section>


      <section className={ isOpenForm === false ? "registerForm__hide" : "registerForm__isActive" } >
         <NewRegister 
         UpdateCharacters = {UpdateCharacters}
         setIsOpenForm= {setIsOpenForm}
         />
      </section>


    </>
  );
}
