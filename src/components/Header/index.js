import { NavLink } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import wp from '../../assets/icons/wp.svg';

import { Container, Nav } from './style';

import useHeader from './useHeader';
import SideBar from '../SideBar';

export default function Header() {
  const { sideBar, whatsappUrl, handleShowSideBar } = useHeader();

  return (
    <Container>
      <div className="logo">
        <h1>Rafael</h1>
        <small>Tattoo Studio</small>
      </div>

      <Nav>
        <NavLink to="/">
          <small>Home</small>
        </NavLink>

        <NavLink to="/me">
          <small>Sobre nós</small>
        </NavLink>

        <NavLink to="/services">
          <small>Trabalhos</small>
        </NavLink>

        <NavLink to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact">
          <small className="small-text">Orçamento</small>
          <img src={wp} alt="wpp" />
        </NavLink>

        <FaBars className="menu-icon" onClick={handleShowSideBar} />

        {sideBar && <SideBar visible={handleShowSideBar} />}

      </Nav>

    </Container>
  );
}
