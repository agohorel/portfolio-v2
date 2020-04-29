import React from "react"
import styled from "styled-components"
import "../styles/main.css"

import { Layout } from "../components/Layout/Layout"
import Sketch from "../components/Sketch"

export default () => (
  <Layout>
    <SketchContainer>
      <Sketch></Sketch>
    </SketchContainer>
  </Layout>
)

const SketchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
