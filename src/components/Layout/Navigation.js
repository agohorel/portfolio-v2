import React, { useState } from "react"
import styled from "styled-components"

import { Hamburger } from "./Hamburger"
import { SideNav } from "./SideNav"
import { StyledLink } from "../../styles/common"

export const Navigation = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  const toggleNav = () => {
    setIsSideNavOpen(!isSideNavOpen)
  }

  const closeNav = () => {
    setIsSideNavOpen(false)
  }

  return (
    <NavContainer>
      <DesktopNav>
        <Nav>
          <Link to="/projects" activeStyle={activeNavStyles}>
            PROJECTS
          </Link>
          <Link to="/about" activeStyle={activeNavStyles}>
            ABOUT
          </Link>
          <Link to="/contact" activeStyle={activeNavStyles}>
            CONTACT
          </Link>
        </Nav>
      </DesktopNav>

      <MobileNav>
        <SideNav navState={isSideNavOpen}></SideNav>
        <Backdrop visible={isSideNavOpen} onClick={closeNav}></Backdrop>
        <Hamburger toggleNav={toggleNav} visible={isSideNavOpen}></Hamburger>
      </MobileNav>
    </NavContainer>
  )
}

const activeNavStyles = {
  fontWeight: "bold",
}

const NavContainer = styled.div`
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 2rem 2rem 1rem 2rem;
  }
`

const Nav = styled.nav`
  display: flex;
`

const Link = styled(StyledLink)`
  :not(:last-of-type) {
    margin-right: 2rem;
  }
`

const DesktopNav = styled.div`
  @media (max-width: 1110px) {
    display: none;
  }
`

const MobileNav = styled.div`
  display: none;

  @media (max-width: 1110px) {
    display: inline;
  }
`

const Backdrop = styled.div`
  pointer-events: ${props => (props.visible ? "default" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  opacity: ${props => (props.visible ? "1" : "0")};
  z-index: 0;
  transition: 0.3s ease-out opacity;
`
