import React from "react"
import styled from "styled-components"

import { Header } from "./Header"

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header></Header>
      {children}
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div``
