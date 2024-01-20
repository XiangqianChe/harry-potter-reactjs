// src/components/Header.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const NavigationLink = styled(Link)`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
    <HeaderContainer>
        <h1>Wizardpedia</h1>
        <nav>
            <NavigationLink to="/">Home</NavigationLink>
        </nav>
    </HeaderContainer>
);

export default Header;
