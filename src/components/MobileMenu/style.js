import styled from 'styled-components'

export const ContentWrapper = styled.ul`
  width: 100%;
  height: 100vh;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ active }) => active ? 'transform:translateX(0);' : 'transform: translateX(200%);'}
  transition: transform .8s cubic-bezier(0.65, -0.17, 0.38, 1.54);
`

export const ContentItem = styled.li`
  font-size: 3.2rem;
  margin: 50px 0;
`