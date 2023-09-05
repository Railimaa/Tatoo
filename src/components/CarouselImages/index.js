import PropTypes from 'prop-types';

import { Slide } from './styles';
import useCarousel from './useCarousel';

export default function CarouselImages({ images }) {
  const { sliderRef, autoplay } = useCarousel();

  return (
    <Slide
      ref={sliderRef}
      autoplay={autoplay}
      infinite
      speed={600}
      slidesToShow={1}
      slidesToScroll={1}
      autoplaySpeed={1900}
    >
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt="" />
        </div>
      ))}
    </Slide>
  );
}

CarouselImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};
