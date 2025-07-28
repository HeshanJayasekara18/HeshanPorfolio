import logo from './logo.svg';
import './App.css';
import { HashRouter,BrowserRouter, Route ,Routes ,Navigate} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contactpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
