import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"

export const FooterLinks = () => {
  return (
    <Container>
      <IconLink href="#" target="_blank" rel="noopener noreferrer">
        <Icon icon={faGithubSquare}></Icon>
      </IconLink>

      <IconLink href="#" target="_blank" rel="noopener noreferrer">
        <Icon icon={faLinkedin}></Icon>
      </IconLink>

      <IconLink href="#" target="_blank" rel="noopener noreferrer">
        <Icon icon={faTwitterSquare}></Icon>
      </IconLink>

      <IconLink href="#" target="_blank" rel="noopener noreferrer">
        <Icon icon={faInstagramSquare}></Icon>
      </IconLink>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 3.2rem;
`

const IconLink = styled.a`
  color: #1c1c1c;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 2rem;
  }

  :hover {
    color: #5c5c5c;
  }
`
