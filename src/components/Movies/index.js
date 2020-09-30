import React from 'react'

import movies from '../../utils/movies'

import { Title, Wrapper, Cards, CardImg, CardBody } from '../Card/style'

const Movies = () => (
  <Wrapper>
    <Title>Movies</Title>
    {movies.map(item => (
      <Cards>
        <CardImg url={item.imgLocal} alt={`Capa do filme ${item.name.toLowerCase()}`}/>
        <CardBody>
          <li><strong>{item.name}</strong></li>
          <li>{item.ano}</li>
        </CardBody>
      </Cards>
    ))}
  </Wrapper>
)

export default Movies