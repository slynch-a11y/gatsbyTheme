module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
      {
          resolve: "gatsby-theme-a11y",
          options: {
              markdownPath: "src/markdown"
              
          }
      }
  ]
}
