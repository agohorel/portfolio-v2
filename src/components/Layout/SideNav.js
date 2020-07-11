import React, { useEffect } from "react"
import styled from "styled-components"

import { StyledLink } from "../../styles/common"
import { FooterLinks } from "./FooterLinks"

import { useDeviceHeight } from "../../hooks/useDeviceHeight"

const navWidth = "67vw"

export const SideNav = ({ navState }) => {
  const [height, handleResize] = useDeviceHeight()

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

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

const Drawer = styled.div`
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
