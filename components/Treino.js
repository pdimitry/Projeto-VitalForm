import React from 'react';
import styled from 'styled-components';
import imgPeito from '../assets/imagens/imagens-fitness/treinoPeito.jpg';
import imgCostas from '../assets/imagens/imagens-fitness/trienoCostas.jpg';
import imgPerna from '../assets/imagens/imagens-fitness/treinoPerna.jpg';
import imgBiceps from '../assets/imagens/imagens-fitness/treinoBiceps.jpg';
import imgTriceps from '../assets/imagens/imagens-fitness/treinoTriceps.jpg';
import imgOmbro from '../assets/imagens/imagens-fitness/treinoOmbro.jpg';

const Treino = () => {

  const downloadTreino = (tipoTreino) => {
    let treinoContent;

    switch (tipoTreino) {
      case 'peito':
        treinoContent = "Treino de Peito:\n1. Supino Reto - 4x10\n2. Supino Inclinado - 4x10\n3. Crucifixo - 3x12\n4. Crossover - 3x12";
        break;
      case 'costas':
        treinoContent = "Treino de Costas:\n1. Puxada Frontal - 4x10\n2. Remada Curvada - 4x10\n3. Pulldown - 3x12\n4. Levantamento Terra - 3x10";
        break;
      case 'biceps':
        treinoContent = "Treino de Bíceps:\n1. Rosca Direta - 4x10\n2. Rosca Alternada - 4x10\n3. Rosca Martelo - 3x12";
        break;
      case 'triceps':
        treinoContent = "Treino de Tríceps:\n1. Tríceps Pulley - 4x10\n2. Tríceps Testa - 4x10\n3. Mergulho - 3x12";
        break;
      case 'perna':
        treinoContent = "Treino de Perna:\n1. Agachamento Livre - 4x10\n2. Leg Press - 4x10\n3. Cadeira Extensora - 3x12\n4. Cadeira Flexora - 3x12";
        break;
        case 'ombro':
          treinoContent = "Treino de ombro:\n1. Desenvolvimento Maquina - 4x10\n2. Elevação lateral com Halteres - 4x10\n3. Eleveção Frontal na Polia com Corda - 3x12\n4. Crucifixo inverso Máquina - 3x12";
          break;

      default:
        treinoContent = '';
    }

    const blob = new Blob([treinoContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${tipoTreino}-treino.txt`;
    link.click();
  };

  const BackgroundContainer = styled.div`
    background: linear-gradient: #A9B388;
    padding: 50px 50px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  `;

  const Title = styled.h1`
    font-size: 4em;
    color: #333;
    margin-bottom: 10px;
  `;

  const Subtitle = styled.p`
    font-size: 1.2em;
    color: #666;
    margin-bottom: 20px;
  `;

  const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 100px;
  `;

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #28a745;
    width: 310px;
    height: 300px;
  `;

  const Button = styled.button`
    background-color: #5F6F52;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #A9B388;
    }

    &:active {
      background-color: #A9B388;
    }
  `;

  return (
    <BackgroundContainer>
      <Container>
        <Title>Monte seu Treino</Title>
        <Subtitle>Selecione o treino desejado, e receberá seu planejamento de treino</Subtitle>

        <ContainerCards>
          <Card>
            <img width={310} height={280} src={imgPeito} alt="Treino de Peito" />
            <Button onClick={() => downloadTreino('peito')}>Treino de Peito</Button>
          </Card>
          <Card>
            <img width={310} height={280} src={imgCostas} alt="Treino de Costas" />
            <Button onClick={() => downloadTreino('costas')}>Treino de Costas</Button>
          </Card>
          <Card>
            <img width={310} height={280} src={imgBiceps} alt="Treino de Bíceps" />
            <Button onClick={() => downloadTreino('biceps')}>Treino de Bíceps</Button>
          </Card>
          <Card>
            <img width={310} height={280} src={imgTriceps} alt="Treino de Tríceps" />
            <Button onClick={() => downloadTreino('triceps')}>Treino de Tríceps</Button>
          </Card>
          <Card>
            <img width={310} height={280} src={imgPerna} alt="Treino de Perna" />
            <Button onClick={() => downloadTreino('perna')}>Treino de Perna</Button>
          </Card>
          <Card>
            <img width={310} height={280} src={imgOmbro} alt="Treino de Ombro" />
            <Button onClick={() => downloadTreino('ombro')}>Treino de Ombro</Button>
          </Card>
        </ContainerCards>
      </Container>
    </BackgroundContainer>
  );
};

export default Treino;
