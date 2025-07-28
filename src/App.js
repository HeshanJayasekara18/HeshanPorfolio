import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contactpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;