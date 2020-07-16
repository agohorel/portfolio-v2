import React from "react"
import styled from "styled-components"

import { Layout } from "../components/Layout/Layout"
import { FooterLinks } from "../components/Layout/FooterLinks"
import { Centered, StyledLink } from "../styles/common"
import ascii from "../styles/ascii404"

export default function about({ location }) {
  return (
    <Layout location={location}>
      <Centered column style={{ paddingTop: "6rem" }}>
        <h1>oops</h1>
        <h2>there's nothing here!</h2>
        <AsciiArt>{ascii}</AsciiArt>
        <StyledLink to={"/"}>back to home</StyledLink>
      </Centered>
      <FooterLinks location={location}></FooterLinks>
    </Layout>
  )
}

const AsciiArt = styled.pre`
  margin: 4rem 0;
  font-size: calc(0.175vw + 0.25px);
  letter-spacing: 0.01vw;
`
