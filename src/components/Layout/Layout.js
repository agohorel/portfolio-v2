import React from "react"
import styled from "styled-components"

import { Header } from "./Header"
import { Navigation } from "./Navigation"
import { FooterLinks } from "./FooterLinks"

const footerPaths = ["/", "/contact"]

export const Layout = ({ children, location }) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header></Header>
        <Navigation></Navigation>
      </HeaderContainer>
      {children}
      {footerPaths.includes(location?.pathname) && (
        <FooterLinks location={location}></FooterLinks>
      )}
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div``

const HeaderContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0)
  );
`
