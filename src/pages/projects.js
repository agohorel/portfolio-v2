import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/Layout/Layout"
import { ProjectCard } from "../components/Portfolio/ProjectCard"

export default function devProjects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <ProjectCardContainer>
        {projects.map(project => (
          <ProjectCard key={project.id} data={project}></ProjectCard>
        ))}
      </ProjectCardContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "portfolio" } } }) {
      nodes {
        frontmatter {
          name
          title
          description
          repo_url
          demo_url
          backend_tools
          frontend_tools
          other_tools
          path
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        id
      }
    }
  }
`

const ProjectCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 8rem;
`
