import React from "react"
import styled from "styled-components"

export const Hamburger = ({ toggleNav, visible }) => {
  return (
    <Container onClick={toggleNav}>
      <HamburgerIcon visible={visible}></HamburgerIcon>
    </Container>
  )
}

const Container = styled.div`
  z-index: 3;
  position: relative;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`

const HamburgerIcon = styled.div`
  width: 3rem;
  height: 0.4rem;
  background: ${props => (props.visible ? "rgba(0, 0, 0, 0)" : "#000")};
  transition: 0.5s ease-out all;
  border-radius: 2px;
  margin-top: 1rem;

  &::before,
  &::after {
    content: "";
    position: absolute;

    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: ${props => (props.visible ? "#fff" : "#000")};
    transition: 0.5s ease-out all;
  }

  &::before {
    transform: ${props =>
      props.visible
        ? "rotate(45deg) translate3d(0, 0, 0)"
        : "translate3d(0, -1rem, 0)"};
  }

  &::after {
    transform: ${props =>
      props.visible
        ? "rotate(135deg) translate3d(0, 0, 0)"
        : "translate3d(0, 1rem, 0)"};
  }
`
