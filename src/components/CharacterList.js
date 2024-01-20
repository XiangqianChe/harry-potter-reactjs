// src/components/CharacterList.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WizardList = styled.ul`
  list-style: none;
  padding: 0;
`;

const WizardListItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
`;

const WizardLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CharacterList = ({ wizards }) => (
    <WizardList>
        {wizards.map(wizard => (
            <WizardListItem key={wizard.id}>
                <WizardLink to={`/characters/${wizard.id}`}>{wizard.name}</WizardLink>
            </WizardListItem>
        ))}
    </WizardList>
);

export default CharacterList;
