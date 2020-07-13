import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { Layout } from "../components/Layout/Layout"

export default function about({ data, location }) {
  const content = data.allMarkdownRemark.edges[0].node.frontmatter
  const bio = content.bio
  const portrait = content.portrait.childImageSharp.fluid
  return (
    <Layout location={location}>
      <Container>
        <div>
          <Frame>
            <Image fluid={portrait}></Image>
          </Frame>
        </div>
        <p>{bio}</p>
      </Container>
    </Layout>
  )
}

const Container = styled.main`
  padding: 8rem;
  display: flex;
  align-items: center;

  p {
    font-size: 4rem;
    margin-left: 8rem;
  }

  @media (max-width: 1300px) {
    flex-direction: column;

    div {
      margin-bottom: 2rem;
    }

    p {
      margin-left: 0;
      padding-right: 8rem;
      font-size: 3rem;
    }
  }

  @media (max-width: 700px) {
    padding: 4rem;

    p {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem;
    p {
      font-size: 2rem;
    }
  }
`

const Frame = styled.div`
  width: 20vw;
  filter: invert(0.2);
  clip-path: circle(10vw at center);

  @media (max-width: 1300px) {
    width: 32vw;
    clip-path: circle(16vw at center);
  }

  @media (max-width: 600px) {
    width: 50vw;
    clip-path: circle(25vw at center);
  }
`

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "about" } } }) {
      edges {
        node {
          frontmatter {
            type
            bio
            portrait {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
