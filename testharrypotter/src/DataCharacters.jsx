import React, {useState, useEffect}from 'react'
import { CharactersPrint } from './Components/CharactersPrint';

export const DataCharacters = () => {

    const [characters, setProducts] = useState([]);

    useEffect(() => {
        getCharacters();
    }, [])
    
    const getCharacters = async () => {
        const data = await fetch('http://localhost:3001/characters');
        const charactersData = await data.json();
        setProducts(charactersData);
    }


    return(
        <>
            <div>
            {characters.map((characters) => (
                <CharactersPrint characters={characters}/>
            ))}
            </div>
        </>
    );
    
}
