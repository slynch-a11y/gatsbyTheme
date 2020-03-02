const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require("fs")

//1. make sure the pages directory exists
//if the pages directory does not exist, it will create it

exports.onPreBootstrap = ({ reporter }, options) => {
    const contentPath = options.contentPath || "pages"

    if(!fs.existsSync(contentPath)){
        reporter.info(`creating the ${contentPath} directory`)
        fs.mkdirSync(contentPath)
    }
}

//create a slug field

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

//query for results and create pages

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = require.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      query {
        allMarkdownRemark{
          edges {
            node {
              fields {
                slug
              }
              html
              frontmatter {
                title,
                tags,
                date(formatString: "MMMM DD, YYYY"),
                description
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        title: post.node.frontmatter.title,
        date: post.node.frontmatter.date,
        tags: post.node.frontmatter.tags,
        description: post.node.frontmatter.description,
        html: post.node.html,
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}






