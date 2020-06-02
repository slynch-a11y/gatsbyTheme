import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Styled } from "theme-ui"
import Img from "gatsby-image"

class BlogPostTemplate extends React.Component {
  render() {
    


    // const siteTitle = this.props.data.site.siteMetadata.title
    const { title, html, date, description, previous, next, slug, attachments, featuredImage, featuredImageAlt } = this.props.pageContext
    console.log("this.props blogPost", featuredImage.childImageSharp.fixed)
    return (
      <div>
        <SEO title={title} />
      <Layout location={this.props.location.pathname}>
       
          <Styled.h1>{title}</Styled.h1>
          {/* <h2>{siteTitle}</h2> */}
          <p>{date}</p>
          <Img fluid={featuredImage.childImageSharp.fluid} alt={featuredImageAlt} />

          
       
          {/* {
            attachments.map((elem, index) => {
              return (
                <div key={index}>
<img src={elem.publicURL} />
</div>
              )
              
            })
          } */}
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
       
       </Layout>
      </div>
    )
  }
}

export default BlogPostTemplate
