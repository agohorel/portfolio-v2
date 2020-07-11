import React, { useEffect } from "react"
import styled from "styled-components"
import "../styles/main.css"

import { Layout } from "../components/Layout/Layout"
import Sketch from "../components/Sketch"

import { useDeviceHeight } from "../hooks/useDeviceHeight"

export default () => {
  const [height, handleResize] = useDeviceHeight()

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return (
    <Layout>
      <SketchContainer height={height}>
        <Sketch></Sketch>
      </SketchContainer>
    </Layout>
  )
}

const SketchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height}px;
  min-width: 100%;
`
