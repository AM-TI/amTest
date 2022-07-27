import "../Sass/_SortNav.scss";
import navimg from "../Assets/img/HarryPotter-Logo.svg";

export default function SortNav({ rol, setRol }) {
  return (
    <section className="nav">
      <img src={navimg} className="nav__img" alt="Harry-Potter-Logo" />
      <p className="nav__text">Selecciona tu filtro</p>

      <section className="nav__btns">
        <button
          className={
            rol === "hogwartsStudent"
              ? "nav__btns__filter--active"
              : "nav__btns__filter"
          }
          onClick={() => setRol("hogwartsStudent")}
        >
          ESTUDIANTES
        </button>
        <button
          className={
            rol === "hogwartsStaff"
              ? "nav__btns__filter--active"
              : "nav__btns__filter"
          }
          onClick={() => setRol("hogwartsStaff")}
        >
          STAFF
        </button>
      </section>
    </section>
  );
}
