import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #262626;
  height: 50vh;

  @media (max-width: 767px) {
      height: 140vh;
    }

  @media (max-width: 867px) {
    display: flex;
     justify-content: center;
      align-items: center;
      height: 120vh;
    }
`;

export const Content = styled.div`
  display: flex;
  margin-top: -80px;
  gap: 180px;

   .links {
      display: flex;
      align-items: center;
      flex-direction: column;

    h1 {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: bold;
      font-style: italic;
      font-size: 40px;
    }

    .icons {
      display: flex;
      margin-top: 20px;


      /* @media (max-width: 767px) {
        flex-direction: column;
        margin-bottom: 18px;
      } */
    }

  }

  @media (max-width: 867px) {
      margin-top: 20px;
      flex-direction: column;
      gap: 40px;
      height: 110vh;
    }
`;

export const ContentLink = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      padding-bottom: 10px;
      margin-bottom: -10px;
    }
  }


`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .separator {
    display: flex;
    align-items: center;
    flex-direction: column;

    .item {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 20px;
    }
  }
`;
