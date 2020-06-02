import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Styled, Card, Text, Button } from 'theme-ui'
import Img from "gatsby-image"

class PortfolioListing extends React.Component {
  render() {
    const portfolio = this.props.pageContext.portfolio
    console.log("PORTFOLIO LISTINGS: ", portfolio)
    return(<Layout location={this.props.location.pathname}><SEO title="Portfolio" />
    <Styled.h1>Portfolio</Styled.h1>
    <p>What I create when I'm not sleeping.</p>
 <div sx={{mx: 'auto', maxWidth: 'container'}}>
      <ul sx={{
    listStyle: 'none',
    display: 'grid',
    gridGap: 3,
    gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
    m: 0,
    px: 3,
    py: 4,
  }}>
    {
    portfolio.map((port, index) =>{
      return (
        <li key={index}>
         <Card sx={{
    maxWidth: 216,
  }}>
          <Img fixed={port.node.frontmatter.featuredImage.childImageSharp.fixed} alt={port.node.frontmatter.featuredImageAlt} />
         <Styled.h2 sx={{color: "black"}}>{port.node.frontmatter.title}</Styled.h2> 
         <Text sx={{color: "black"}}>GitHub | Demo</Text> 
         </Card>
          </li>
      )
    })


  }


</ul>
</div>


    </Layout>)

  }
}

export default PortfolioListing
