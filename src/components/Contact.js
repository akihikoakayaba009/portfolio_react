import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Importando ícones

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <h2 style={headingStyle}>Contato</h2>
      <p style={contactItem}>Email: <a href="mailto:seuemail@example.com" style={linkStyle}>marcoseleandropedroso@gmail.com</a></p>
      <p style={contactItem}>
        <FaLinkedin style={iconStyle} /> 
        <a href="https://www.linkedin.com/in/marcos-eleandro-pedroso-008b78270/" style={linkStyle}>LinkedIn</a>
      </p>
      <p style={contactItem}>
        <FaGithub style={iconStyle} /> 
        <a href="https://github.com/akihikoakayaba009" style={linkStyle}>GitHub</a>
      </p>
      <p style={contactItem}>
        <FaWhatsapp style={iconStyle} /> 
        <a href="https://wa.me/54996073269" style={linkStyle}>WhatsApp</a>
      </p>
    </section>
  );
};

const sectionStyle = {
  padding: '40px',
  textAlign: 'center',
  backgroundColor: '#16213e', // Fundo escuro para manter consistência
  color: '#f0f0f0',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '30px',
  color: '#e94560', // Cor vibrante do título
  fontFamily: 'Arial, sans-serif',
};

const contactItem = {
  fontSize: '1.2rem',
  marginBottom: '15px',
};

const linkStyle = {
  color: '#e94560', // Mesma cor vibrante para os links
  textDecoration: 'none',
  transition: 'color 0.3s',
};

linkStyle[':hover'] = {
  color: '#f0f0f0', // Muda a cor do link ao passar o mouse
};

const iconStyle = {
  marginRight: '10px',
  color: '#e94560', // Cor dos ícones que combina com o tema
  fontSize: '1.5rem',
  verticalAlign: 'middle',
};

export default Contact;
