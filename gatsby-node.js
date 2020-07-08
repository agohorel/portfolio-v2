const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)

  const blogs = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (blogs.errors) {
    reporter.panicOnBuild("Error while running graphql query")
    return
  }

  blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  // not sure why but fragments don't seem to work here?
  const projects = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "portfolio" } } }
      ) {
        edges {
          node {
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
                    base64
                    aspectRatio
                    presentationHeight
                    presentationWidth
                    src
                    srcSet
                  }
                }
              }
              image {
                childImageSharp {
                  fluid {
                    base64
                    aspectRatio
                    presentationHeight
                    presentationWidth
                    src
                    srcSet
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `)

  if (projects.errors) {
    reporter.panicOnBuild("Error while running graphql query")
    return
  }

  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
