import { styled, keyframes } from 'styled-components';

const slideIn = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

const slideTwo = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;

  h2 {
    animation: ${slideTwo} 1s ease-in;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;
  margin-bottom: 160px;

  .title {
    display: flex;
    align-items: center;
    gap: 10px;
    animation: ${slideIn} 2s ease-in;

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }

    h3 {
      font-weight: bold;
      text-transform: uppercase;

      span {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .image-container {
      width: 100%;
      max-width: 300px;
      margin-top: 20px;


      @media (max-width: 768px) {
        margin-top: 60px;
      }
  }

`;

export const Separator = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: 40px;
`;
