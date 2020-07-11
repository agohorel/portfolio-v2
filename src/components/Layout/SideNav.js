import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { StyledLink } from "../../styles/common"
import { FooterLinks } from "./FooterLinks"

const navWidth = "67vw"

function getWindowHeight() {
  if (typeof window !== "undefined") {
    const { innerHeight: height } = window
    return height
  }
}

export const SideNav = ({ navState }) => {
  const [height, setHeight] = useState(getWindowHeight())

  useEffect(() => {
    function handleResize() {
      setHeight(getWindowHeight())
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <Drawer open={navState} height={height}>
      <Nav height={height}>
        <Link to="/projects">PORTFOLIO</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </Nav>
      <FooterLinks placement="sideNav"></FooterLinks>
    </Drawer>
  )
}

const Drawer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  height: ${props => props.height}px;
  width: ${navWidth};
  background-color: #1f1f1f;
  transform: ${props =>
    props.open ? `translate(0, 0)` : `translate(${navWidth}, 0)`};
  transition: 0.3s ease-out transform, 0.1s ease-out height;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
`

const Nav = styled.nav`
  display: flex;
  height: ${props => props.height}px;
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
