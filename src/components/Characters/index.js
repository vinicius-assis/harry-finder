import React from 'react'

import { SearchButton, SearchField, SearchWrapper } from './style'
import { ReactComponent as SearchIcon} from '../../assets/search.svg'


const Characters = () => (
  <SearchWrapper>
    <SearchField />
    <SearchButton>
      <SearchIcon />
    </SearchButton>
  </SearchWrapper>
)

export default Characters