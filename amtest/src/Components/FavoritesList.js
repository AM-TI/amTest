import "../Sass/_FavoritesNav.scss";
import trash from "../Assets/icons/Trash.svg";

export default function FavoriteList({
  key,
  favorite,
  deleteToFavorites,
  setIsBtnActive,
}) {
  const index = key;
  const handledeleteToFavs = (name) => {
    setIsBtnActive(false);
    deleteToFavorites(name);
  };

  return (
    <>
      <img
        src={`${favorite[index].image}`}
        className="favoritesNav__favorites_list--img"
        alt=" "
      />
      <span className="favoritesNav__favorites_list--name">
        {favorite[index].name}
      </span>
      <img
        src={trash}
        className="favoritesNav__favorites_list--icon"
        alt=""
        onClick={() => handledeleteToFavs(favorite[index].name)}
      />
    </>
  );
}
