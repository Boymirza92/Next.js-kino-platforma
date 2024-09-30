import React from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
const Container = styled('div')`
display:flex;
justify-content: flex-end;
align-items: center;
width: 50%;
font-size: 25px;
& > :hover {
    cursor: pointer;
  }
`
const SecondSection = () => {
  return (
    <Container>
      <BiSearch/>
    </Container>
  )
}

export default SecondSection