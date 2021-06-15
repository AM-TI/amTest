import React, {useEffect, useState} from 'react'
import { CardsPrint } from './Components/CardsPrint';
import styles from "./scss/Students.module.scss";

export const Students = () =>{
    
    const [students, setPerson] = useState([]);

    useEffect(() => {
        getStudents();
    }, [])
    
    const getStudents = async () => {
        const data = await fetch('http://localhost:3001/students');
        const studentsData = await data.json();
        setPerson(studentsData);
    }
    return (
       
        <div className={styles.dataStudents}>
            {students.map((characters) => (
                <CardsPrint characters={characters}/>
            ))}
            </div>
    )
}