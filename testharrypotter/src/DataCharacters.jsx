import React, { useState, useEffect } from "react";
import { CardsPrint } from "./Components/CardsPrint";
import styles from "./scss/DataCharacters.module.scss";

export const DataCharacters = () => {
  const [characters, setProducts] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const data = await fetch("http://localhost:3001/characters");
    const charactersData = await data.json();
    setProducts(charactersData);
  };

  return (
    <>
      <div className={styles.data}>
        {characters.map((characters) => (
          <CardsPrint characters={characters} />
        ))}
      </div>
    </>
  );
};
