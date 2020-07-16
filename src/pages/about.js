import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { Layout } from "../components/Layout/Layout"
import { FooterLinks } from "../components/Layout/FooterLinks"

export default function about({ data, location }) {
  const content = data.allMarkdownRemark.edges[0].node.frontmatter
  const bio = content.bio
  const portrait = content.portrait.childImageSharp.fluid
  const skills = content.skills

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
      <SkillsHeader>skills:</SkillsHeader>
      <SkillContainer>
        {skills.map((skill, idx) => {
          return (
            <Skill key={`${skill.icon.id}_${idx}`}>
              <img
                src={skill.icon.publicURL}
                alt={`${skill.skill_name} logo`}
              ></img>
              <p>{skill.skill_name}</p>
            </Skill>
          )
        })}
      </SkillContainer>
      <FooterLinks location={location}></FooterLinks>
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
  filter: grayscale(1);
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

const SkillsHeader = styled.h3`
  text-align: center;
  font-size: 3rem;
`

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    padding: 2rem;
  }
`

const Skill = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25%;

  p {
    font-size: 2rem;
    padding-left: 1rem;
  }

  img {
    height: 4rem;
  }

  @media (max-width: 1400px) {
    padding-left: 12.5%;
  }

  @media (max-width: 900px) {
    padding-left: 25%;
  }

  @media (max-width: 900px) {
    padding-left: 12.5%;
  }

  @media (max-width: 700px) {
    padding-left: 25%;
  }

  @media (max-width: 600px) {
    padding-left: 12.5%;
  }

  @media (max-width: 600px) {
    padding-left: 0;
  }

  @media (max-width: 500px) {
    p {
      font-size: 1.6rem;
    }

    img {
      height: 3rem;
    }
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
            skills {
              skill_name
              icon {
                id
                publicURL
              }
            }
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
