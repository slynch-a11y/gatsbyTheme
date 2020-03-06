import React from "react"
import { Link } from "gatsby"
 import Layout from "../components/layout"
 import SEO from "../components/seo"

class PortfolioPostTemplate extends React.Component {
  render() {
    console.log("this.props", this.props)

    //  const siteTitle = this.props.data.site.siteMetadata.title
    const { title, html, date, previous, next } = this.props.pageContext

    return (
      <div>
        {/* <SEO title={title}
          description={description} /> */}
      <Layout>
        <main id="main" class="main" tabindex="-1">
          <h1>{title}</h1>
          {/* <h2>{siteTitle}</h2> */}
          <p>{date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr/>
          <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        </main>
        </Layout>
      </div>
    )
  }
}

export default PortfolioPostTemplate
