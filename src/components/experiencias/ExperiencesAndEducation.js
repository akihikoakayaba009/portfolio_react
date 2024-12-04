import React from 'react';
import Experience from './Experience';
import Education from './Education';
import { FaFileDownload } from 'react-icons/fa';


const ExperiencesAndEducation = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Experiências</h2>
      
        <Experience
          role="Auxiliar de Projetista"
          company="Pavan carrocerias"
          duration="Outubro 2024 -  Atual"
          description="detalhamento das montagens e das pecas no sofware solid works montagens de menor nivel controle de lancamentos de pedidos de estoque de vendas e de orcamentos "
        />
          <Experience
          role="Desenvolvedor Mobile Senior"
          company="SHM Tech"
          duration="Abril 2024 - Setembro 2024"
          description="Desenvolvimento de aplicações em C#, suporte técnico e manutenção de sistemas."
        />
        <Experience
          role="Operador Maquinário"
          company="Pasinado"
          duration="Janeiro 2023 - Fevereiro 2024"
          description="Controle de estoque e despache, operador de empilhadeira."
        />
         <Experience
          role="Auxiliar Administrativo"
          company="Concrerodo"
          duration="Janeiro 2020 - Janeiro 2021"
          description="Emissao de notas, controle de gastos da parte de logistica,e afins necessarios da parte administrativa."
        />
        <h2 style={headingStyle}>Formações</h2>
        <Education
          degree="Bacharelado Analise E desenvolvimento de sistemas"
          institution="Universidade De Passo Fundo"
          duration="2023 - Em Andamento"
        /> <a 
        href="/andamento_faculdade" 
      
        style={downloadButtonStyle}
      >
        <FaFileDownload style={iconStyle} /> Ver Andamento
      </a>
         <Education
          degree="Programação em python do basico ao avançado"
          institution="udemy"
          duration="63.5 total hours"
          
        />
         <a 
          href="/certificado_python" 
        
          style={downloadButtonStyle}
        >
          <FaFileDownload style={iconStyle} /> Ver Certificado
        </a>
        <Education
          degree="Controles DevExpress para Asp.Net WebForms"
          institution="udemy"
          duration="3 total hours"
          
        />
         <a 
          href="/CertificadoDevExpress" 
          style={downloadButtonStyle}
        >
          <FaFileDownload style={iconStyle} /> Ver Certificado
        </a>
       
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '60px 20px',
  backgroundColor: '#16213e', // Fundo escuro para contraste
  color: '#f0f0f0',
  minHeight: '100vh',
};

const containerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
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
const headingStyle = {
  fontSize: '2rem',
  marginBottom: '30px',
  color: '#e94560',
  textAlign: 'center',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
};

export default ExperiencesAndEducation;
