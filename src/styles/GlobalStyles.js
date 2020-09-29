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
    overflow-x: hidden;
  }

  body {
    font: 10px 'Peddana', sans-serif;
    color: #e6e6e6;
    -webkit-font-smoothing: antialiased !important;
    background: #fff url(${backGround}) no-repeat 20%;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyles