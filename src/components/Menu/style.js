import styled from 'styled-components'

export const NavBar = styled.nav`
  position: relative;
  left: 0;
  top: 0;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background-color: ${({bg}) => bg ? '#000; ' : 'transparent'};
  transition: all .9s linear;
`