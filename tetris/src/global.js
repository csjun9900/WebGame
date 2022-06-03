import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding:0;
        margin:0;
    }

.App {
        background: #406;
        color: #fff;
        text-align: center;
        font-family: sans-serif;
        height: 100vh;
        padding-top: 50px;
      }      
`;

export default GlobalStyle;
