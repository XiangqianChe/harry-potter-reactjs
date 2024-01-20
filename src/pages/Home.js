// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchWizards } from '../services/wizardService';
import CharacterList from '../components/CharacterList';

const Home = () => {
    const [wizards, setWizards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const wizardData = await fetchWizards();
            setWizards(wizardData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Wizard Characters</h1>
            <CharacterList wizards={wizards} />
        </div>
    );
};

export default Home;
