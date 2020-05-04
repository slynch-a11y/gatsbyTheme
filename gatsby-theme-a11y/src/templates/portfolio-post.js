import React from "react"
import { Link } from "gatsby"
 import Layout from "../components/layout"
 import SEO from "../components/seo"
 import { Styled } from "theme-ui"

class PortfolioPostTemplate extends React.Component {
  render() {
    console.log("this.props", this.props)

    //  const siteTitle = this.props.data.site.siteMetadata.title
    const { title, html, date, previous, next } = this.props.pageContext

    return (
      <div>
        <SEO title={title} />
      <Layout location={this.props.location.pathname}>
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
              <Styled.a as={Link} to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Styled.a>
            )}
          </li>
          <li>
            {next && (
              <Styled.a as={Link} to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Styled.a>
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
