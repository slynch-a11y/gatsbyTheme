const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---gatsby-theme-a-11-y-src-templates-blog-listing-js": hot(preferDefault(require("/Users/sarahlynch/gatsbytheme_feb2020/gatsby-theme-a11y/src/templates/blog-listing.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sarahlynch/gatsbytheme_feb2020/site/.cache/dev-404-page.js")))
}

