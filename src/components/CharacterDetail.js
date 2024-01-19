import React from 'react';
import { useParams } from 'react-router-dom';
import characters from '../data/characters';

function CharacterDetail() {
    const { id } = useParams();
    const character = characters.find((character) => character.id === parseInt(id));

    if (!character) {
        return <div>Character not found!</div>;
    }
    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <p>House: {character.house}</p>
        </div>
    );
}

export default CharacterDetail;