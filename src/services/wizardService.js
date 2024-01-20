// src/services/wizardService.js
const wizardsData = [
    {
        id: 1,
        name: 'Harry Potter',
        house: 'Gryffindor',
        dateOfBirth: 'July 31, 1980',
        wand: '11", Holly, Phoenix feather',
        patronus: 'Stag',
        additionalInfo: 'The Boy Who Lived, defeated the Dark Lord Voldemort.'
    },
    {
        id: 2,
        name: 'Hermione Granger',
        house: 'Gryffindor',
        dateOfBirth: 'September 19, 1979',
        wand: '10.75", Vine, Dragon heartstring',
        patronus: 'Otter',
        additionalInfo: 'One of the brightest witches of her age, helped defeat the Dark Lord.'
    },
    {
        id: 3,
        name: 'Ron Weasley',
        house: 'Gryffindor',
        dateOfBirth: 'March 1, 1980',
        wand: '12", Willow, Unicorn hair',
        patronus: 'Jack Russell Terrier',
        additionalInfo: 'Loyal friend and member of the trio alongside Harry and Hermione.'
    },
    {
        id: 4,
        name: 'Albus Dumbledore',
        house: 'Gryffindor',
        dateOfBirth: 'Summer 1881',
        wand: '15", Elder, Thestral tail hair',
        patronus: 'Phoenix',
        additionalInfo: 'Headmaster of Hogwarts and one of the most powerful wizards of all time.'
    },
    {
        id: 5,
        name: 'Severus Snape',
        house: 'Slytherin',
        dateOfBirth: 'January 9, 1960',
        wand: '13.5", Yew, Phoenix feather',
        patronus: 'Doe',
        additionalInfo: 'Complicated character, played a crucial role in the events at Hogwarts.'
    },
    {
        id: 6,
        name: 'Luna Lovegood',
        house: 'Ravenclaw',
        dateOfBirth: 'February 13, 1981',
        wand: '10.5", Cherry, Unicorn hair',
        patronus: 'Hare',
        additionalInfo: 'Quirky and open-minded, known for her belief in magical creatures.'
    },
    {
        id: 7,
        name: 'Ginny Weasley',
        house: 'Gryffindor',
        dateOfBirth: 'August 11, 1981',
        wand: '11", Yew, Unicorn hair',
        patronus: 'Horse',
        additionalInfo: 'Skilled Quidditch player and member of Dumbledore\'s Army.'
    },
    {
        id: 8,
        name: 'Sirius Black',
        house: 'Gryffindor',
        dateOfBirth: 'November 3, 1959',
        wand: 'Unknown',
        patronus: 'Black dog (Grim)',
        additionalInfo: 'Animagus and Harry Potter\'s godfather.'
    },
    {
        id: 9,
        name: 'Nymphadora Tonks',
        house: 'Hufflepuff',
        dateOfBirth: 'March 30, 1973',
        wand: 'Unknown',
        patronus: 'Werewolf',
        additionalInfo: 'Metamorphmagus and Auror, member of the Order of the Phoenix.'
    },
    {
        id: 10,
        name: 'Fred Weasley',
        house: 'Gryffindor',
        dateOfBirth: 'April 1, 1978',
        wand: 'Unknown',
        patronus: 'Unknown',
        additionalInfo: 'Prankster and co-owner of Weasleys\' Wizard Wheezes.'
    },
    {
        id: 11,
        name: 'Remus Lupin',
        house: 'Gryffindor',
        dateOfBirth: 'March 10, 1960',
        wand: '10.25", Cypress, Unicorn hair',
        patronus: 'Wolf',
        additionalInfo: 'Former Defense Against the Dark Arts professor, member of the Order of the Phoenix.'
    },
    {
        id: 12,
        name: 'Minerva McGonagall',
        house: 'Gryffindor',
        dateOfBirth: 'October 4, 1925',
        wand: '9.5", Fir, Dragon heartstring',
        patronus: 'Cat',
        additionalInfo: 'Transfiguration professor and Head of Gryffindor House, later becomes Hogwarts Headmistress.'
    },
    {
        id: 13,
        name: 'Bellatrix Lestrange',
        house: 'Slytherin',
        dateOfBirth: '1951',
        wand: '12.75", Walnut, Dragon heartstring',
        patronus: 'Unknown',
        additionalInfo: 'Follower of Lord Voldemort, known for her cruelty and skill in the Dark Arts.'
    },
    {
        id: 14,
        name: 'Cedric Diggory',
        house: 'Hufflepuff',
        dateOfBirth: 'September 22, 1977',
        wand: '12.25", Ash, Unicorn hair',
        patronus: 'Unknown',
        additionalInfo: 'Triwizard Tournament champion, tragically killed by Peter Pettigrew.'
    }
];

export default wizardsData;


const fetchWizards = async () => {
    // Mock API call to fetch wizard data
    return wizardsData;
};

const fetchWizardById = async (id) => {
    // Simulate delay for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 500));

    // Find the wizard by ID in the mock data
    const wizard = wizardsData.find(wizard => wizard.id === parseInt(id, 10));

    if (wizard) {
        return wizard;
    } else {
        throw new Error('Wizard not found');
    }
};

export { fetchWizards, fetchWizardById };
