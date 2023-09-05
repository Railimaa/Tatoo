import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 28px;
  font-size: 20px;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 10px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 20px;
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
  }

  & + & {
    margin-top: 40px;
  }
`;
