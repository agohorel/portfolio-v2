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

  return (
    <NavContainer>
      <DesktopNav>
        <Nav>
          <Link to="/projects">PORTFOLIO</Link>
          {/* <Link to="/">BLOG</Link> */}
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </Nav>
      </DesktopNav>

      <MobileNav>
        <SideNav navState={isSideNavOpen}></SideNav>
        <Backdrop visible={isSideNavOpen}></Backdrop>
        <Hamburger toggleNav={toggleNav} visible={isSideNavOpen}></Hamburger>
      </MobileNav>
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

const DesktopNav = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`

const MobileNav = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: inline;
  }
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  opacity: ${props => (props.visible ? "1" : "0")};
  z-index: 0;
  transition: 0.3s ease-out opacity;
`
