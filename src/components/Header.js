import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
`;

const Header = () => (
    <HeaderContainer>
        <h1>Harry Potter Universe</h1>
    </HeaderContainer>
);

export default Header;