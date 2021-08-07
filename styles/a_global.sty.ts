import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    background-color: #cccfe0;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
`;
export { GlobalStyle };
