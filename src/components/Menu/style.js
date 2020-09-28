import styled from 'styled-components'
import Logo from '../../assets/harry.png'

export const NavBar = styled.nav`
  left: 0;
  top: 0;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HarryLogo = styled.img.attrs({
  src: Logo
})`
  display: block;
  width: 350px;
  height: 100px;
`