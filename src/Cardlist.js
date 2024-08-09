import React from 'react';
import Card from './Card'; // Adjust the import path as necessary

const CardList = ({ universities = [] }) => (
  <div style={{ width: '1175px', height: '267px', position: 'absolute', left: '50px', top: '839px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {universities.map((university, index) => (
      <Card
        key={index}
        name={university.name}
        location={university.location}
        nirfRank={university.nirfRank}
        onApply={() => console.log(`Applying to ${university.name}`)}
      />
    ))}
  </div>
);

export default CardList;
