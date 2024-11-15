import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/imagens/imagens-receitas/1.png';
import img2 from '../assets/imagens/imagens-receitas/2.png';
import img3 from '../assets/imagens/imagens-receitas/3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselReceitas = () => (
  <div>
    <Carousel showThumbs={false} infiniteLoop autoPlay showArrows={false}> 
      <div>
        <img src={img1} alt="Imagem 1" />
        <div className="carousel-caption">
          <h3>Receitas Fáceis</h3>
          <p>
            <Link to="/ReceitasDeProteinas">Proteínas</Link>
            <Link to="/saladaColorida">Salada Colorida</Link>
            <Link to="/frango">Frango Grelhado</Link>
          </p>
        </div>
      </div>
      <div>
        <img src={img2} alt="Imagem 2" />
        <div className="carousel-caption">
          <h3>Opções Saudáveis</h3>
          <p>
            <Link to="/sucoVerde">Suco Verde</Link>
            <Link to="/boloBanana">Bolo de Banana</Link>
            <Link to="/batataDoce">Batata Doce</Link>
          </p>
        </div>
      </div>
      <div>
        <img src={img3} alt="Imagem 3" />
        <div className="carousel-caption">
          <h3>Delícias de Verão</h3>
          <p>
            <Link to="/Iogurte">Iogurte</Link>
            <Link to="/Espaguete">Espaguete de Abobrinha</Link>
            <Link to="/Salmao">Salmão</Link>
          </p>
        </div>
      </div>
    </Carousel>
  </div>
);

export default CarouselReceitas;
