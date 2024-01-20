// src/context/WizardContext.js
import React, { createContext, useContext, useState } from 'react';

const WizardContext = createContext();

const WizardProvider = ({ children }) => {
    const [selectedWizard, setSelectedWizard] = useState(null);

    return (
        <WizardContext.Provider value={{ selectedWizard, setSelectedWizard }}>
            {children}
        </WizardContext.Provider>
    );
};

const useWizardContext = () => {
    return useContext(WizardContext);
};

export { WizardProvider, useWizardContext };
