/* eslint-disable max-len */

import { AiFillStar } from 'react-icons/ai';

import {
  Container, TitlePage, ImageContainer, Content, ContentBio,
} from './style';

import img1 from '../../assets/images/home/img1.jpeg';
import img2 from '../../assets/images/home/img2.jpeg';
import img3 from '../../assets/images/home/img3.jpeg';
import img4 from '../../assets/images/home/img4.jpeg';
import profile from '../../assets/images/home/profile.jpeg';

import CarouselImages from '../../components/CarouselImages';
import CardInfos from '../../components/CardInfos';
import useHome from './useHome';

export default function Home() {
  const images = [
    {
      id: Math.random(),
      src: img1,
    },

    {
      id: Math.random(),
      src: img2,
    },

    {
      id: Math.random(),
      src: img4,
    },

    {
      id: Math.random(),
      src: img3,
    },

  ];

  const { skills, experience, text } = useHome();

  return (

    <Container>

      <TitlePage>
        <small>
          Artes com
          <br />
          <span>{text}</span>
          <br />
          deixando o
          <br />
          corpo com seu estilo
        </small>

        <div className="sub-title">
          <p>Deixe sua pele contar histórias, porque a vida é curta para não ter tatuagens. 😏</p>
        </div>
      </TitlePage>

      <ImageContainer>
        <CarouselImages images={images} />
      </ImageContainer>

      <Content>
        <CardInfos />

        <ContentBio>
          <div className="title">
            <span><AiFillStar /></span>
            <h3>Minhas especialidades</h3>
          </div>

          <div className="img">
            <img src={profile} alt="" />
          </div>

          {skills.map((skill) => (
            <div className="skils" key={skill.id}>
              <div className="content">
                <span><skill.icon /></span>
                <h3>
                  {skill.title}
                </h3>
              </div>

              <div className="description">
                <p>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}

          <div className="box-infos">
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
          </div>
        </ContentBio>

      </Content>

    </Container>

  );
}
