import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { Layout } from "../components/Layout/Layout"

export default function about({ data }) {
  const content = data.allMarkdownRemark.edges[0].node.frontmatter
  const bio = content.bio
  const portrait = content.portrait.childImageSharp.fluid
  return (
    <Layout>
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
`

const Frame = styled.div`
  width: 20vw;
  filter: invert(0.2);
  clip-path: circle(10vw at center);
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
