import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Container from './components/Container';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container />
      <About />
      <Services />
    </div>
  );
}

export default App;
