import React from 'react';
import Accordion from './Accordion';
import Footer from './Footer';
const SkillsSection = () => {
    return (
        <section id="habilidades" style={sectionStyle}>
            <h2 style={headingStyle}>Minhas Habilidades</h2>

            {/* Accordion for Programming Languages */}
            <Accordion title="Linguagens de Programação">
                <ul style={listStyle}>
                    <li style={listItemStyle}>JavaScript</li>
                    <li style={listItemStyle}>ASPNet</li>
                    <li style={listItemStyle}>C#</li>
                    <li style={listItemStyle}>PHP</li>
                </ul>
            </Accordion>

            {/* Accordion for Frameworks */}
            <Accordion title="Frameworks">
                <ul style={listStyle}>
                    <li style={listItemStyle}>React.js</li>
                    <li style={listItemStyle}>Node.js</li>
                    <li style={listItemStyle}>Ionic</li>
                    <li style={listItemStyle}>.NET MAUI</li>
                </ul>
            </Accordion>

            {/* Accordion for Databases */}
            <Accordion title="Banco de Dados">
                <ul style={listStyle}>
                    <li style={listItemStyle}>MySQL</li>
                    <li style={listItemStyle}>PostgreSQL</li>
                    <li style={listItemStyle}>SQL Server</li>
                    <li style={listItemStyle}>SQLite</li>
                </ul>
            </Accordion>
            <section style={sectionStyle}>
            <h2 style={headingStyle}>Línguas que Falo</h2>
            <ul style={listStyle}>
                <li style={listItemStyle}>Português (Nativo)</li>
                <li style={listItemStyle}>Inglês (Intermediário)</li>
                <li style={listItemStyle}>japones (Intermediário)</li>
            </ul>
            
        </section>
        </section>
    );
};

// Estilos da seção e listas
const sectionStyle = {
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#1a1a2e',
    borderRadius: '10px',
    maxWidth: '800px',
    color: '#f0f0f0',
    textAlign: 'center',
};

const headingStyle = {
    fontSize: '1.8rem',
    color: '#e94560',
    marginBottom: '20px',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const listItemStyle = {
    fontSize: '1.2rem',
    margin: '10px 0',
};

export default SkillsSection;
