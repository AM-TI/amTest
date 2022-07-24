import "./SortNav.scss";
import navimg from "../../Assets/img/HarryPotter-Logo.svg";

export default function SortNav() {
  return (
    <section className="nav">
      <img src={navimg} className="nav__img" alt="Harry-Potter-Logo"/>
      <p className="nav__text">Selecciona tu filtro</p>

      <section className="nav-btns">
        <button className="nav-btns__filter">ESTUDIANTES</button>
        <button className="nav-btns__filter">STAFF</button>
      </section>
    </section>
  );
};
