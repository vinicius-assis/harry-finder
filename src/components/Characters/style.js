import styled from 'styled-components'

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(500px);
`

export const SearchField = styled.input.attrs({
  placeholder: 'Character name'
})`
  width: 60%;
  height: 70px;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  color: #777575;
  border: solid 1px #707070;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: rgba(255, 255, 255, 0.83);
`

export const SearchButton = styled.button`
  width: 54px;
  height: 70px;
  border: solid 1px #707070;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(255, 255, 255, 0.83);
` 