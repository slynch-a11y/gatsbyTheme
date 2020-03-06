import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => (
  <div>
    <Header />
    <h1>Layout Component</h1>
    {children}
    <Footer />

  </div>

)

export default Layout
