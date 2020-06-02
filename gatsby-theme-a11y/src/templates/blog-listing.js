import React from "react"
import { Link } from "gatsby"
//import Header from "./header"
// import Footer from "./footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Styled } from 'theme-ui'
import Img from "gatsby-image"

class BlogListing extends React.Component {
  render() {
   
    const blogListings = this.props.pageContext.blogs
console.log("BLOG LISTINGS: ", blogListings)

    return(<Layout location={this.props.location.pathname}><SEO title="Blog" /> <Styled.h1>Blog</Styled.h1>
    
     <ul
  sx={{
    listStyle: 'none',
    display: 'grid',
    gridGap: 5,
    gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
    m: 0,
    px: 3,
    py: 4,
  }}>
    {
    blogListings.map((blog, index) =>{
      return (
        <li key={index}>
         
          <Styled.h2 sx={{marginBottom: "0.5rem"}}> <Styled.a as={Link} to={blog.node.fields.slug}>{blog.node.frontmatter.title}</Styled.a></Styled.h2>
          <small sx={{ fontWeight: 'bold' }}>{blog.node.frontmatter.date}</small>
          <p>{blog.node.excerpt}</p>
          </li>
      )
    })

  }
  </ul>
    </Layout>)

  }
}

export default BlogListing
