import React from "react"
import styled from "styled-components"

import { Header } from "./Header"
import { Navigation } from "./Navigation"
import { FooterLinks } from "./FooterLinks"

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header></Header>
        <Navigation></Navigation>
      </HeaderContainer>
      {children}
      <FooterLinks></FooterLinks>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  min-height: 100vh;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
