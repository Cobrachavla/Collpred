// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  background: #121826;
  position: relative;
`;

const FooterTop = styled.div`
  width: 100%;
  height: 45px;
  background: #121826;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterLinks = styled.div`
  width: 459px;
  height: 35px;
  text-align: center;
  color: #FF9C00;
  font-size: 13px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
`;

const FooterMiddle = styled.div`
  width: 100%;
  height: 15px;
  background: #89A4E2;
`;

const FooterBottom = styled.div`
  width: 100%;
  background: #304368;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const FooterLinksSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FooterLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterLinks>
          <a href="#about" style={{ color: '#FF9C00', textDecoration: 'none' }}>About Us</a> | 
          <a href="#contact" style={{ color: '#FF9C00', textDecoration: 'none' }}>Contact Us</a> | 
          <a href="#privacy" style={{ color: '#FF9C00', textDecoration: 'none' }}>Privacy Policy</a>
        </FooterLinks>
      </FooterTop>
      <FooterMiddle />
      <FooterBottom>
        <FooterLinksSection>
          <FooterLinkGroup>
            <h3 style={{ color: 'white' }}>QUICK LINKS</h3>
            <FooterLink href="#">Link 1</FooterLink>
            <FooterLink href="#">Link 2</FooterLink>
            <FooterLink href="#">Link 3</FooterLink>
          </FooterLinkGroup>
          <FooterLinkGroup>
            <h3 style={{ color: 'white' }}>USEFUL URLS</h3>
            <FooterLink href="#">URL 1</FooterLink>
            <FooterLink href="#">URL 2</FooterLink>
            <FooterLink href="#">URL 3</FooterLink>
          </FooterLinkGroup>
          <FooterLinkGroup>
            <h3 style={{ color: 'white' }}>FOLLOW US</h3>
            <SocialMediaIcons>
              <SocialIcon href="#">
                <SocialIconImg src="https://via.placeholder.com/30x30" alt="Facebook" />
              </SocialIcon>
              <SocialIcon href="#">
                <SocialIconImg src="https://via.placeholder.com/30x30" alt="Twitter" />
              </SocialIcon>
              <SocialIcon href="#">
                <SocialIconImg src="https://via.placeholder.com/30x30" alt="Instagram" />
              </SocialIcon>
            </SocialMediaIcons>
          </FooterLinkGroup>
          <FooterLinkGroup>
            <h3 style={{ color: 'white' }}>ENTRANCE EXAMS</h3>
            <FooterLink href="#">Exam 1</FooterLink>
            <FooterLink href="#">Exam 2</FooterLink>
            <FooterLink href="#">Exam 3</FooterLink>
          </FooterLinkGroup>
          <FooterLinkGroup>
            <h3 style={{ color: 'white' }}>CONTACT US</h3>
            <FooterLink href="#">Email: contact@example.com</FooterLink>
            <FooterLink href="#">Phone: 123-456-7890</FooterLink>
          </FooterLinkGroup>
        </FooterLinksSection>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
