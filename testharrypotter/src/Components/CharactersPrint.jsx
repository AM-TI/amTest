import React from "react";

export const CharactersPrint = (props) => {
  
  return (
    <>
      <div>
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
