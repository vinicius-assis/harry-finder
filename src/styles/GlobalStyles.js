import { createGlobalStyle } from 'styled-components'
import backGround from '../assets/bg.jpg'


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Peddana&family=Roboto:ital,wght@1,700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 10px 'Peddana', sans-serif;
    color: #e6e6e6;
    -webkit-font-smoothing: antialiased !important;
    overflow: hidden;
    background: url(${backGround}) no-repeat 20%;
    background-size: cover;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyles