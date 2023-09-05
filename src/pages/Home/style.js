import { styled, keyframes } from 'styled-components';

const slideIn = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 100px;
  margin-left: 14px;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    margin-top: 200px;
    margin-right: 40px;
  }
`;

export const TitlePage = styled.div`
   animation: ${slideIn} 1s ease-in;


   small {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;

    span {
      color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  .sub-title {
    margin-top: 10px;
    font-size: 16px;
  }

`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: 40px;
  margin-left: -20px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-left: 100px;
    margin-top: -50px;
    margin-bottom: 620px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 767px) {
    margin-left: -810px;
    margin-top: 450px;
  }
`;

export const ContentBio = styled.div`
   margin-top: 150px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 40px;

    span {
      margin-right: 8px;
      color: #ffff4b;
    }
  }

  .img {
    margin-bottom: 200px;

    img {
    border-radius: 8px;
    width: 500px;
    max-width: 100%;
    height: auto;
  }

    @media (max-width: 768px) {
      margin-bottom: 200px;
    }
  }

  .skils {

    margin-bottom: 60px;

    @media (min-width: 767px) {

       margin-left: 38px;
    }

    .content {
      display: flex;
      align-items: center;
      gap: 18px;


      @media (min-width: 767px) {
       display: flex;
       justify-content: center;
       align-items: center;
    }


      span {
        font-size: 40px;
        color: ${({ theme }) => theme.colors.secondary};
      }

      h3 {
        font-size: 28px;
        font-weight: bold;

        small {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }

    .description {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 18px;
      color: #a6a6a6;
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
      padding-bottom: 4px;

      @media (min-width: 767px) {
       margin-left: 20px;
     }
    }
  }

  .box-infos {
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
    margin-top: 20px;
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

  }


  @media (max-width: 768px) {
      margin-top: 150px;
    }

    @media (min-width: 767px) {
    margin-left: 80px;
  }
`;
