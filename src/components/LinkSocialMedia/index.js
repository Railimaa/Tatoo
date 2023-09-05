import PropTypes from 'prop-types';

import { Container } from './style';

export default function LinkSocialMedia({ Icon, href = null }) {
  return (
    <Container>

      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon />
      </a>

    </Container>
  );
}

LinkSocialMedia.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  href: PropTypes.string,
};
