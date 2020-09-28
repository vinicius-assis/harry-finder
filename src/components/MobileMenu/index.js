import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext/index'

import {ContentWrapper, ContentItem} from './style'

const MobileMenu = () => {
  const {active} = useContext(GlobalContext)

  return (
  <ContentWrapper active={active}>
    <ContentItem>
      <a>Home</a>
    </ContentItem>
    <ContentItem>
      <a>Home</a>
    </ContentItem>
    <ContentItem>
      <a>Home</a>
    </ContentItem>
  </ContentWrapper>

)}

export default MobileMenu