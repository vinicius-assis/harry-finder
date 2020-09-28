import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext/index'

import {ContentWrapper, ContentItem} from './style'

const MobileMenu = () => {
  const {active} = useContext(GlobalContext)

  return (
  <ContentWrapper active={active}>

    <ContentItem>
      <a href="#">Home</a>
    </ContentItem>
    
    <ContentItem>
      <a href="#">Movies</a>
    </ContentItem>

    <ContentItem>
      <a href="#">Characters</a>
    </ContentItem>

    <ContentItem>
      <a href="#">Games</a>
    </ContentItem>

  </ContentWrapper>

)}

export default MobileMenu