import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
  --gray-background:#f9f9f9;
  --gray-text:#333;

  --green-light: #CDF0EA;
  --green-medium: #7AA39C;
  --green-dark-text: #3D4D46;

  --red-light:#F29E91;
  --red-medium:#BD8E8F;
  --red-dark:#DB797D;
  --red-dark-text:#453434;

  --blue-light:#8EABBD;
  --blue-medium:#3E6E8A;
  --blue-dark-text:#1F3745;
 }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width:1080px){
      font-size: 93.75%;
    }
    @media(max-width:720px){
      font-size: 87.5%;
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
  }


  body, input, button, textarea{
  font-family:"Poppins", sans-serif;
  font-weight: 400;
  }

  h1, h2, h3, h4 {
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;