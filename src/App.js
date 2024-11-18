import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header';
import Nutrição from './pages/nutrição';
import Comunidade from './pages/comunidade';
import Fitness from './pages/fitness';
import Bemestar from './pages/bem estar';
import Footer from './components/footer';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Contato from './pages/pages do footer/contato';
import Serviço from './pages/pages do footer/serviço';
import Sobre from './pages/pages do footer/sobre';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselReceitas from './components/CarouselReceitas';
import ReceitasDeProteinas from './pages/html das receitas/proteinas';
import SaladaColorida from './pages/html das receitas/saladaColorida';
import FrangoGrelhado from './pages/html das receitas/frango';
import SucoVerde from './pages/html das receitas/sucoVerde';
import BoloDeBanana from './pages/html das receitas/boloBanana';
import BatataDoce from './pages/html das receitas/batataDoce';
import IogurteComFrutas from './pages/html das receitas/iogurte';
import EspagueteDeAbobrinha from './pages/html das receitas/espaguete';
import ReceitaSalmão from './pages/html das receitas/salmão';
import TitleAndFavicon from './components/Title'; 

function App() {
  return (
    <Router>
      <div>
        <TitleAndFavicon />  
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrição" element={<Nutrição />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/bemestar" element={<Bemestar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/serviço" element={<Serviço />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/CarouselReceitas" element={<CarouselReceitas />} />
          <Route path="/proteinas" element={<ReceitasDeProteinas />} />
          <Route path="/saladacolorida" element={<SaladaColorida />} />
          <Route path="/frango" element={<FrangoGrelhado />} />
          <Route path="/sucoverde" element={<SucoVerde />} />
          <Route path="/bolobanana" element={<BoloDeBanana />} />
          <Route path="/batatadoce" element={<BatataDoce />} />
          <Route path="/iogurte" element={<IogurteComFrutas />} />
          <Route path="/espaguete" element={<EspagueteDeAbobrinha />} />
          <Route path="/salmao" element={<ReceitaSalmão />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
