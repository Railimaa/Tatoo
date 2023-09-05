import { styled } from 'styled-components';

export const Container = styled.div`
  background: #262626;
  color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  width: 300px;
  height: 410px;
  left: ${({ $sideBar }) => ($sideBar ? '0' : '-100%')};


  > svg {
    cursor: pointer;
    position: fixed;
    color: ${({ theme }) => theme.colors.secondary};
    width: 30px;
    height: 14px;
    margin-top: 32px;
    margin-left: 20px;
  }


`;

export const Content = styled.div`
  margin-top: 110px;
`;

export const LinkSocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`;
