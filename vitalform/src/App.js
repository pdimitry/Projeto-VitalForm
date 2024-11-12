import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header';
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
import CarouselReceitas from './pages/CarouselReceitas';
import Proteinas from './pages/Proteinas'; 
import SaladaColorida from './pages/SaladaColorida';
import Frango from './pages/Frango';
import SucoVerde from './pages/SucoVerde';
import BoloBanana from './pages/BoloBanana';
import BatataDoce from './pages/BatataDoce';
import Iogurte from './pages/Iogurte';
import Espaguete from './pages/Espaguete';
import Salmao from './pages/Salmao';


function App() {
  return (
    <Router>
      <div>
        <header></header>
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
          <Route path="/CarouselReceitas" element={<CarouselReceitas />} />
          <Route path="/proteinas" element={<Proteinas />} />
          <Route path="/saladacolorida" element={<SaladaColorida />} />
          <Route path="/frango" element={<Frango />} />
          <Route path="/sucoverde" element={<SucoVerde />} />
          <Route path="/bolobanana" element={<BoloBanana />} />
          <Route path="/batatadoce" element={<BatataDoce />} />
          <Route path="/iogurte" element={<Iogurte />} />
          <Route path="/espaguete" element={<Espaguete />} />
          <Route path="/salmao" element={<Salmao />} />      
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
