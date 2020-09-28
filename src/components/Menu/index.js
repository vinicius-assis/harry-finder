import React from 'react'

import IconMenu from '../IconMenu/index'
import { NavBar } from './style'
import { ReactComponent as Icon} from '../../assets/harry-big.svg'

const Menu = () => (
  <NavBar>
    <Icon />
    <IconMenu />
  </NavBar>
)

export default Menu