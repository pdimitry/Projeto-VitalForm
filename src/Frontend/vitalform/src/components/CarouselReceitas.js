import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/imagens/imagens-receitas/1.png';
import img2 from '../assets/imagens/imagens-receitas/2.png';
import img3 from '../assets/imagens/imagens-receitas/3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselReceitas = () => (
  <div>
    <div style={{
      width: '80%',
      maxWidth: '900px',
      margin: '30px auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Arial', sans-serif",
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5em',
        fontWeight: 'bold',
        color: '#555',
        marginBottom: '20px',
      }}>Dicas De Receitas</h1>
    </div>
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
    >
      <div>
        <img src={img1} alt="Receitas Fáceis" />
        <div className="carousel-caption">
          <h3>Receitas Rápidas</h3>
          <p>
            <Link to="/proteinas" style={{ color: 'black', textDecoration: 'none' }}>Proteínas</Link>
            <Link to="/saladaColorida" style={{ color: 'black', textDecoration: 'none' }}>Salada Colorida</Link>
            <Link to="/frango" style={{ color: 'black', textDecoration: 'none' }}>Frango Grelhado</Link>
          </p>
        </div>
      </div>
      <div>
        <img src={img2} alt="Opções Saudáveis" />
        <div className="carousel-caption">
          <h3>Opções Saudáveis</h3>
          <p>
            <Link to="/sucoVerde" style={{ color: 'black', textDecoration: 'none' }}>Suco Verde</Link>
            <Link to="/boloBanana" style={{ color: 'black', textDecoration: 'none' }}>Bolo de Banana</Link>
            <Link to="/batataDoce" style={{ color: 'black', textDecoration: 'none' }}>Batata Doce</Link>
          </p>
        </div>
      </div>
      <div>
        <img src={img3} alt="Delícias de Verão" />
        <div className="carousel-caption">
          <h3>Delícias de Verão</h3>
          <p>
            <Link to="/Iogurte" style={{ color: 'black', textDecoration: 'none' }}>Iogurte</Link>
            <Link to="/Espaguete" style={{ color: 'black', textDecoration: 'none' }}>Espaguete de Abobrinha</Link>
            <Link to="/Salmao" style={{ color: 'black', textDecoration: 'none' }}>Salmão</Link>
          </p>
        </div>
      </div>
    </Carousel>

    <div
      style={{
        width: "90%",
        maxWidth: "800px",
        margin: "30px auto",
        padding: "30px",
        backgroundColor: "#f0f0f0",
        borderRadius: "15px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "2em", color: "#333" }}>
        A Importância da Nutrição
      </h1>
      <p
        style={{
          fontSize: "1.2em",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Uma boa nutrição é essencial para manter o corpo saudável e prevenir
        doenças. Alimentar-se bem não apenas melhora o bem-estar físico, mas
        também aumenta a energia, fortalece o sistema imunológico e promove a
        saúde mental. Escolher alimentos nutritivos e balanceados é fundamental
        para uma vida plena e equilibrada.
      </p>
      <div
        style={{
          width: "80%",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "1.8em",
            color: "#333",
          }}
        >
          Dicas Rápidas:
        </h2>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            textAlign: "left",
          }}
        >
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Comece o dia com um café da manhã equilibrado, rico em fibras e
            proteínas.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Inclua pelo menos 5 porções de frutas e vegetais ao longo do dia.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Beba ao menos 2 litros de água diariamente para manter-se hidratado.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Evite o consumo excessivo de alimentos processados e bebidas
            açucaradas.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Prefira grãos integrais como arroz integral, quinoa e aveia.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Modere o consumo de sal para evitar problemas de pressão alta.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Inclua fontes de gorduras saudáveis, como azeite de oliva, abacate e
            castanhas.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Planeje suas refeições para evitar desperdício e escolhas pouco
            saudáveis.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Pratique o mindful eating: coma devagar e aprecie cada refeição.
          </li>
          <li style={{ marginBottom: "10px", lineHeight: "1.5", color: "#555" }}>
            Consulte um nutricionista para orientações personalizadas.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default CarouselReceitas;
