import React from "react"
import styled from "styled-components"

export const ToolsUsed = ({ project, size = "default" }) => {
  return (
    <Tools size={size}>
      {project.frontend_tools[0] !== "N/A" && (
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
      {project.frontend_tools[0] === "N/A" && <Column></Column>}

      {project.backend_tools[0] !== "N/A" && (
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

      {project.other_tools[0] !== "N/A" && (
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
      {project.backend_tools[0] === "N/A" && <Column></Column>}
      {project.other_tools[0] === "N/A" && <Column></Column>}
    </Tools>
  )
}

const Tools = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${props =>
    props.size === "large" ? "1rem 0 1rem 0" : "1rem 0 5rem 0"};

  @media (max-width: 900px) {
    flex-direction: ${props => (props.size === "large" ? "column" : "row")};
    margin: 0;

    div {
      width: 100%;
      text-align: center;
    }

    div:not(:last-child) {
      margin-bottom: 2rem;
    }

    p {
      text-align: left;
    }
  }
`

const Column = styled.div`
  min-width: 23%;
`

const ListItem = styled.p`
  font-size: ${props => (props.size === "large" ? "2rem" : "1.2rem")};
  color: ${props => (props.color === "light" ? "#9c9c9c" : "#0a0a0a")};
`
