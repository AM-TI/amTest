import React, {useState, useEffect}from 'react'
import { CharactersPrint } from './Components/CharactersPrint';
import { Btn } from './Components/Btn';

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
        <> <div>
            <Btn />
            {characters.map((characters) => (
                <CharactersPrint characters={characters}/>
            ))}
            </div>
        </>
    );
    
}
