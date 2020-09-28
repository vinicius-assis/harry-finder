import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalContext'

import MobileMenuIcon from '../MobileMenuIcon/index'
import { NavBar } from './style'
import { ReactComponent as Icon} from '../../assets/harry-big.svg'

const Menu = () => {
  const { active } = useContext(GlobalContext)
  return (
    <NavBar bg={active}>
      <Icon />
      <MobileMenuIcon />
    </NavBar>
  )
}

export default Menu