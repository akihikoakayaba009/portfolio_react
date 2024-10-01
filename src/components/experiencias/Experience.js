import React from 'react';

const Experience = ({ role, company, duration, description }) => {
  return (
    <div style={experienceStyle}>
      <h3 style={roleStyle}>{role}</h3>
      <h4 style={companyStyle}>{company}</h4>
      <p style={durationStyle}>{duration}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

const experienceStyle = {
  borderBottom: '1px solid #e94560',
  paddingBottom: '10px',
  marginBottom: '20px',
};

const roleStyle = {
  fontSize: '1.5rem',
  color: '#e94560',
};

const companyStyle = {
  fontSize: '1.3rem',
  color: '#f0f0f0',
};

const durationStyle = {
  fontSize: '1.1rem',
  color: '#999',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#f0f0f0',
  textAlign: 'justify',
};

export default Experience;
