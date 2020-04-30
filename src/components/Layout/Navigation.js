import React from "react"
import styled from "styled-components"

import { StyledLink } from "../../styles/common"

export const Navigation = () => {
  return (
    <NavContainer>
      <Nav>
        <Link to="/">WORKS</Link>
        <Link to="/">BLOG</Link>
        <Link to="/">ABOUT</Link>
        <Link to="/">CONTACT</Link>
      </Nav>
    </NavContainer>
  )
}

const NavContainer = styled.div`
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
