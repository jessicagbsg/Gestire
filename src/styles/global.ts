import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
  --gray-background:#F9F9F9;
  --gray-medium: #DDDDDD
  --gray-text:#333;

  --green-light: #CDF0EA;
  --green-medium: #7AA39C;
  --green-dark-text: #3D4D46;

  --red-light:#FFC1B8;
  --red-medium:#DB797D;
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

  h1, h3, h4 {
    font-weight: 600;
  }

  h2 {
    font-weight: 400;
    font-size: 1rem;
  }

  button{
    display: block;
    cursor: pointer;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.2rem;
    background-color: #ddd;
    color: var(--gray-text);
    transition: 0.2s;
    &.green{
      background-color: var(--green-light);
      color: var(--green-dark-text);
    }
    &:hover{
      filter: brightness(0.8);
    }
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  a{
    text-decoration: none;
  }
  
  .reactModalOverlay{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reactModalContent{
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    position: relative;
    background-color: var(--gray-background);
    border-radius: 0.2rem;
  }

  .reactModalClose{
    position: absolute;
    top: 1rem;
    right: 0;
    border: none;
    background-color: transparent;
    img{
      width: 20px;
      height: 20px;
    }
  }

`;
