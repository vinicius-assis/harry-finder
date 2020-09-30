import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext/index'

import { ContentItem, ContentWrapper } from './style'
import { Link } from 'react-router-dom'


const MobileMenu = ({ children }) => {
  const {active, handleClick } = useContext(GlobalContext)

  return (
  <ContentWrapper active={active}>
    <ContentItem onClick={handleClick}>
      <Link to="/">Home</Link>
    </ContentItem>
    <ContentItem onClick={handleClick}>
      <Link to="/movies">Movies</Link>
    </ContentItem>
    <ContentItem onClick={handleClick}>
      <Link to="/characters">Characters</Link>
    </ContentItem>
  </ContentWrapper>

)}

export default MobileMenu