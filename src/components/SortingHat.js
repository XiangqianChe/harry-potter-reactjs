// SortingHat.js
import React, { useState } from 'react';
import './SortingHat.css';

const SortingHat = () => {
    const [sortingHatState, setSortingHatState] = useState('idle');
    const [selectedHouse, setSelectedHouse] = useState(null);

    const handleSortingHatClick = () => {
        setSortingHatState('sorting');
        // Simulate the sorting process with a delay
        setTimeout(() => {
            // Replace this with your actual logic to determine the house
            const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
            const randomIndex = Math.floor(Math.random() * houses.length);
            const newlySelectedHouse = houses[randomIndex];

            setSelectedHouse(newlySelectedHouse);
            setSortingHatState(`sorted-${newlySelectedHouse.toLowerCase()}`);
        }, 3000); // Adjust the delay as needed
    };

    return (
        <div className={`sorting-hat ${sortingHatState}`} onClick={handleSortingHatClick}>
            {sortingHatState === 'sorting' ? (
                <div>Sorting...</div>
            ) : sortingHatState.startsWith('sorted') ? (
                <div>
                    Sorted into {selectedHouse}!
                    {/* You can add more details or celebratory effects here */}
                </div>
            ) : (
                <div>Click the Sorting Hat</div>
            )}
        </div>
    );
};

export default SortingHat;
