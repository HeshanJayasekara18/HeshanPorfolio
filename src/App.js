import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes ,Navigate} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
