import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
