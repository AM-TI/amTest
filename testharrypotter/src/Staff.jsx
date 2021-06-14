import React, {useEffect, useState} from 'react'
import { Btn } from './Components/Btn';
import { CharactersPrint } from './Components/CharactersPrint';

export const Staff = () =>{
    
    const [staff, setPerson] = useState([]);

    useEffect(() => {
        getStaff();
    }, [])
    
    const getStaff = async () => {
        const data = await fetch('http://localhost:3001/staff');
        const staffData = await data.json();
        setPerson(staffData);
    }
    return (
       
        <div>
            
            {staff.map((characters) => (
                <CharactersPrint characters={characters}/>
            ))}
            </div>
    )
}