import React, { useState } from 'react'

import { SearchButton, SearchField, SearchWrapper } from './style'
import { ReactComponent as SearchIcon} from '../../assets/search.svg'


const Characters = () => {
  const [inputValue, setInputValue] = useState('') 
  const [response, setResponse] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const capitalizeName = (name) => {
  return name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  const getApi = async (character) => {
    const person = capitalizeName(character).replace(' ', '%20')
    try {
      setIsFetching(true)
      const url = `https://www.potterapi.com/v1/characters/?key=%242a%2410%24pZzh7vkBfH9jIDq6hrTSa.Qf%2Fwm2F6AkUgO4uol9g20o8yECBe8Iq&name=${person}`
      const response = await fetch(url)
      const responseJson = await response.json()
      setResponse(...responseJson)
    }
    catch (error) {
      console.error(error)
    } finally {
      setIsFetching(false)
    }
  }

  function handleChange({target}) { 
      setInputValue(target.value)
  }

  function handleClick() {
    getApi(inputValue)
  }

  return (
    <SearchWrapper>
      <SearchField onChange={handleChange} onKeyDown={({key}) => key === 'Enter' ? handleClick() : ''}/>
      <SearchButton onClick={handleClick}>
        <SearchIcon />
      </SearchButton>
      {isFetching && <p>Carregando...</p>}
      {!!response && <h1>{response.name}</h1>}
    </SearchWrapper>  
  )
}

export default Characters