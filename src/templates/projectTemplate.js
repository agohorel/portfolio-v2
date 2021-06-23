import React, { useEffect, useCallback } from "react"
import { graphql, navigate } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDesktop,
  faCodeBranch,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons"

import { Layout } from "../components/Layout/Layout"
import { ToolsUsed } from "../components/Portfolio/ToolsUsed"
import { ExtLink, StyledLink } from "../styles/common"

export default function ProjectTemplate({ data, pageContext, location }) {
  const { markdownRemark } = data
  const { frontmatter: project } = markdownRemark

  const keyboardNavigation = useCallback(
    e => {
      const goToPreviousItem = () => {
        navigate(pageContext.prev.node.frontmatter.path)
      }

      const goToNextItem = () => {
        navigate(pageContext.next.node.frontmatter.path)
      }

      switch (e.key) {
        case "ArrowLeft":
          goToPreviousItem()
          break
        case "ArrowRight":
          goToNextItem()
          break
        default:
          break
      }
    },
    [pageContext]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyboardNavigation)

    return () => document.removeEventListener("keydown", keyboardNavigation)
  }, [keyboardNavigation])

  return (
    <Layout location={location}>
      <Title>{project.name.replace(/ /g, "_")}</Title>

      <ProjectContainer>
        <SubContainer>
          <Image fluid={project.image[0].childImageSharp.fluid}></Image>
        </SubContainer>
        <SubContainer>
          <Links>
            <div>
              <InternalLink
                to={pageContext.prev.node.frontmatter.path}
                style={{ paddingRight: "0.5rem" }}
              >
                <Icon icon={faBackward}></Icon>
                prev
              </InternalLink>
            </div>
            <div>
              <InternalLink
                to={pageContext.next.node.frontmatter.path}
                style={{ paddingLeft: "0.5rem" }}
              >
                next
                <Icon icon={faForward}></Icon>
              </InternalLink>
            </div>

            {project.demo_url !== "N/A" ? (
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
            ) : (
              <Spacer></Spacer>
            )}

            {project.repo_url !== "N/A" && (
              <div>
                <Link
                  href={project.repo_url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon icon={faCodeBranch}></Icon>
                  repo
                </Link>
              </div>
            )}
          </Links>

          {project.description
            .split("\n")
            .filter(paragraph => paragraph !== "")
            .map(p => {
              return <Description key={p.substring(0, 50)}>{p}</Description>
            })}
          <ToolsUsed project={project} size="large"></ToolsUsed>
        </SubContainer>
      </ProjectContainer>
    </Layout>
  )
}

const ProjectContainer = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`

const SubContainer = styled.div`
  width: 60%;
  padding: 2rem;

  :last-of-type {
    width: 40%;
  }

  @media (max-width: 1500px) {
    width: 50%;

    :last-of-type {
      width: 50%;
    }
  }

  @media (max-width: 1200px) {
    width: 67%;

    :first-of-type {
      padding-bottom: 0;
    }

    :last-of-type {
      width: 67%;
    }
  }

  @media (max-width: 665px) {
    width: 100%;

    :last-of-type {
      width: 100%;
    }
  }
`

const Title = styled.h1`
  margin-top: 4rem;
  font-size: 6rem;
  text-transform: uppercase;
  margin-left: calc(60% + 2rem);

  @media (max-width: 1500px) {
    margin-left: calc(50% + 2rem);
  }

  @media (max-width: 1200px) {
    margin-top: 2rem;
    margin-left: 0;
    text-align: center;
    font-size: calc(5vw + 12px);
  }
`

const Description = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;

  :last-of-type {
    margin-bottom: 4rem;
  }
`

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 2rem;
  justify-items: center;
`

const LinkStyles = `
  font-size: 3rem;
  background-color: #1a1a1a;
  color: #eee;
  display: inline;
  padding: 2px 3px 2px 2px;
  

  @media (max-width: 1200px) {
    font-size: calc(1vw + 14px);
  }

  @media (max-width: 400px) {
    padding: 5px;

    svg {
      display: none;
    }
  }
`

const Link = styled(ExtLink)`
  ${LinkStyles}
`

const InternalLink = styled(StyledLink)`
  ${LinkStyles}

  svg {
    margin: 0;
    padding: 0.5rem;
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin-left: ${props => (props.repoicon ? "10px" : "2px")};
  margin-right: ${props => (props.repoicon ? "1.35rem" : "1rem")};
  padding: 2px;
`

const Spacer = styled.div`
  width: 17%;
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
            fluid(maxWidth: 1600, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      id
    }
  }
`
