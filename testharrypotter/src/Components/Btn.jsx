import React from 'react'
import { useHistory } from 'react-router-dom'

export const Btn = () => {
    let history = useHistory();

    function handleClickStaff() {
        history.push('/staff');
    }
    function handleClickStudents() {
        history.push('/students');
    }
    return (
        <div>
            <button onClick = {handleClickStaff}>Staff</button>
            <button onClick = {handleClickStudents}>estudiantes</button>
        </div>
    )
}