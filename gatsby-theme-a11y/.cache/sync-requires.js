const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-listing-js": hot(preferDefault(require("/Users/sarahlynch/gatsbytheme_feb2020/gatsby-theme-a11y/src/templates/blog-listing.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/sarahlynch/gatsbytheme_feb2020/gatsby-theme-a11y/src/templates/blog-post.js"))),
  "component---src-templates-portfolio-listing-js": hot(preferDefault(require("/Users/sarahlynch/gatsbytheme_feb2020/gatsby-theme-a11y/src/templates/portfolio-listing.js"))),
  "component---src-templates-portfolio-post-js": hot(preferDefault(require("/Users/sarahlynch/gatsbytheme_feb2020/gatsby-theme-a11y/src/templates/portfolio-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sarahlynch/gatsbytheme_feb2020/gatsby-theme-a11y/.cache/dev-404-page.js")))
}

