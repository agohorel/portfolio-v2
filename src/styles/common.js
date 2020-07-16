import styled from "styled-components"
import { Link } from "gatsby"
import colors from "./colors"

const linkStyle = `
  text-decoration: none;
  color: black;
  font-size: 2rem;

  :hover {
    color: #3c3c3c;
    text-decoration: line-through;
  }
`

export const StyledLink = styled(Link)`
  ${linkStyle}
`
export const ExtLink = styled.a`
  ${linkStyle}
`

export const Centered = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  justify-content: center;
  align-items: center;
`

export const PageTitle = styled.h1`
  padding-top: 4rem;
`

export const StyledButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  min-width: 10rem;
  background-color: ${colors.midgrey};
  color: ${colors.offwhite};
  border: none;
  transition: 0.2s ease all;

  :hover {
    cursor: pointer;
    background-color: ${colors.darkgrey};
  }
`
