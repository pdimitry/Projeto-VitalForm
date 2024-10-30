import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nutrição from './pages/nutrição'
import Comunidade from './pages/comunidade';
import Fitness from './pages/fitness';
import Bemestar from './pages/bem estar'
import Footer from './components/footer';
import Login from './components/Login'
import Contato from './pages/pages do footer/contato';
import Serviço from './pages/pages do footer/serviço';
import Sobre from './pages/pages do footer/sobre';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/nutrição" element={<Nutrição/>} />
          <Route path="/comunidade" element={<Comunidade/>} />
          <Route path="/fitness" element={<Fitness/>} />
          <Route path="/bemestar" element={<Bemestar/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="/serviço" element={<Serviço/>} />
          <Route path="/sobre" element={<Sobre/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
