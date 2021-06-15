import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Btn.module.scss'

export const Btn = () => {
    let history = useHistory();

    function handleClickStaff() {
        history.push('/staff');
    }
    function handleClickStudents() {
        history.push('/students');
    }
    return (
        <div className={styles.btnS}>
            <button onClick = {handleClickStudents}>ESTUDIANTES</button>
            <button onClick = {handleClickStaff}>STAFF</button>
        </div>
    )
}