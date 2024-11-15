// src/pages/Home.js
import React from 'react';
import './bem estar.css';
import img1 from '../assets/imagens/imagens-bem estar/comidas.jpg';
import img2 from '../assets/imagens/imagens-bem estar/atividade-fisica.jpg';
import img3 from '../assets/imagens/imagens-bem estar/sono de qualidade.jpeg';
import img4 from '../assets/imagens/imagens-bem estar/hábitos-nocivos.webp';
import img5 from '../assets/imagens/imagens-bem estar/controle-de-estresse.jpg';
import img6 from '../assets/imagens/imagens-bem estar/saúde-mental.png';
import img7 from '../assets/imagens/imagens-bem estar/metas-e-objetivos.jpg';



const Bemestar = () => (
    <div className="bemestar">
    <body>
      <h1>Dicas de Bem Estar</h1>
      <div className="container">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card h-100">
              <img src={img1} alt="Imagem 1" />
              <div className="card-body">
                <h2 className="card-title">Alimentação Balanceada</h2>
                <p className="card-text">
                  <ul>
                    <li>Diminua alimentos processados: Prefira alimentos naturais, como frutas, verduras, grãos integrais e proteínas magras.</li>
                    <li>Hidrate-se: Beber ao menos 2 litros de água por dia ajuda a manter o corpo em funcionamento adequado.</li>
                    <li>Controle as porções: Coma de forma equilibrada, priorizando alimentos nutritivos em porções adequadas.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card h-100">
              <img src={img2} alt="Imagem 2" />
              <div className="card-body">
                <h2 className="card-title">Atividade Física</h2>
                <p className="card-text">
                  <ul>
                    <li>Incorpore exercícios na rotina: Caminhadas, musculação, ioga ou esportes ajudam a manter o corpo ativo, melhorando o condicionamento físico e mental.</li>
                    <li>Movimente-se mais durante o dia: Use as escadas em vez do elevador, caminhe em vez de usar o carro para trajetos curtos, e alongue-se regularmente.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card h-100">
              <img src={img3} alt="Imagem 3" />
              <div className="card-body">
                <h2 className="card-title">Sono De Qualidade</h2>
                <p className="card-text">
                  <ul>
                    <li>Durma de 7 a 8 horas por noite: O sono reparador regula o metabolismo, melhora a disposição e contribui para o equilíbrio emocional.</li>
                    <li>Desconecte-se antes de dormir: Evite o uso de telas (celulares, TVs, etc.) antes de dormir para facilitar o relaxamento.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
  
          {/* Card 4 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card h-100">
              <img src={img4} alt="Imagem 4" />
              <div className="card-body">
                <h2 className="card-title">Redução de Hábitos Nocivos</h2>
                <p className="card-text">
                  <ul>
                    <li>Evite o consumo excessivo de álcool e cigarro: Essas substâncias prejudicam a saúde física e mental.</li>
                    <li>Reduza o consumo de açúcar e alimentos ricos em gordura saturada: Eles aumentam o risco de doenças e prejudicam a saúde geral.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
  
          {/* Card 5 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card h-100">
              <img src={img5} alt="Imagem 5" />
              <div className="card-body">
                <h2 className="card-title">Controle de Estresse</h2>
                <p className="card-text">
                  <ul>
                    <li>Pratique meditação ou respiração consciente: Essas técnicas reduzem o estresse e ajudam a acalmar a mente, promovendo maior foco e bem-estar.</li>
                    <li>Gerencie o tempo: Organize suas tarefas para evitar sobrecarga e estresse, priorizando o que é mais importante.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
  
          {/* Card 6 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card h-100">
              <img src={img6} alt="Imagem 6" />
              <div className="card-body">
                <h2 className="card-title">Cuidar da Saúde Mental</h2>
                <p className="card-text">
                  <ul>
                    <li>Mantenha relacionamentos saudáveis: Interações sociais positivas contribuem para o bem-estar emocional e reduzem o isolamento.</li>
                    <li>Reserve tempo para si mesmo: Ter momentos de lazer e relaxamento é fundamental para o equilíbrio mental.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
  
          {/* Último Card */}
<div className="col-md-12 d-flex mb-4">
    <div className="card h-100 last-card">
        <div className="card-content d-flex">
            <img src={img7} alt="Imagem 7" className="card-image" />
            <div className="card-body">
                <h2 className="card-title">Estabeleça metas realistas</h2>
                <p className="card-text">
                    <ul>
                        <li>Faça mudanças graduais: Pequenos passos como melhorar a alimentação, fazer exercícios ou dormir mais podem ser mais eficazes e duradouros do que mudanças bruscas.</li>
                        <li>Celebre as conquistas: Valorize os progressos, por menores que sejam, para manter a motivação e o foco em seus objetivos.</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
</div>
        </div>
      </div>
    </body>
  </div>
  
 
);

export default Bemestar;
