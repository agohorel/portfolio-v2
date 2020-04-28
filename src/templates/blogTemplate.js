import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

export default function BlogTemplate({ data }) {
  console.log(data)

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <BlogPostContainer>
      <BlogPost>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <BlogContent dangerouslySetInnerHTML={{ __html: html }}></BlogContent>
      </BlogPost>
    </BlogPostContainer>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

const BlogPostContainer = styled.div``
const BlogPost = styled.div``
const BlogContent = styled.div``
