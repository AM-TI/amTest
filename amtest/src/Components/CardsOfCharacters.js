import "../Sass/_CardsOfCharacters.scss";
import BookmarkOutline from "../Assets/icons/BookMark-G-Outine.svg";
// import BookmarkFill from "../Assets/icons/BookMark-G-Fill.svg";

export default function CardsOfs({ character, setCharacter, addToFavorites }) {
  const {
    name,
    house,
    image,
    alive,
    finado,
    hogwartsStudent,
    hogwartsStaff,
    dateOfBirth,
    gender,
    eyeColour,
    hairColour,
  } = character;

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

            <button
              className="card__character-data__stats__bookmark--button"
              onClick={() => {
                setCharacter(`${name}`);
                // dispatch(addToFavorites(`${name}`))
              }}
            >
              <img
                src={BookmarkOutline}
                className="card__character-data__stats__bookmark--icon"
                alt="Bookmark"
              />

              {/* { isOpen === false ? 
              <img  src= {BookmarkOutline} className="card__character-data__stats__bookmark--icon" alt="Bookmark"/>
              : <img  src= {BookmarkFill} className="card__character-data__stats__bookmark--icon" alt="Bookmark"/>} */}
            </button>
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
