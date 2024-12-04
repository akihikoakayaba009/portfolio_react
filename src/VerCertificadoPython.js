import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const certificadoPython = () => {
  return (
    <section id="certificadoPython" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Certificado</h2>
        <p>Confira meu Certificado abaixo ou faça o download:</p>
        
        
        <iframe 
          src="/certificado_Python.pdf" 
          style={iframeStyle} 
          title="Visualizar Certificado" 
          frameBorder="0"
        />
        
      
        <a 
          href="/certificado_python.pdf" 
          download="certificado_Python.pdf.pdf" 
          style={downloadButtonStyle}
        >
          <FaFileDownload style={iconStyle} /> Baixar Certificado
        </a>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '60px 20px',
  backgroundColor: '#f7f7f7',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
};

const iframeStyle = {
  width: '100%',
  height: '500px',
  border: '1px solid #ccc',
  marginBottom: '20px',
};

const downloadButtonStyle = {
  display: 'inline-block',
  backgroundColor: '#e94560',
  color: '#fff',
  padding: '10px 20px',
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
};

const iconStyle = {
  marginRight: '8px',
};

downloadButtonStyle.hover = {
  backgroundColor: '#d33f5b',
};

export default certificadoPython;
