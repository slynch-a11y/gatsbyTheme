import React from "react"
import { Link } from "gatsby"
import { Grid, Styled } from 'theme-ui'

import Layout from "../components/layout"
import SEO from "../components/seo"
class HomePage extends React.Component {
  
  render() {

    return(<Layout location={this.props.location.pathname}> 
     <SEO title="Home" />
     
      <Grid gap={5} width={[ 240 ]}>

  <span><h2>Home Page</h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Sed tempus urna et pharetra pharetra massa massa. Vitae et leo duis ut diam quam nulla porttitor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eleifend mi in nulla posuere sollicitudin. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Tempor nec feugiat nisl pretium fusce id velit. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Rutrum quisque non tellus orci ac auctor augue. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Ipsum suspendisse ultrices gravida dictum fusce. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Integer vitae justo eget magna fermentum iaculis eu. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.</span>

  <h3>Most Recent Blog Posts</h3>


</Grid>

    </Layout>)

  }
}

export default HomePage
