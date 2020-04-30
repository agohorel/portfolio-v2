import React from "react"
import styled from "styled-components"

import { StyledLink } from "../../styles/common"

export const Navigation = () => {
  return (
    <NavContainer>
      <Nav>
        <Link to="/">works</Link>
        <Link to="/">blog</Link>
        <Link to="/">about</Link>
        <Link to="/">contact</Link>
      </Nav>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  padding: 2rem;
`

const Nav = styled.nav`
  display: flex;
`

const Link = styled(StyledLink)`
  :not(:last-of-type) {
    margin-right: 2rem;
  }
`
