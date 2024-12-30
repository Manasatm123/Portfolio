import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from "./components/Skill";
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      
    </div>
  );
};

export default App;

