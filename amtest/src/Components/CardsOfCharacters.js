import { useEffect, useState } from "react";
import "../Sass/_CardsOfCharacters.scss";
import BookmarkOutline from "../Assets/icons/BookMark-G-Outine.svg";
import BookmarkFill from "../Assets/icons/BookMark-G-Fill.svg";

export default function CardsOCardsOfCharactersfs({ character,addToFavorites, deleteToFavorites, isBtnActive,}) {

  ///bookmarks agregar o eliminar favorito
  const [isActive, setIsActive] = useState(false);

  const {
    name,
    house,
    image,
    alive,
    hogwartsStudent,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
  } = character;

  const handleAddToFavs = (name) => {
    setIsActive(true);
    addToFavorites(name);
  };

  const handledeleteToFavs = (name) => {
    setIsActive(false);
    deleteToFavorites(name);
  };

  useEffect(() => {
    if (isBtnActive === true) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isBtnActive]);

  return (
    <div key={name} className="card">
      <section className={house ? house : "noneHouse"}>
        <img
          src={image}
          className="card__character-img__image"
          alt="Howarts Character
               "
        />
      </section>

      <section
        className={
          alive === true
            ? "card__character-data --alive"
            : "card__character-data --finado"
        }
      >
        <section className="card__character-data__stats">
          <div className="card__character-data__stats__stat">
            <span>{alive === true ? "VIVO" : "FINADO "}</span> /
            <span>{hogwartsStudent === true ? " ESTUDIANTE" : " STAFF"}</span>
          </div>

          {isActive === false ? (
            <button
              className="card__character-data__stats__bookmark--button"
              onClick={() => handleAddToFavs(name)}
            >
              <img
                src={BookmarkOutline}
                className="card__character-data__stats__bookmark--icon"
                alt="Bookmark"
              />
            </button>
          ) : (
            <button
              className="card__character-data__stats__bookmark--button"
              onClick={() => handledeleteToFavs(name)}
            >
              <img
                src={BookmarkFill}
                className="card__character-data__stats__bookmark--icon"
                alt="Bookmark"
              />
            </button>
          )}
        </section>

        <p className="card__character-data__name">{name}</p>

        <section className="card__character-data__info ">
          <div>
            <span className="card__character-data__info__rule--bold">
              Cumpleaños:{" "}
            </span>
            <span className="card__character-data__info__rule--regular">
              {dateOfBirth}
            </span>
          </div>
          <div>
            <span className="card__character-data__info__rule--bold">
              Género:{" "}
            </span>
            <span className="card__character-data__info__rule--regular">
              {gender}
            </span>
          </div>
          <div>
            <span className="card__character-data__info__rule--bold">
              Color de ojos:{" "}
            </span>
            <span className="card__character-data__info__rule--regular">
              {eyeColour}
            </span>
          </div>
          <div>
            <span className="card__character-data__info__rule--bold">
              Color de pelo:{" "}
            </span>
            <span className="card__character-data__info__rule--regular">
              {hairColour}
            </span>
          </div>
        </section>
      </section>
    </div>
  );
}
