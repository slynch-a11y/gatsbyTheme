import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
class PortfolioListing extends React.Component {
  render() {
    return(<Layout location={this.props.location.pathname}><SEO title="Portfolio" /><h2>my portfolio listing</h2></Layout>)

  }
}

export default PortfolioListing
