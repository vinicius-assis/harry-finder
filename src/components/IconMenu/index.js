import React from 'react'

import { Wrapper, Middle} from './style'

const IconMenu = () => {
  const [active, setActive] = React.useState(false)

  return (
  <Wrapper onClick={() => setActive(!active)} show={active}>
    <Middle show={active}/>
  </Wrapper>
)}

export default IconMenu