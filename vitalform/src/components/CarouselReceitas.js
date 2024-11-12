import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/imagens/imagens-receitas/1.png';
import img2 from '../assets/imagens/imagens-receitas/2.png';
import img3 from '../assets/imagens/imagens-receitas/3.png';
const CarouselReceitas = () => (
  <Carousel showThumbs={false} infiniteLoop autoPlay>
    <div>
      <img src={img1} alt="Imagem 1" />
      <div class="carousel-caption d-none d-md-block">
                <h3>Modo de preparo</h3>
                <p>
                <Link to="/proteinas">Proteínas</Link>
                <Link to="/saladaColorida">Salada Colorida</Link>
                <Link to="/frango">Frango Grelhado</Link>
                </p>
      </div>
    </div>
    <div>
      <img src={img2} alt="Imagem 2" />
      <div class="carousel-caption d-none d-md-block">
          <h3>Modo de preparo</h3>
          <p>
            <Link to="/sucoVerde">Suco Verde</Link>
            <Link to="/boloBanana">Bolo de Banana</Link>
            <Link to="/batataDoce">Batata Doce</Link>
          </p>
      </div>
    </div>
    <div>
      <img src={img3} alt="Imagem 3" />
      <div class="carousel-caption d-none d-md-block">
          <h3>Modo de preparo</h3>
          <p>
            <Link to="/Iogurte">Iogurte</Link>
            <Link to="/Espaguete">Espaguete de Abobrinha</Link>
            <Link to="/Salmao">Salmão</Link>
          </p>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Próximo</span>
    </button>
    </div>
  </Carousel>
);

export default CarouselReceitas;
