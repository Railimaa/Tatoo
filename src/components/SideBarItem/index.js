import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { Container } from './style';

export default function SideBarItem({
  text,
  path = null,
  Icon = null,
  OnCloseSideBar = null,
}) {
  return (
    <Container>

      {path && (
        <NavLink to={path} onClick={OnCloseSideBar}>
          <Icon />
          <span>{text}</span>
        </NavLink>
      )}

      {!path && (
        <>
          <Icon />
          <span>{text}</span>
        </>
      )}

    </Container>
  );
}

SideBarItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string,
  Icon: PropTypes.elementType,
  OnCloseSideBar: PropTypes.func,
};
