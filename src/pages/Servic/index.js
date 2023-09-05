import { GiQueenCrown, GiStrikingArrows } from 'react-icons/gi';
import { SlDiamond } from 'react-icons/sl';

import img1 from '../../assets/images/p&b/img1.jpeg';
import img2 from '../../assets/images/p&b/img2.jpeg';
import img3 from '../../assets/images/p&b/img3.jpeg';
import img4 from '../../assets/images/p&b/img4.jpeg';
import img5 from '../../assets/images/p&b/img5.jpeg';
import img6 from '../../assets/images/p&b/img6.jpeg';

import img1g from '../../assets/images/geek/img1.jpeg';
import img2g from '../../assets/images/geek/img2.jpeg';
import img3g from '../../assets/images/geek/img3.jpeg';

import img1a from '../../assets/images/aquarela/img1.jpeg';
import img2a from '../../assets/images/aquarela/img2.jpeg';
import img3a from '../../assets/images/aquarela/img3.jpeg';

import {
  Card, Container, Separator, Title,
} from './style';
import CarouselImages from '../../components/CarouselImages';

export default function Servic() {
  const peb = [
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
      src: img3,
    },
    {
      id: Math.random(),
      src: img4,
    },
    {
      id: Math.random(),
      src: img5,
    },
    {
      id: Math.random(),
      src: img6,
    },

  ];

  const geek = [
    {
      id: Math.random(),
      src: img1g,
    },

    {
      id: Math.random(),
      src: img2g,
    },

    {
      id: Math.random(),
      src: img3g,
    },
  ];

  const aquarela = [
    {
      id: Math.random(),
      src: img1a,
    },

    {
      id: Math.random(),
      src: img2a,
    },

    {
      id: Math.random(),
      src: img3a,
    },
  ];

  return (
    <Container>

      <Title>
        <h2>Algumas das minhas artes!</h2>
      </Title>

      <Card>
        <div className="title">
          <h3>
            Realismo P
            <span>&</span>
            B
          </h3>
          <span><SlDiamond /></span>
        </div>

        <div className="image-container">
          <CarouselImages images={peb} />
          <Separator />
        </div>

      </Card>

      <Card>
        <div className="title">
          <h3>Geek</h3>
          <span><GiStrikingArrows /></span>
        </div>

        <div className="image-container">
          <CarouselImages images={geek} />
          <Separator />
        </div>
      </Card>

      <Card>
        <div className="title">
          <h3>Aquarela</h3>
          <span><GiQueenCrown /></span>
        </div>

        <div className="image-container">
          <CarouselImages images={aquarela} />
          <Separator />
        </div>
      </Card>

    </Container>
  );
}
