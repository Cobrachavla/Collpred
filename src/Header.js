// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background: var(--color-white);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--gap-xl);
`;

const NavItem = styled.a`
  text-decoration: none;
  color: var(--color-black);
  font-size: var(--font-size-base);
  font-family: var(--font-judson);
  font-weight: 400;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-base);
  background: ${({ primary }) => primary
    ? 'linear-gradient(90deg, #1A2B51 0%, #EC8845 100%)'
    : 'var(--color-black)'
  };
  border-radius: var(--br-7xs);
  color: var(--color-white);
  font-size: var(--font-size-base);
  font-family: var(--font-khula);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <HeaderContainer>
      <Logo src="https://scontent.fpnq7-3.fna.fbcdn.net/v/t39.30808-1/238830465_202230395257405_2774830393324135578_n.png?stp=dst-png_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=06Ogz-rX-t4Q7kNvgF0tPnJ&_nc_ht=scontent.fpnq7-3.fna&oh=00_AYA-5mqHOt1qQ_XaAsHoUnrUK9syCLIxgT0X0FZHlVNw1g&oe=66B83EB0" alt="Logo" />
      <Nav>
        <NavItem onClick={() => navigate('/')}>Home</NavItem>
        <NavItem onClick={() => navigate('/spotround')}>Spot round admission</NavItem>
        <NavItem onClick={() => navigate('/collpred')}>College Predictor</NavItem>
        <NavItem onClick={() => navigate('/Resources')}>Resources</NavItem>
        <NavItem href="#">Contact Us</NavItem>
      </Nav>
      <ButtonContainer>
        {isAuthenticated ? (
          <Button onClick={handleLogout}>
            <span>Logout</span>
          </Button>
        ) : (
          <>
            <Button primary onClick={() => navigate('/signup')}>
              <span>Sign Up</span>
            </Button>
            <Button onClick={() => navigate('/login')}>
              <span>Login</span>
            </Button>
          </>
        )}
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
