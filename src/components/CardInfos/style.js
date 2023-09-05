import { styled, keyframes } from 'styled-components';

const slideIn = keyframes`
   0% {
    opacity: 1;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  animation: ${slideIn} 10s forwards;
  transition: transform 0.3s;


  @media (max-width: 767px) {
   flex-direction: column;
   align-items: center;
  }

  @media (min-width: 767px) {
    margin-right: -20px;
    margin-left: 80px;
  }

`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #262626;
  padding: 70px;
  height: 280px;
  width: 240px;
  border-radius: 10px;





  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.1);


    span {
      color: #ffff4b;
    }

    .content small {
      color: ${({ theme }) => theme.colors.primary};
    }

  }

  span {
    display: flex;
    margin-top: -50px;
    margin-right: 142px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 40px;
  }


  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;

    ul {
      list-style-type: none;
    }

    li {
      margin-top: 12px;
    }

    h3 {

      white-space: nowrap;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 18px;
      margin-right: 5px;
      margin-bottom: 10px;
    }

    small {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: bold;
    }

  }
`;
