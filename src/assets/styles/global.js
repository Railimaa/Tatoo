import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;;
  }

  body {
    background: #0d0d0d;
  }

  button {
    cursor: pointer;
  }


`;
