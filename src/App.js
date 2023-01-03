import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Home />
      <Projects id="projects"/>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
