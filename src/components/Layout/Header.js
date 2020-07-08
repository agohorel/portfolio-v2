import React from "react"
import styled from "styled-components"

import { StyledLink } from "../../styles/common"

export const Header = () => {
  return (
    <StyledLink to="/">
      <Type>ALEX GOHOREL | SOFTWARE ENGINEER &amp; AUDIOVISUAL DESIGNER</Type>
    </StyledLink>
  )
}

const Type = styled.h1`
  padding: 2rem;
  font-size: 2.2rem;
`
