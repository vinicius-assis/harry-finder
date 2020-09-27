import styled from 'styled-components'
import backGround from '../../assets/bg.jpg'

export const AboutWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: url(${backGround}) no-repeat 20%;
  background-size: cover;
`

export const AbouTitle = styled.h1`
  font-size: 2.4rem;
  font-family: 'Robot', sans-serif;
  font-style: italic;
`
export const AboutParagraph = styled.p`
  font-size: 1.4rem;
`