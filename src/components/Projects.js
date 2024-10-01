import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'aplicacao web ',
      description: 'Aplicação Web Para Gestao de Aulas de Ingles.',
      link: 'silzingles.com',
      image: 'https://i.postimg.cc/RFK2qzLF/chatify.png', // Imagem representando o projeto
    },
    {
      name: 'site pra grafica',
      description: 'Site Pra Uma grafica Local',
      link: 'https://akihikoakayaba009.github.io/site_da_grafica/',
      image: 'https://i.postimg.cc/NGzDrnL7/site-grafica.png', // Imagem representando o projeto
    },
    {
      name: 'Ecommerce',
      description: 'Ecommerce Simples',
      link: 'https://github.com/akihikoakayaba009/ecommerce',
      image: 'https://i.postimg.cc/Sxbpy5D3/SITE-ECOMMERCE.png', // Imagem representando o projeto
    },
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>Projetos</h2>
      <div style={projectGrid}>
        {projects.map((project, index) => (
          <div key={index} style={projectCard}>
            <img 
              src={project.image} 
              alt={`Imagem do ${project.name}`} 
              style={projectImage} 
            />
            <h3 style={projectTitle}>{project.name}</h3>
            <p style={projectDescription}>{project.description}</p>
            <a href={project.link} style={projectLink}>Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '40px',
  textAlign: 'center',
  backgroundColor: '#16213e', // Fundo escuro para combinar com o restante do layout
  color: '#f0f0f0',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '30px',
  color: '#e94560', // Cor vibrante do título
  fontFamily: 'Arial, sans-serif',
};

const projectGrid = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  flexWrap: 'wrap',
};

const projectCard = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  width: '250px',
  backgroundColor: '#1a1a2e', // Fundo escuro dentro do card
  color: '#f0f0f0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s',
};

const projectImage = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '5px',
  marginBottom: '15px',
};

const projectTitle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: '#e94560',
};

const projectDescription = {
  fontSize: '1rem',
  marginBottom: '20px',
};

const projectLink = {
  color: '#e94560',
  textDecoration: 'none',
  fontSize: '1rem',
  border: '1px solid #e94560',
  padding: '10px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

projectCard[':hover'] = {
  transform: 'scale(1.05)',
};

projectLink[':hover'] = {
  backgroundColor: '#e94560',
  color: '#f0f0f0',
};

export default Projects;
