import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

class HomePage extends React.Component {
  render() {
    return(<Layout> <h2>Home Page</h2>
    <Link to="/blog">Blog</Link>
    <Link to="/portfolio">Portfolio</Link>

    </Layout>)

  }
}

export default HomePage
