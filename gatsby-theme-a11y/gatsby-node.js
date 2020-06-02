const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require("fs")
const { fmImagesToRelative } = require('gatsby-remark-relative-images');


//1. make sure the pages directory exists
//if the pages directory does not exist, it will create it

exports.onPreBootstrap = ({ reporter }, options) => {
    const contentPath = "src/markdown"
    const srcFolder = "src"
//check for src folder first, then markdown folder
    if(!fs.existsSync(srcFolder)){
        reporter.info(`creating the ${srcFolder} directory`)
        fs.mkdirSync(srcFolder)
    }
    if(!fs.existsSync(contentPath)){
      reporter.info(`creating the ${contentPath} directory`)
      fs.mkdirSync(contentPath)
}
}

//create a slug field

exports.onCreateNode = ({ node, getNode, actions }) => {
  //fmImagesToRelative(node);
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

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions

  

  const blogPath = "blog"
  const blogPost = require.resolve(`./src/templates/blog-post.js`)
  const blogResult = await graphql(
    `
      query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {parent: {}, fileAbsolutePath: {regex: "/blog/"}})
          {
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
                description,
                featuredImage {
                  childImageSharp {
                    fixed(height: 150, width: 200, cropFocus: CENTER) {
                      base64
                      aspectRatio
                      srcWebp
                      srcSetWebp
                      src
                      srcSet
                     width
                     height
                    }
                    fluid(maxWidth: 800) {
                      src
                     srcSet
                     srcSetWebp
                     base64
                      aspectRatio
                 
                    }
                   
                  }
                },
                featuredImageAlt
              }
              excerpt(pruneLength: 150)
            }
          }
        }
      }
    `
  )

  if (blogResult.errors) {
    throw blogResult.errors
  }

  // Create blog posts pages.
  const blogPosts = blogResult.data.allMarkdownRemark.edges

  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

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
        blogPath,
        previous,
        next,
        featuredImage: post.node.frontmatter.featuredImage,
        featuredImageAlt: post.node.frontmatter.featuredImageAlt,
        excerpt: post.node.excerpt
      },
    })
  })


  createPage({
    path: blogPath,
    component: require.resolve(`./src/templates/blog-listing.js`),
    context: {
      blogs: blogPosts
    }
  })

  const basePath ="/"
  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/home-page.js`),
    context: {
      blogs: blogPosts
    }
  })

    const portfolioPath = "portfolio"
   
    const portfolioPost = require.resolve(`./src/templates/portfolio-post.js`)
    const result = await graphql(
      `
        query {

          allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {parent: {}, fileAbsolutePath: {regex: "/portfolio/"}})
          {
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
                  description,
                  featuredImage {
                    childImageSharp {
                      fixed(height: 150, width: 200, cropFocus: CENTER) {
                        base64
                        aspectRatio
                        srcWebp
                        srcSetWebp
                        src
                        srcSet
                       width
                       height
                      }
                    }
                  },
                  featuredImageAlt
                }
                excerpt(pruneLength: 150)
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
    const portfolioPosts = result.data.allMarkdownRemark.edges

    createPage({
      path: portfolioPath,
      component: require.resolve(`./src/templates/portfolio-listing.js`),
      context: {
        portfolio: portfolioPosts
      }
    })

    portfolioPosts.forEach((post, index) => {
      const previous = index === portfolioPosts.length - 1 ? null : portfolioPosts[index + 1].node
      const next = index === 0 ? null : portfolioPosts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: portfolioPost,
        context: {
          title: post.node.frontmatter.title,
          date: post.node.frontmatter.date,
          tags: post.node.frontmatter.tags,
          description: post.node.frontmatter.description,
          html: post.node.html,
          slug: post.node.fields.slug,
          portfolioPath,
          previous,
          next,
        },
      })
    })
  }
















