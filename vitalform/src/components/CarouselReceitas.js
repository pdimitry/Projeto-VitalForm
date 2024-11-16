import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../imagens/imagens-receitas/1.png';
import img2 from '../imagens/imagens-receitas/2.png';
import img3 from '../imagens/imagens-receitas/3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselReceitas = () => (
  <div>
    <Carousel showThumbs={false} infiniteLoop autoPlay showArrows={false} showStatus={false}> 
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
    
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{textAlign: "center" }}>
        A Importância da Nutrição
      </h1>
      <p style={{ textAlign: "center", fontSize: "16px" }}>
        A nutrição desempenha um papel vital em nossa saúde e bem-estar. 
        Uma alimentação equilibrada ajuda a prevenir doenças, melhora a energia 
        e promove o funcionamento adequado do corpo. Escolher os alimentos certos 
        pode aumentar a imunidade, melhorar o humor e garantir uma vida mais longa 
        e saudável. Cada refeição é uma oportunidade de cuidar do seu corpo e mente.
      </p>
      <h2 style={{ marginTop: "20px"}}>Dicas Rápidas:</h2>
      <ul>
        <li>Comece o dia com um café da manhã equilibrado, rico em fibras e proteínas.</li>
        <li>Inclua pelo menos 5 porções de frutas e vegetais ao longo do dia.</li>
        <li>Beba ao menos 2 litros de água diariamente para manter-se hidratado.</li>
        <li>Evite o consumo excessivo de alimentos processados e bebidas açucaradas.</li>
        <li>Prefira grãos integrais como arroz integral, quinoa e aveia.</li>
        <li>Modere o consumo de sal para evitar problemas de pressão alta.</li>
        <li>Inclua fontes de gorduras saudáveis, como azeite de oliva, abacate e castanhas.</li>
        <li>Planeje suas refeições para evitar desperdício e escolhas pouco saudáveis.</li>
        <li>Pratique o mindful eating: coma devagar e aprecie cada refeição.</li>
        <li>Consulte um nutricionista para orientações personalizadas.</li>
      </ul>
    </div>
  </div>
  
);

export default CarouselReceitas;
