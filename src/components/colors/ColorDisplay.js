import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ background }) => (
  <div style={{
    background,
    width: '100px',
    height: '100px'
  }}></div>
);

ColorDisplay.propTypes = {
  background: PropTypes.string.isRequired
};

export default ColorDisplay;
