import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Container from './components/Container';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container />
      <About />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
