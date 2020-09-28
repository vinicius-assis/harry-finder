import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext/index'

import {ContentWrapper, ContentItem} from './style'

const MobileMenu = () => {
  const {active} = useContext(GlobalContext)

  return (
  <ContentWrapper active={active}>

    <ContentItem>
      <a href="#home">Home</a>
    </ContentItem>
    
    <ContentItem>
      <a href="#movies">Movies</a>
    </ContentItem>

    <ContentItem>
      <a href="#characters">Characters</a>
    </ContentItem>

    <ContentItem>
      <a href="#games">Games</a>
    </ContentItem>

  </ContentWrapper>

)}

export default MobileMenu