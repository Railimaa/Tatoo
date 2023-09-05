import { styled } from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin: 10px 20px;


  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: bold;
      font-style: italic;
      font-size: 40px;
    }
  }

  @media (min-width: 768px) {
    margin: 20px 50px;
    gap: 190px;
  }

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.secondary};

    @media (min-width: 769px) {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media (max-width: 768px) {
    position: relative;
    flex-basis: 100%;
    justify-content: flex-end;
    margin-right: 2px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      padding-bottom: 10px;
      margin-bottom: -10px;
    }

    &.active {
      color: ${({ theme }) => theme.colors.secondary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      padding-bottom: 10px;
      margin-bottom: -10px;
    }

    @media (max-width: 768px) {
      display: none;
    }

    small {
      font-size: 14px;
      font-weight: bold;
    }
  }

  .contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 768px) {
      .small-text {
        display: none;
      }
    }
  }


`;
