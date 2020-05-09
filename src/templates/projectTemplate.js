import React from "react"
import { graphql } from "gatsby"

export default function projectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter: project } = markdownRemark

  return <div>{project.name}</div>
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        type
        title
        repo_url
        backend_tools
        frontend_tools
        description
        demo_url
        name
        other_tools
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
