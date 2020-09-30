import React from 'react'

import movies from '../../utils/movies'

import { Title, MoviesWrapper, MoviesCards, CardImg, CardBody } from './style'

const Movies = () => (
  <MoviesWrapper>
    <Title>Movies</Title>
    {movies.map(item => (
      <MoviesCards>
        <CardImg url={item.imgLocal} alt={`Capa do filme ${item.name.toLowerCase()}`}/>
        <CardBody>
          <li><strong>{item.name}</strong></li>
          <li>{item.ano}</li>
        </CardBody>
      </MoviesCards>
    ))}
  </MoviesWrapper>
)

export default Movies