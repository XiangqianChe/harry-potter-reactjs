// src/pages/WizardPage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useWizardContext } from '../context/WizardContext';
import { fetchWizardById } from '../services/wizardService';
import CharacterDetail from '../components/CharacterDetail';

const WizardPage = () => {
    const { id } = useParams();
    const { setSelectedWizard } = useWizardContext();

    useEffect(() => {
        const fetchWizard = async () => {
            const wizardData = await fetchWizardById(id);
            setSelectedWizard(wizardData);
        };

        fetchWizard();
    }, [id, setSelectedWizard]);

    return (
        <div>
            <h1>Wizard Details</h1>
            <CharacterDetail />
        </div>
    );
};

export default WizardPage;
