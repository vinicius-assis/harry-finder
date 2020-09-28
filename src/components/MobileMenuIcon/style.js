import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80px;
  height: 65px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  

  &::before, &::after {
    content: '';
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: #${({show}) => show ? '000' : 'fff'};
    position: absolute;
    ${({show}) => show ? 'left: 15%;' : 'left: 0;'}
    transition: all .5s linear;
  }

  &::before {
    top: 0;
    ${({show}) => show ? "transform-origin: 0%; transform: rotate(45deg);" : ''}
    transition: all .5s linear;
  }
  &::after {
    bottom: 0;
    ${({show}) => show ? "transform-origin: 0%; transform: rotate(-45deg);" : ''}
    transition: all .5s linear;
  }
`

export const Middle = styled.span`
  content: '';
  width: 100%;
  border-radius: 4px;
  background: #fff;
  transition: opacity .5s linear;
  height: ${({show}) => show ? '110%' : '8px'};
  // ${({show}) => show ? 'opacity: 0;' : 'opacity: 1;'}
  transition: all .5s linear;
`

