import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 28px;
  margin-top: 40px;


  a {
      display: flex;
      align-items: center;
      padding: 10px 10px;
      border-radius: 6px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.secondary};
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s ease-in;


      &:hover {
        padding-bottom: none;
        border-bottom: none;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.secondary};
        background: ${({ theme }) => theme.colors.primary};

      }
    }

    & + & {
      gap: 10px;
    }
`;
