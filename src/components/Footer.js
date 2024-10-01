import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Importando ícones

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={footerLinksStyle}>
          <div style={linkWrapperStyle}>
            <FaLinkedin style={iconStyle} />
            <a href="https://www.linkedin.com/in/marcos-eleandro-pedroso-008b78270/" style={linkStyle}>
              LinkedIn
            </a>
          </div>

          <div style={linkWrapperStyle}>
            <FaGithub style={iconStyle} />
            <a href="https://github.com/akihikoakayaba009" style={linkStyle}>
              GitHub
            </a>
          </div>

          <div style={linkWrapperStyle}>
            <FaWhatsapp style={iconStyle} />
            <a href="https://wa.me/54996073269" style={linkStyle}>
              WhatsApp
            </a>
          </div>
        </div>
        <p style={footerTextStyle}>&copy; 2024 Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#1a1a2e', // Mesma cor do header para consistência
  color: '#f0f0f0',
  padding: '20px 0',
  textAlign: 'center',
  borderTop: '4px solid #e94560', // Destaque semelhante ao header
};

const footerContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const footerLinksStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '15px',
};

const linkWrapperStyle = {
  display: 'flex',
  alignItems: 'center', // Alinha o ícone e o link verticalmente
  margin: '0 15px',
};

const linkStyle = {
  color: '#f0f0f0',
  textDecoration: 'none',
  marginLeft: '8px', // Distância entre o ícone e o texto do link
  fontSize: '1.2rem',
  transition: 'color 0.3s',
};

const iconStyle = {
  fontSize: '1.5rem', // Tamanho ajustado do ícone
};

const footerTextStyle = {
  fontSize: '0.9rem',
  color: '#aaa',
};

export default Footer;
