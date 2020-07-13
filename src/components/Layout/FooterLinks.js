import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"

export const FooterLinks = ({ placement, location }) => {
  return (
    <Container placement={placement} location={location?.pathname}>
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

const IconLink = styled.a`
  text-decoration: none;

  :not(:last-child) {
    margin-right: 2rem;
  }

  :hover {
    color: #5c5c5c;
  }
`

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  background-image: ${props =>
    props.placement === "sideNav"
      ? "none"
      : `linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 100%
      )`};

  ${IconLink} {
    color: ${props => (props.placement === "sideNav" ? "#fff" : "#1c1c1c")};
  }

  @media (max-width: 1300px) {
    flex-direction: ${props =>
      props.location === "/about" ? "column" : "row"};

    ${IconLink} {
      margin-top: ${props =>
        props.location === "/about" ? "1rem" : "inherit"};
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  font-size: 3.2rem;
`
