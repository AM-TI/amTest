import { useState } from "react";
import "../Sass/_NewRegister.scss";
import close from "../Assets/icons/Close.svg";

export default function NewRegister({ setIsOpenForm }) {

  const [formToRegister, setFormToRegister] = useState({
    id: '',
    image: "https://i.pinimg.com/564x/be/19/ff/be19ff0cdedebf65411f92affbe9e6eb.jpg",
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    hogwartsStaff: false,
    hogwartsStudent: false,
    alive: true
  });
  
  const PostUpdateJson = () => {
    let charactersUrl = "http://localhost:4000/characters";
    fetch(charactersUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formToRegister),
    }).then((response) => response.json() )
    .then(() => console.log("posteado"));
  };

  const handleUpdateForm = (e) => {
    ////Camb ios en los inputs
    setFormToRegister({ ...formToRegister, [e.target.name]: e.target.value });
    ////Camb ios en los radio butons ( propiedades boleanas)
    if (e.target.value === "Estudiante") {
      setFormToRegister({
        ...formToRegister,
        hogwartsStudent: e.target.checked,
        hogwartsStaff: false,
      });
    } else if (e.target.value === "staff") {
      setFormToRegister({
        ...formToRegister,
        hogwartsStudent: false,
        hogwartsStaff: e.target.checked,
      });
    }
  };
  //envia la data a el post
  const handleSubmit = async (e) => {
    await PostUpdateJson();
  };

  return (
    <section className="FormRegister">
      <section className="FormRegister__Header">
        <p className="FormRegister__Header__title">Agrega un personaje</p>
        <button
          className="FormRegister__Header__close"
          onClick={() => setIsOpenForm(false)}
        >
          <img className="FormRegister__Header__close__icon" src={close} alt="close" />
        </button>
      </section>

      <form
        className="FormRegister__Form"
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <section className="FormRegister__Form__inputs">
          <div className="FormRegister__Form__inputs__Section">
            <div className="FormRegister__Form__inputs__Section__group">
              <label className="FormRegister__Form__inputs__Section__group__label">
                NOMBRE
              </label>
              <input
                className="FormRegister__Form__inputs__Section__group__input"
                name="name"
                type="text"
                onChange={handleUpdateForm}
              />
            </div>
            <div className="FormRegister__Form__inputs__Section__group">
              <label className="FormRegister__Form__inputs__Section__group__label">
                CUMPLEAÑOS
              </label>
              <input
                className="FormRegister__Form__inputs__Section__group__input"
                name="dateOfBirth"
                type="date"
                onChange={handleUpdateForm}
              />
            </div>
          </div>

          <div className="FormRegister__Form__inputs__Section">
            <div className="FormRegister__Form__inputs__Section__group">
              <label className="FormRegister__Form__inputs__Section__group__label">
                COLOR DE OJOS
              </label>
              <input
                className="FormRegister__Form__inputs__Section__group__input"
                name="eyeColour"
                type="text"
                onChange={handleUpdateForm}
              />
            </div>
            <div className="FormRegister__Form__inputs__Section__group">
              <label className="FormRegister__Form__inputs__Section__group__label">
                COLOR DE PELO
              </label>
              <input
                className="FormRegister__Form__inputs__Section__group__input"
                name="hairColour"
                type="text"
                onChange={handleUpdateForm}
              />
            </div>
          </div>
        </section>

        <section className="FormRegister__Form__checks">
          <div className="FormRegister__Form__checks__Section2">
            <label className="FormRegister__Form__checks__Section2__label">
              GÉNERO
            </label>
            <div className="FormRegister__Form__checks__Section2__group">
              <input
                className="FormRegister__Form__checks__Section2__group__radio"
                type="radio"
                name="gender"
                value="Female"
                onChange={handleUpdateForm}
              />
              <p className="FormRegister__Form__checks__Section2__group__radio__label">
                Mujer
              </p>
              <input
                className="FormRegister__Form__checks__Section2__group__radio"
                type="radio"
                name="gender"
                value="Male"
                onChange={handleUpdateForm}
              />
              <p className="FormRegister__Form__checks__Section2__group__radio__label">
                Hombre
              </p>
            </div>
          </div>

          <div className="FormRegister__Form__checks__Section2">
            <label className="FormRegister__Form__checks__Section2__label">
              POSICIÓN{" "}
            </label>
            <div className="FormRegister__Form__checks__Section2__group">
              <input
                className="FormRegister__Form__checks__Section2__group__radio"
                type="radio"
                name="hogwartsStudent"
                value="Estudiante"
                onChange={handleUpdateForm}
              />
              <p className="FormRegister__Form__checks__Section2__group__radio__label">
                Estudiante
              </p>
              <input
                className="FormRegister__Form__checks__Section2__group__radio"
                type="radio"
                name="hogwartsStaff"
                value="staff"
                onChange={handleUpdateForm}
              />
              <p className="FormRegister__Form__checks__Section2__group__radio__label">
                Staff
              </p>
            </div>
          </div>
        </section>

        <div className="FormRegister__Form__inputFile">
          <p className="FormRegister__Form__inputFile__label">FOTOGRAFIA</p>
          <input type="file" name="file" id="file" />
        </div>

        <button className="FormRegister__Form__button">GUARDAR</button>
      </form>
    </section>
  );
}