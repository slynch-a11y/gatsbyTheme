
module.exports = {
  siteMetadata: {
    title: `Gatsby A11y-Ready Theme`,
    author: `Sarah Lynch`,
    url: "https://www.sarahlynch.dev",
    description: `An accessibility-ready Gatsby theme.`,
    image: "/images/bunnies.jpg",
    social: {
      myTwitter: `sarah_e_lynch`,
      myLinkedIn: `sarah-lynch-7257028`,
      myEmail: `myemail@email.com`
    },
  },
  plugins: [
      {
          resolve: "gatsby-source-filesystem",
          options: {
              path: "src/markdown",
              name: `markdown`
          }
      },
     `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          useMozJpeg: false,
          stripMetadata: true,
          defaultQuality: 75,
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
        options: {
         fields: [`title`, `tags`, `html`],
          resolvers: {
            MarkdownRemark: {
              title: node => node.frontmatter.title,
              tags: node => node.frontmatter.tags,
              html: node => node.internal.content,
              slug: node => node.fields.slug
            },
          },
        },
      },
    ],
  }
