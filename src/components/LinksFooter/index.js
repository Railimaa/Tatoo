import PropTypes from 'prop-types';

import { Container } from './style';

export default function LinksFooter({ Icon, path }) {
  return (
    <Container>

      <a href={path} target="_blank" rel="noopener noreferrer">
        <Icon />
      </a>

    </Container>
  );
}

LinksFooter.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  path: PropTypes.string,
};
