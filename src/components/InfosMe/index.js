/* eslint-disable max-len */
import { SlDiamond } from 'react-icons/sl';
import { GiQueenCrown, GiStrikingArrows } from 'react-icons/gi';
import profile from '../../assets/images/home/profile.jpeg';

import {
  BoxInfos, Card, Container, Content, ImageContainer,
} from './style';

import useInfos from './useInfos';

export default function InfosMe() {
  const { experience } = useInfos();

  return (
    <Container>
      <Content>
        <div className="tit">
          <h2>Especialidades</h2>
        </div>

        <Card>
          <div className="title">
            <span><SlDiamond /></span>
            <h3>Realismo P&B</h3>
          </div>

          <p className="description">Obras de arte que ganham vida na pele. Traços precisos e riqueza de detalhes capturam a essência de sombras e luzes.Uma expressão intensa e atemporal. Adorne sua pele com significados profundos e duradouros.</p>
        </Card>

        <Card>
          <div className="title">
            <span><GiQueenCrown /></span>
            <h3>Geek</h3>
          </div>

          <p className="description"> Transforme sua paixão em arte na pele. Heróis e ícones ganham vida em traços precisos. Expressão intensa de sua cultura e paixões. Marque sua pele com significados únicos e eternos.</p>
        </Card>

        <Card>
          <div className="title">
            <span><GiStrikingArrows /></span>
            <h3>Aquarela</h3>
          </div>

          <p className="description">Cores fluindo na pele como arte viva. Leveza e beleza em cada traço, criando magia única. Expressão suave e encantadora de emoções. Deixe-se envolver pela pintura da sua alma. Aquarele sua história em sua pele, uma obra de arte eterna.</p>
        </Card>

        <BoxInfos>
          {experience.map((ex) => (
            <div className="icon" key={ex.id}>
              <span><ex.icon /></span>

              <div className="content-box">
                <small>
                  {ex.title}
                  <span>{ex.set}</span>
                </small>

                <p>{ex.text}</p>
              </div>
            </div>
          ))}
        </BoxInfos>

        <ImageContainer>
          <div className="me">
            <h2>Conheça um pouco da minha história 🔥</h2>
          </div>
          <img src={profile} alt="" />
          <div className="history">
            <p>Tatuador a mais de 10 anos...</p>
          </div>
        </ImageContainer>
      </Content>

    </Container>
  );
}
