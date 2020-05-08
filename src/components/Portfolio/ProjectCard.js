import React from "react"
import styled from "styled-components"

import { ButtonLink, ButtonExternalLink } from "../Layout/Buttons"
import { ToolsUsed } from "../Portfolio/ToolsUsed"

export const ProjectCard = ({ data }) => {
  const { frontmatter: project } = data
  console.log(project)
  return (
    <Card>
      <Image></Image>
      <Name>{project.name}</Name>
      <ToolsUsed project={project}></ToolsUsed>
      <ButtonContainer>
        <ButtonExternalLink href={project.demo_url}>demo</ButtonExternalLink>
        <ButtonExternalLink href={project.repo_url}>repo</ButtonExternalLink>
        <ButtonLink path={project.path}>details</ButtonLink>
      </ButtonContainer>
    </Card>
  )
}

const Card = styled.div`
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: calc(33% - 8rem);
  margin: 4rem;
  transition: .2s ease-out all;
  transition-property: transform, box-shadow;
  
  :hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }
`
const Image = styled.div`
  background-color: #9c9c9c;
  width: 100%;
  height: 200px;
`

const Name = styled.h3`
  font-size: 2.4rem;
  margin: 1rem 0 1rem 0;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
