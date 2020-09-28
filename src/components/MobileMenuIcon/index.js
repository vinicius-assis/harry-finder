import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Wrapper, Middle} from './style'

const MobileMenuIcon = () => {
  const {active, handleClick} = useContext(GlobalContext)

  return (
  <Wrapper show={active} onClick={handleClick}>
    <Middle show={active}/>
  </Wrapper>
)}

export default MobileMenuIcon