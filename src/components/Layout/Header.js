import React from "react"
import styled from "styled-components"

import { StyledLink } from "../../styles/common"

export const Header = () => {
  return (
    <StyledLink to="/">
      <Type></Type>
    </StyledLink>
  )
}

const Type = styled.h1`
  padding: 2rem;
  font-size: 2.2rem;
  margin-bottom: 3px;

  :before {
    content: "ALEX GOHOREL | SOFTWARE ENGINEER & AUDIOVISUAL DESIGNER";
  }

  @media (max-width: 835px) {
    :before {
      content: "ALEX GOHOREL | DEV & A/V";
    }
  }

  @media (max-width: 426px) {
    :before {
      content: "ALEX GOHOREL";
    }
  }
`
