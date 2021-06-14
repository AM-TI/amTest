import React from "react";
import favorites from '../Assets/favorites.png';
import './CartsPrint.scss';

export const CharactersPrint = (props) => {
  
  return (
    <>
      <div>
        <img src={favorites} alt="favorites"/>
        <img src={props.characters.image} alt="person" />
        <div>
          <h1>{props.characters.name}</h1>
          <p>Cumpleaños: {props.characters.dateOfBirth}</p>
          <p>Genero: {props.characters.gender}</p>
          <p>Color de ojos: {props.characters.eyeColour}</p>
          <p>Color de pelo: {props.characters.hairColour}</p>
        </div>
      </div>
    </>
  );
};
