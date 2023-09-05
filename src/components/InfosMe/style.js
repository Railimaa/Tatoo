import { styled, keyframes } from 'styled-components';

const slideIn = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

const slideTwo = keyframes`
   0% {
    opacity: 0.5;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .tit {
    animation: ${slideIn} 2s ease-in;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${slideTwo} 2s forwards;

  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 100px;

    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 40px;
    }

    h3 {
      font-size: 28px;
      font-weight: bold;
    }
  }

  .description {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 18px;
      margin-left: 10px;
      color: #a6a6a6;
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
      padding-bottom: 4px;

      /* @media (min-width: 767px) {
       margin-left: 20px;
     } */
    }
`;

export const BoxInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #262626;
    padding: 20px 80px;
    height: 220px;
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    margin-left: 60px;
    margin-top: 100px;
    margin-bottom: 200px;

    @media (max-width: 767px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 240px 150px;
      margin-left: -8px;
      width: 80px;
      gap: 32px;
    }


    .icon {
      display: flex;
      flex-direction: column;

      span {
        font-size: 40px;
        color: ${({ theme }) => theme.colors.secondary};
      }

      @media (max-width: 767px) {
        display: flex;
        flex-direction: row;

        span {
          font-size: 30px;
        }
      }


      .content-box {
          margin-top: 8px;

          small {
            font-size: 28px;
            font-weight: bold;
            text-transform: uppercase;

            span {
              margin-left: 8px;
              font-size: 18px;
              position: absolute;
              color: ${({ theme }) => theme.colors.secondary};
            }
          }

          p {
            font-size: 14px;
            font-weight: 300;
            margin-top: 18px;
          }

          @media (max-width: 767px) {
              margin-top: 2px;

             small {
              font-size: 22px;
              margin-left: 10px;
             }

             p {
              margin-left: 10px;
              margin-top: 10px;

             }
           }

        }
      }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 200px;

    .me {
      margin-bottom: 8px;

       @media (max-width: 768px) {
          margin-left: 22px;
      }
    }

    .history {
      color: #a6a6a6;
    }

    img {
      width: 300px;
      height: 400px;
      margin-bottom: 80px;
    }

    @media (max-width: 768px) {
      margin-bottom: 200px;
    }

`;
