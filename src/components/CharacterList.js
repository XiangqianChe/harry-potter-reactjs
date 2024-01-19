import React from 'react';
import characters from '../data/characters';
import { Link } from 'react-router-dom'
import Header from './Header';

function CharacterList(props) {
    return (
        <div>
            <Header />
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