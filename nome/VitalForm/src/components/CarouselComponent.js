import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


import img1 from '../assets/imagens/imagens-carrosel-home/imagem1.jpeg';
import img2 from '../assets/imagens/imagens-carrosel-home/imagem-2.jpeg';
import img3 from '../assets/imagens/imagens-carrosel-home/imagem3.jpeg';

const CarouselComponent = () => (
  <Carousel showThumbs={false} infiniteLoop autoPlay>
    <div>
      <img src={img1} alt="Imagem 1" />
    </div>
    <div>
      <img src={img2} alt="Imagem 2" />
    </div>
    <div>
      <img src={img3} alt="Imagem 3" />
    </div>
  </Carousel>
);

export default CarouselComponent;
