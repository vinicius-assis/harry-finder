import React from 'react'

import MobileMenuIcon from '../MobileMenuIcon/index'
import { NavBar } from './style'
import { ReactComponent as Icon} from '../../assets/harry-big.svg'

const Menu = () => {
  return (
    <NavBar>
      <Icon />
      <MobileMenuIcon />
    </NavBar>
  )
}

export default Menu