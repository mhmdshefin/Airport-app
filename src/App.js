import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import FAQ from './components/FAQ';

function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/service" element={<Service/>}/>
  <Route path="/faq" element={<FAQ/>}/>
</Routes>
</BrowserRouter>




  );
}

export default App;
