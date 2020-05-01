import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/Layout/Layout"

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <BlogPostContainer>
        <BlogPost>
          <BlogHeader>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
          </BlogHeader>
          <BlogContent dangerouslySetInnerHTML={{ __html: html }}></BlogContent>
        </BlogPost>
      </BlogPostContainer>
    </Layout>
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

const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  p,
  code {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  blockquote {
    background-color: lightgrey;
    border-left: 10px solid rgb(128, 128, 128);
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }

  blockquote:before {
    color: #191919;
    content: open-quote;
    font-size: 8rem;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
`

const BlogHeader = styled.div`
  align-self: flex-start;
`

const BlogContent = styled.div``
