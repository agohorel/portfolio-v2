import React from "react"
import styled from "styled-components"

import { StyledLink } from "../../styles/common"

export const Header = () => {
  return (
    <StyledLink to="/" aria-label="home">
      <Type></Type>
    </StyledLink>
  )
}

const Type = styled.h1`
  padding: 2rem;
  font-size: 2.2rem;
  margin-bottom: 3px;

  :before {
    content: "ALEX GOHOREL | FULL STACK SOFTWARE ENGINEER";
  }

  @media (max-width: 847px) {
    :before {
      content: "ALEX GOHOREL | SOFTWARE ENGINEER";
    }
  }

  @media (max-width: 545px) {
    :before {
      content: "ALEX GOHOREL | DEVELOPER";
    }
  }

  @media (max-width: 440px) {
    :before {
      content: "ALEX GOHOREL";
    }
  }
`
