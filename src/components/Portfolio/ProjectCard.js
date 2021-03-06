import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { ButtonLink, ButtonExternalLink } from "../Layout/Buttons"

export const ProjectCard = ({ data }) => {
  const { frontmatter: project } = data

  return (
    <Card>
      <Link to={project.path} aria-label={project.name}>
        <ImageContainer>
          <Image fluid={project.thumbnail?.childImageSharp.fluid}></Image>
        </ImageContainer>
      </Link>
      <Name>{project.name}</Name>
      <Description>{project.short_description}</Description>
      <ButtonContainer>
        {project.demo_url !== "N/A" && (
          <ButtonExternalLink href={project.demo_url}>demo</ButtonExternalLink>
        )}
        {project.repo_url !== "N/A" && (
          <ButtonExternalLink href={project.repo_url}>repo</ButtonExternalLink>
        )}
        <ButtonLink path={project.path}>details</ButtonLink>

        {project.demo_url === "N/A" && <Spacer></Spacer>}
      </ButtonContainer>
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: calc(33% - 8rem);
  margin: 4rem;
  transition: 0.2s ease-out all;
  transition-property: transform, box-shadow;

  :hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1500px) {
    width: calc(50% - 8rem);
  }

  @media (max-width: 925px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    margin: 2rem 1rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  background-color: #9c9c9c;
  transition: 0.2s ease-out transform;

  :hover {
    transform: scale(1.35);
  }
`

const Name = styled.h3`
  font-size: 2.4rem;
  margin: 1rem 0 1rem 0;
`

const ButtonContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
`

const Spacer = styled.div`
  width: 100px;
`

const Description = styled.p`
  font-size: 1.4rem;
  color: #3c3c3c;
  margin-bottom: 6rem;
`
