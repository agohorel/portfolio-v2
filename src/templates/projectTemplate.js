import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faCodeBranch } from "@fortawesome/free-solid-svg-icons"

import { Layout } from "../components/Layout/Layout"
import { ToolsUsed } from "../components/Portfolio/ToolsUsed"
import { ExtLink } from "../styles/common"

export default function projectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter: project } = markdownRemark

  console.log(project)

  return (
    <Layout>
      <Title>{project.name.replace(/ /g, "_")}</Title>
      <ProjectContainer>
        <SubContainer>
          <Image fluid={project.image[0].childImageSharp.fluid}></Image>
        </SubContainer>
        <SubContainer>
          <Description>{project.description}</Description>
          <ToolsUsed project={project} size="large"></ToolsUsed>
          <Links>
            <div>
              <Link
                href={project.demo_url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon icon={faDesktop}></Icon>
                demo
              </Link>
            </div>
            <div>
              <Link
                href={project.repo_url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon repoicon icon={faCodeBranch}></Icon>
                repo
              </Link>
            </div>
          </Links>
        </SubContainer>
      </ProjectContainer>
    </Layout>
  )
}

const ProjectContainer = styled.div`
  display: flex;
`

const SubContainer = styled.div`
  width: 50%;
  padding: 2rem;
`

const Title = styled.h1`
  margin-top: 4rem;
  font-size: 6rem;
  text-transform: uppercase;
  margin-left: calc(50% + 2rem);
`

const Description = styled.p`
  font-size: 1.4rem;
  margin-bottom: 4rem;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`

const Link = styled(ExtLink)`
  font-size: 3rem;
  background-color: #1a1a1a;
  color: #eee;
  display: inline;
`

const Icon = styled(FontAwesomeIcon)`
  margin-left: ${props => (props.repoicon ? "10px" : "2px")};
  margin-right: ${props => (props.repoicon ? "1.35rem" : "1rem")};
  padding: 2px;
`

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        type
        title
        repo_url
        backend_tools
        frontend_tools
        other_tools
        description
        demo_url
        name
        path
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
    }
  }
`
