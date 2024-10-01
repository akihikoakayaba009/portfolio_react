import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
          <li style={liStyle}><Link to="/skills" style={linkStyle}>Skills</Link></li>
          <li style={liStyle}><Link to="/curriculo" style={linkStyle}>Currículo</Link></li>
            <li style={liStyle}><Link to="/projects" style={linkStyle}>Projetos</Link></li>
            <li style={liStyle}><Link to="/Experience" style={linkStyle}>Experiências</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#1a1a2e',
  padding: '10px',
  textAlign: 'center',
};

const navStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  margin: '0 20px',
};

const linkStyle = {
  color: '#f0f0f0',
  textDecoration: 'none',
  fontSize: '1.2rem',
};

export default Header;
