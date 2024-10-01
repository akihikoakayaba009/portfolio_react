import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home';
import Curriculo from './components/Curriculo';
import SkillsSection from './components/ProgrammingLanguages';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ExperiencesAndEducation from './components/experiencias/ExperiencesAndEducation';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<ExperiencesAndEducation />} />
      </Routes>
      <div style={appStyle}>
      <Footer />
      </div>
    </Router>
  );
};
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '25vg', // Garante que o layout ocupe pelo menos a altura total da tela
};
export default App;
