import React from "react";
import favorites from "../Assets/favorites.png";
import styles from "./CardsPrint.module.scss";

export const CardsPrint = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.pic}>
          <img src={props.characters.image} alt="person" />
        </div>
        <div className={styles.profileData}>
          <img src={favorites} alt="favorites" />
          <h1>{props.characters.name}</h1>
          <div className={styles.leters}>
            <p>Cumpleaños: {props.characters.dateOfBirth}</p>
            <p>Genero: {props.characters.gender}</p>
            <p>Color de ojos: {props.characters.eyeColour}</p>
            <p>Color de pelo: {props.characters.hairColour}</p>
          </div>
        </div>
      </div>
    </>
  );
};
