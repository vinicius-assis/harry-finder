import styled from 'styled-components'

export const Title = styled.h1`
  width: 100%;
  font-size: 3.2rem;
  text-align: center;
  margin-top: 200px;
  margin-bottom: 100px;
`

export const MoviesWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const MoviesCards = styled.div`
  width: auto;
  border-radius: 8px;
  background-color: #fff;
  margin: 40px 10px 0;
`

export const CardImg = styled.img.attrs(props => ({
  src: props.url,
  alt: 'Imagem do filme do harry potter'
}))`
  width: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const CardBody = styled.div`
  max-width: 200px;
  min-height: 60px;

  & > li {
    text-align: center;
    list-style: none;
    color: #000;
    margin-bottom: 10px;
  }
`