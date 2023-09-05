import { styled, keyframes } from 'styled-components';

const slideIn = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 80px;
  animation: ${slideIn} 1s ease-in;
`;
