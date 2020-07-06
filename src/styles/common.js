import styled from "styled-components"
import { Link } from "gatsby"

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
