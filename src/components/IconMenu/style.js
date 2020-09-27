import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;

  &::before, &::after {
    content: '';
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: #fff;
    position: absolute
  }

  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`

export const Middle = styled.span`
  content: '';
  width: 80%;
  height: 8px;
  border-radius: 4px;
  background: #fff;
`

