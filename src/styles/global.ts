import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  body {
      background: #fff;
      font-family: 'Lato', sans-serif;
      -webkit-font-smoothing: antialiased;
      color: #545454;

  }

  h1, h2, h3, h4, h5, h6, input, button, strong {
      font-family: 'Abel', sans-serif;
      font-weight: 300;
  }

  h1 {
      font-size: 40px;
  }

  button {
      cursor: pointer;
  }
`;
