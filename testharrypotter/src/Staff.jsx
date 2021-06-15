import React, {useEffect, useState} from 'react'
import styles from "./scss/Staff.module.scss";
import { CardsPrint } from './Components/CardsPrint';

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
       
        <div className={styles.dataStaff}>
            
            {staff.map((characters) => (
                <CardsPrint characters={characters}/>
            ))}
            </div>
    )
}