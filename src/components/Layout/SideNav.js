import React from "react"
import styled from "styled-components"

import { StyledLink } from "../../styles/common"
import { FooterLinks } from "./FooterLinks"

const navWidth = "67vw"

export const SideNav = ({ navState }) => {
  return (
    <Drawer open={navState}>
      <Nav>
        <Link to="/projects">PORTFOLIO</Link>
        {/* <Link to="/">BLOG</Link> */}
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </Nav>
      <FooterLinks placement="sideNav"></FooterLinks>
    </Drawer>
  )
}

const Drawer = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  height: 100vh;
  width: ${navWidth};
  background-color: #1f1f1f;
  transform: ${props =>
    props.open ? `translate(0, 0)` : `translate(${navWidth}, 0)`};
  transition: 0.3s ease-out all;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
`

const Nav = styled.nav`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Link = styled(StyledLink)`
  font-size: 4rem;
  color: #fff;
  width: 100%;
  text-align: center;
  background-color: #333;

  :nth-child(odd) {
    background-color: #444;
  }

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`
