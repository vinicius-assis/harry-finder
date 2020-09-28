import styled from 'styled-components'

export const ContentWrapper = styled.ul`
  width: 100%;
  height: 100%;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ active }) => active ? 'transform:translateX(0);' : 'transform: translateX(200%);'}
  transition: transform .5s linear;
`

export const ContentItem = styled.li`
  font-size: 3.2rem;
  margin: 50px 0;
`