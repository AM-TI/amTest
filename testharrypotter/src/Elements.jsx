import React from "react";
import favoriteslist from "./Assets/favoritesList.png";
import add from "./Assets/add.png";
import style from './scss/Elements.module.scss';

export const Elements = () => {
  return (
    <>
      <div className={style.btnfixsed}>
        <button className={style.btnFavorites} >
          FAVORITOS  
          <img src={favoriteslist} alt="favoritesList" />
        </button>
        <button className={style.btnAdd}>
          AGREGAR  
          <img src={add} alt="add" />
        </button>
      </div>
    </>
  );
};
