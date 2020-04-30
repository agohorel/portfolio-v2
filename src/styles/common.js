import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2rem;

  :hover {
    color: #3c3c3c;
    text-decoration: line-through;
  }
`
