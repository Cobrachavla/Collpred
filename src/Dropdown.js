import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, style, placeholder }) => {
  return (
    <div style={{ ...style, position: 'relative' }}>
      <select
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'none',
          appearance: 'none',
          color: 'white',
          padding: '10px',
          fontSize: 'inherit',
          fontFamily: 'inherit',
          fontWeight: 'inherit'
        }}
        defaultValue=""
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          border: '2px solid white',
          width: '7.25px',
          height: '14.50px',
          transformOrigin: '0 0',
          rotate: '-90deg'
        }}
      />
    </div>
  );
};

Dropdown.defaultProps = {
  options: [],
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  style: PropTypes.object,
  placeholder: PropTypes.string,
};

export default Dropdown;
