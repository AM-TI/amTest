import React from 'react';
import style from './Modal.module.scss'

export const Modal = () => {
    return(
        <div id="modal" className={style.modal}>
            <div className={style.modalTwo}>
                <a href="#">X</a>
                <form className={style.modalform}> 
                        <label htmlFor="name">NOMBRE</label>
                        <input type="text"/>
                        <label >CUMPLEAÑOS</label>
                        <input type="text" />
                        <label >COLOR DE OJOS</label>
                        <input type="text" />
                        <label >COLOR DE PELO</label>
                        <input type="text"/>
                        <select>
                                <option  type="radio" name="mujer">Mujer</option>
                                <option type="radio" name="hombre" >Hombre</option>
                                <option  type="radio" name="estudiante">Estudiante</option>
                                <option type="radio" name="staff">Staff</option>
                        </select>
                        <button  className={style.btnSave} type="submit" >Guardar</button>
                    </form>    
                </div>
            </div>
    )
}