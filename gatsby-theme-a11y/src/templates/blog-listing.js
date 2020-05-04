import React from "react"
import { Link } from "gatsby"
//import Header from "./header"
// import Footer from "./footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
class BlogListing extends React.Component {
  render() {
    return(<Layout location={this.props.location.pathname}><SEO title="Blog" /> <h2>my blog listing</h2></Layout>)

  }
}

export default BlogListing
