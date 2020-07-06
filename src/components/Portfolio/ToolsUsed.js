import React from "react"
import styled from "styled-components"

export const ToolsUsed = ({ project, size = "default" }) => {
  return (
    <Tools>
      {project.frontend_tools.length && (
        <Column>
          <ListItem size={size} color="light">
            &#8260;&#8260;frontend_tools
          </ListItem>
          {project.frontend_tools.map(tool => (
            <ListItem size={size} key={tool}>
              {tool}
            </ListItem>
          ))}
        </Column>
      )}

      {project.backend_tools.length && (
        <Column>
          <ListItem size={size} color="light">
            &#8260;&#8260;backend_tools
          </ListItem>
          {project.backend_tools.map(tool => (
            <ListItem size={size} key={tool}>
              {tool}
            </ListItem>
          ))}
        </Column>
      )}

      {project.other_tools.length && (
        <Column>
          <ListItem size={size} color="light">
            &#8260;&#8260;other_tools
          </ListItem>
          {project.other_tools.map(tool => (
            <ListItem size={size} key={tool}>
              {tool}
            </ListItem>
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
  font-size: ${props => (props.size === "large" ? "2rem" : "1.2rem")};
  color: ${props => (props.color === "light" ? "#9c9c9c" : "#0a0a0a")};
`
