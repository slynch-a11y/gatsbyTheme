import React from "react"
import { Link } from "gatsby"
import Search from "./search"
// import { StaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faSearch, faPencilAlt, faWindowClose } from "@fortawesome/free-solid-svg-icons";
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Styled, Container } from 'theme-ui'
import { css } from '@emotion/core'
import Menu from "./menu"
import Logo from "./logo"
import { AspectRatio } from 'theme-ui'
import Toggle from "./toggle"
import { Box } from 'theme-ui'

  class Header extends React.Component {
    state = {
      menuOpen: false,
      searchOpen: false
    }

    
    toggleMenu = event => {
      const mainNav = document.getElementById('js-menu')
      const navBarToggle = document.getElementById('js-navbar-toggle')
      if (!this.state.menuOpen) {
        // mainNav.style.display="block"
        this.setState({menuOpen: true})
        navBarToggle.setAttribute("aria-expanded", "true")
      } else {
        // mainNav.style.display="none"
       this.setState({menuOpen: false})
        navBarToggle.setAttribute("aria-expanded", "false")
      }
    }
    toggleSearch = event => {
      const searchToggle = document.getElementById('js-search-toggle')
      const searchForm = document.getElementById('js-search')

      if (!this.state.searchOpen) {
        // searchForm.classList.add("search-active")
        this.setState({searchOpen: true})
        searchToggle.setAttribute("aria-expanded", "true")
      } else {
        // searchForm.classList.remove("search-active")
        this.setState({searchOpen: false})
        searchToggle.setAttribute("aria-expanded", "false")

      }

    }

    render() {

    
      const { headerImage } = this.props
    return (

      <header>
        <div css={css`margin: auto; width: 25%;`} >
   <Styled.a 
      css={css`
      top: auto;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
  position: absolute;
      &:focus {
        clip: auto;
  position: relative;
  height: auto;
  overflow: visible;
  padding: 10px;
  margin: 10px;
  display: block;
  text-decoration: none;
  text-align: center;
  
      }
    `} href="#main">Skip to Main Content</Styled.a></div>
    <div sx={{color: 'background',
        bg: 'primary',}}>
  <div sx={{width: "85%", margin: "auto"}}>
<div sx={{
        p: 4,
       
    display: 'flex',
    justifyContent: 'space-between',
      
      '@media screen and (max-width: 800px)': {
    flexWrap: "wrap",
      justifyContent: 'center',
      }
  }}>

<Logo />
<Menu />

<Search />
</div>

</div>

</div>
  </header>

  )
  }
}

export default Header
