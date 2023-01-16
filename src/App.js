import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />
      <Projects id="projects"/>
      <Skills id="skills"/>
      <Contact id="contact"/>
    </Router>
  );
}

export default App;


//I am a self-motivated person who is willing to go above and beyond on any project, and to learn valuable skills on my own time. I am confident that I will thrive in this position, seeing that I have the skills the oganisation in looking for 
