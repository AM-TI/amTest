import "../Sass/_FavoritesNav.scss";
import trash from "../Assets/icons/Trash.svg";
export default function FavoriteList({
  favorite,
  deleteToFavorites,
  setIsBtnActive,
}) {
  const{
    image,
    name
  }= favorite;

  const handledeleteToFavs = (name) => {
    // deleteToFavorites(name);
    setIsBtnActive(false);
  };
  

  return (
    <>
      <img
        src={image}
        className="favoritesNav__favorites_list--img"
        alt=" "
      />
      <span className="favoritesNav__favorites_list--name">
        {name}
      </span>
      <img
        src={trash}
        className="favoritesNav__favorites_list--icon"
        alt=""
        onClick={() => handledeleteToFavs(name)}
      />
    </>
  );
}
