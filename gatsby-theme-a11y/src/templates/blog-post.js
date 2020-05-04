import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Styled } from "theme-ui"

class BlogPostTemplate extends React.Component {
  render() {
    


    // const siteTitle = this.props.data.site.siteMetadata.title
    const { title, html, date, description, previous, next, slug } = this.props.pageContext
    console.log("this.props blogPost", this.props.pageContext)
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

export default BlogPostTemplate
