import React from 'react';
import characters from '../data/characters';
import { Link } from 'react-router-dom'

function CharacterList(props) {
    return (
        <div>
            <h2>Harry Potter Characters</h2>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterList;