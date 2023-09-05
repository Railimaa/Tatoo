import { styled, keyframes } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const slideIn = keyframes`
   0% {
    opacity: 0.5;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Slide = styled(Slider)`
  animation: ${slideIn} 3s forwards;

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.colors.secondary};
  }


  img {
    width: 300px;
    height: 400px;
    border-radius: 10px;
    object-fit: cover;
  }



  @media (max-width: 468px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;
