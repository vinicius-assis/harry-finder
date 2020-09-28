import React from 'react'

import movies from '../../utils/movies'

import { MoviesWrapper, MoviesCards } from './style'

const Movies = () => (
  <MoviesWrapper>
    {movies.map(item => (
      <MoviesCards>
        {item.name}
      </MoviesCards>
    ))}
  </MoviesWrapper>
)

export default Movies