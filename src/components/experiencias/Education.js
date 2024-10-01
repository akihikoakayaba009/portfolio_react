import React from 'react';

const Education = ({ degree, institution, duration }) => {
  return (
    <div style={educationStyle}>
      <h3 style={degreeStyle}>{degree}</h3>
      <h4 style={institutionStyle}>{institution}</h4>
      <p style={durationStyle}>{duration}</p>
    </div>
  );
};

const educationStyle = {
  borderBottom: '1px solid #e94560',
  paddingBottom: '10px',
  marginBottom: '20px',
};

const degreeStyle = {
  fontSize: '1.5rem',
  color: '#e94560',
};

const institutionStyle = {
  fontSize: '1.3rem',
  color: '#f0f0f0',
};

const durationStyle = {
  fontSize: '1.1rem',
  color: '#999',
};

export default Education;
