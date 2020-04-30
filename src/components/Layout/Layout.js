import React from "react"
import styled from "styled-components"

import { Header } from "./Header"
import { FooterLinks } from "./FooterLinks"

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header></Header>
      {children}
      <FooterLinks></FooterLinks>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div``
