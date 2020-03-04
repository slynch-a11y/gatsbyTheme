import React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"
 import Footer from "../components/footer"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    console.log("this.props", this.props)
   

    // const siteTitle = this.props.data.site.siteMetadata.title
    const { title, html, date, description, previous, next } = this.props.pageContext

    return (
      <div>
        <SEO title={title}
          description={description} />
        {/* <Header /> */}
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
        <Footer />
      </div>
    )
  }
}

export default BlogPostTemplate
