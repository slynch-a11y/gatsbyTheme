module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
      {
          resolve: "@slynch-github/gatsby-theme-a11y",
          options: {
              markdownPath: "src/markdown"
              
          }
      }
  ]
}
