import PropTypes from 'prop-types';

import { FaTimes } from 'react-icons/fa';

import { Container, Content, LinkSocialMediaContainer } from './style';

import SideBarItem from '../SideBarItem';
import LinkSocialMedia from '../LinkSocialMedia';
import useSideBar from './useSideBar';

export default function SideBar({ visible }) {
  const { links, linksMidia } = useSideBar();

  function handleCloseSideBar() {
    visible(false);
  }

  return (
    <Container $sideBar={visible}>

      <FaTimes onClick={handleCloseSideBar} />

      <Content>

        {links.map((link) => (
          <SideBarItem
            key={link.id}
            text={link.text}
            path={link.path}
            Icon={link.Icon}
            OnCloseSideBar={handleCloseSideBar}
          />
        ))}

        <LinkSocialMediaContainer>
          {linksMidia.map((link) => (
            <LinkSocialMedia
              key={link.id}
              Icon={link.Icon}
              href={link.path}
            />
          ))}
        </LinkSocialMediaContainer>

      </Content>

    </Container>

  );
}

SideBar.propTypes = {
  visible: PropTypes.func.isRequired,
};
