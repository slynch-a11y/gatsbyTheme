import React from "react"
import { Link } from "gatsby"
import Search from "./search"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faSearch, faPencilAlt, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Layout as ThemeLayout } from 'theme-ui'
import { Grid } from 'theme-ui'

  class Header extends React.Component {
    state = {
      menuOpen: false,
      searchOpen: false
    }
    toggleMenu = event => {
      const mainNav = document.getElementById('js-menu')
      const navBarToggle = document.getElementById('js-navbar-toggle')
      if (!this.state.menuOpen) {
        mainNav.classList.add("active")
        this.setState({menuOpen: true})
        navBarToggle.setAttribute("aria-expanded", "true")
      } else {
        mainNav.classList.remove("active")
       this.setState({menuOpen: false})
        navBarToggle.setAttribute("aria-expanded", "false")
      }
    }
    toggleSearch = event => {
      const searchToggle = document.getElementById('js-search-toggle')
      const searchForm = document.getElementById('js-search')

      if (!this.state.searchOpen) {
        searchForm.classList.add("search-active")
        this.setState({searchOpen: true})
        searchToggle.setAttribute("aria-expanded", "true")
      } else {
        searchForm.classList.remove("search-active")
        this.setState({searchOpen: false})
        searchToggle.setAttribute("aria-expanded", "false")

      }

    }

    render() {

      console.log("header props", this.props)
      console.log("theme", ThemeLayout)
      const { headerImage } = this.props
    return (

      <header>
    <div class="navbar" aria-label="primary">
    <div class="jump-menu">
      <a href="#main">Skip to Main Content</a>
    </div>
      <nav aria-label="primary">
      <button class="navbar-toggle" id="js-navbar-toggle" onClick={this.toggleMenu} aria-expanded="false" aria-label="menu">
      <FontAwesomeIcon icon={faAlignJustify} aria-hidden="true" fixedWidth />
      </button>
        <ul class="main-nav" id="js-menu">
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </div>
    <Grid width={[ 128, null, 192 ]}>

  <span>hello</span>
  <span>hello</span>
  <span bg='primary'>hello</span>
  <span>hello</span>

</Grid>
    <div class="brand-search-bar">
      <div class="brand-search-inner">
      <div class="logo">
        <Link to="/">
           <FontAwesomeIcon icon={faPencilAlt} aria-hidden="true" />
            My A11y Gatsby Theme</Link>
      </div>
      <button class="search-toggle" id="js-search-toggle" onClick={this.toggleSearch} aria-expanded="false" aria-label="open search">
      {this.state.searchOpen ?
      <FontAwesomeIcon icon={faWindowClose} id="search-image" aria-hidden="true" fixedWidth /> :
      <FontAwesomeIcon icon={faSearch} id="search-image" aria-hidden="true" fixedWidth /> }
      </button>
      </div>
    </div>
      <Search />
      {headerImage ? headerImage : null}
  </header>

  )
  }
}

export default Header
