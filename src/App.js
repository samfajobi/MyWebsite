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
