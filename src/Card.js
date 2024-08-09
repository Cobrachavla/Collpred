import React from 'react';
import styled from 'styled-components';

// Styled component for the card container
const CardContainer = styled.div`
  width: 272px;
  height: 111px;
  position: absolute;
  background: white;
  border-radius: 22px;
  border: 1px #d5cdcd solid;
`;

// Styled component for the image
const CardImage = styled.img`
  width: 65px;
  height: 69px;
  position: absolute;
  left: 22px;
  top: 17px;
  background: linear-gradient(0deg, #d9d9d9 0%, #d9d9d9 100%);
  border-radius: 8px;
`;

// Styled component for text information
const CardText = styled.div`
  position: absolute;
  left: 98px;
  top: 17px;
  color: black;
  font-family: Judson, sans-serif;
  word-wrap: break-word;
`;

const CardTitle = styled.div`
  font-size: 17px;
  font-weight: 400;
`;

const CardSubtitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`;

const CardButton = styled.div`
  position: absolute;
  left: 179px;
  top: 78px;
  color: #ff9c00;
  font-size: 14px;
  font-family: Judson, sans-serif;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// Card component
const Card = ({ name, location, nirfRank, onApply }) => (
  <CardContainer>
    <CardImage src="https://via.placeholder.com/65x69" alt="University Logo" />
    <CardText>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>{location}</CardSubtitle>
      <CardSubtitle>{`NIRF Rank: ${nirfRank}`}</CardSubtitle>
    </CardText>
    <CardButton onClick={onApply}>APPLY NOW</CardButton>
  </CardContainer>
);

export default Card;
