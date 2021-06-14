import React from "react";
import favoriteslist from "./Assets/favoritesList.png";
import add from "./Assets/add.png";
import "./scss/Elements.css";

export const Elements = () => {
  return (
    <>
      <div className="btnfixsed">
        <button className="btnFavorites">
          FAVORITOS  
          <img src={favoriteslist} alt="favoritesList" />
        </button>
        <button className="btnAdd">
          AGREGAR  
          <img src={add} alt="add" />
        </button>
      </div>
    </>
  );
};
