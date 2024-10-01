import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'; // Certifique-se de ter o pacote react-bootstrap instalado
import Type from './Type'; // Importe o componente Type, ajuste o caminho conforme necessário
import galaxyBackground from './../assets/projetos/galaxy.webp'; // Importe a imagem de fundo de galáxia

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = ``;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 50; // Velocidade de digitação em milissegundos

    const typeText = () => {
      if (index < fullText.length) {
        setDisplayText(prevText => prevText + fullText[index]);
        index++;
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText();

    // Limpeza do efeito: resetando o estado quando o componente é desmontado
    return () => {
      index = fullText.length;
    };
  }, [fullText]);

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 style={headingStyle}>
              Olá!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 style={headingStyle}>
              EU SOU <strong className="main-name">MARCOS PEDROSO</strong>
            </h1>
            <div style={typewriterContainerStyle}>
              <Type />
            </div>
            <p style={paragraphStyle}>
              {displayText}
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '60px 20px',
  textAlign: 'center',
  backgroundImage: `url(${galaxyBackground})`, // Define a imagem de fundo
  backgroundSize: 'cover', // Garante que a imagem cubra toda a área
  backgroundPosition: 'center', // Centraliza a imagem
  backgroundAttachment: 'fixed', // Fixa o fundo para criar um efeito de paralaxe
  color: '#f0f0f0', // Texto em cor clara
  minHeight: '100vh', // Garante que a seção ocupa pelo menos a altura da tela
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const containerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '20px',
  color: '#e94560', // Cor vibrante usada no título do header
  fontFamily: 'Arial, sans-serif',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Sombra para destaque
};

const typewriterContainerStyle = {
  padding: '20px',
  textAlign: 'left',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  fontFamily: 'Arial, sans-serif',
  color: '#f0f0f0', // Mantém o texto em branco para boa legibilidade
  whiteSpace: 'pre-line', // Preserva espaços e quebras de linha no texto
  textAlign: 'justify', // Justifica o texto para um alinhamento mais elegante
};

export default About;
