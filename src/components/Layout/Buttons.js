import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Button = ({ children: text }) => {
  return <StyledButton>{text}</StyledButton>
}

export const ButtonLink = ({ children: text, path }) => {
  return <StyledButtonLink to={path}>{text}</StyledButtonLink>
}

export const ButtonExternalLink = ({ children: text, href }) => {
  return (
    <StyledButtonExternalLink
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {text}
    </StyledButtonExternalLink>
  )
}

const styles = css`
  text-decoration: none;
  border: 0;
  background-color: #0a0a0a;
  color: #eee;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  width: 100px;
  text-align: center;

  :hover {
    background-color: #2a2a2a;
    cursor: pointer;
  }
`

const StyledButton = styled.button`
  ${styles}
`

const StyledButtonLink = styled(Link)`
  ${styles}
`

const StyledButtonExternalLink = styled.a`
  ${styles}
`
