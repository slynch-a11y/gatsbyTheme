import React from "react"
import Header from "./header"
import SmallHeader from "./small-header"
import Footer from "./footer"
import Toggle from "./toggle"
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Styled, Input, Button, Box, NavLink, Flex, Container } from 'theme-ui'

const Layout = ({children, location}) => {

  // const { location, title, children } = this.props

  console.log("layout props: ", location)
  //need to get location data for each blog post, portfolio, etc. (in gatsby-node.js)

return (
  <div>
 
    { location === "/" ? <Header /> : <SmallHeader />
    }
   <Container>
   
    <main id="main" sx={{marginBottom: "50px"}}>
    <Toggle />
    <div sx={{marginTop: "30px"}}>
    {children}
    </div>
    </main>
   
    <Footer />
    </Container>
  </div>

)
}


export default Layout
