import React, {useEffect, useState} from 'react'
import { Btn } from './Components/Btn';
import { CharactersPrint } from './Components/CharactersPrint';

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
       
        <div>
            {students.map((characters) => (
                <CharactersPrint characters={characters}/>
            ))}
            </div>
    )
}