import React from "react"
import styled from "styled-components"

export const ToolsUsed = ({ project }) => {
  return (
    <Tools>
      {project.frontend_tools.length && (
        <Column>
          <ListTitle>&#8260;&#8260;frontend_tools</ListTitle>
          {project.frontend_tools.map(tool => (
            <ListItem key={tool}>{tool}</ListItem>
          ))}
        </Column>
      )}

      {project.backend_tools.length && (
        <Column>
          <ListTitle>&#8260;&#8260;backend_tools</ListTitle>
          {project.backend_tools.map(tool => (
            <ListItem key={tool}>{tool}</ListItem>
          ))}
        </Column>
      )}

      {project.other_tools.length && (
        <Column>
          <ListTitle>&#8260;&#8260;other_tools</ListTitle>
          {project.other_tools.map(tool => (
            <ListItem key={tool}>{tool}</ListItem>
          ))}
        </Column>
      )}
    </Tools>
  )
}

const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
`

const Column = styled.div``

const ListTitle = styled.p`
  font-size: 1.2rem;
  color: #9c9c9c;
`

const ListItem = styled.p`
  font-size: 1.2rem;
  color: #0a0a0a;
`
