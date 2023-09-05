import { MdPhoneCallback, MdLocationOn } from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import LinksFooter from '../LinksFooter';

import {
  ContactInfo, Container, Content, ContentLink,
} from './style';
import useFooter from './useFooter';

export default function Footer() {
  const { links } = useFooter();

  return (
    <Container>

      <Content>

        <div className="links">
          <h1>Rafael</h1>
          <small>Tattoo Studio</small>

          <div className="icons">
            {links.map((link) => (
              <LinksFooter
                key={link.id}
                Icon={link.Icon}
                path={link.path}
              />
            ))}
          </div>

        </div>

        <ContentLink>
          <h3>Navegação</h3>
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/me">
            Sobre nós
          </NavLink>

          <NavLink to="/services">
            Trabalhos
          </NavLink>
        </ContentLink>

        <ContactInfo>
          <h3>Contato</h3>

          <div className="separator">

            <div className="item">
              <span><MdPhoneCallback /></span>
              <small>(11) 94377-1725</small>
            </div>

            <div className="item">
              <span><MdLocationOn /></span>
              <small>Piraporinha SP</small>
            </div>

          </div>
        </ContactInfo>

      </Content>

    </Container>
  );
}
