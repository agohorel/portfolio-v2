import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/Layout/Layout"
import { ProjectCard } from "../components/Portfolio/ProjectCard"

export default function devProjects({ data, location }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
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
          short_description
          repo_url
          demo_url
          backend_tools
          frontend_tools
          other_tools
          path
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 90) {
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

  @media (max-width: 1050px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 925px) {
    padding: 4rem 4rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
`
