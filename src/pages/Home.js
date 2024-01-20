// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchWizards } from '../services/wizardService';
import CharacterList from '../components/CharacterList';
import SortingHat from '../components/SortingHat';

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
            <SortingHat />
            <h1>Wizard Characters</h1>
            <CharacterList wizards={wizards} />
            <SortingHat />
        </div>
    );
};

export default Home;
