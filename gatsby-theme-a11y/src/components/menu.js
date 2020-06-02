import React from "react"
import { Grid, Styled } from 'theme-ui'
import { Link } from "gatsby"
import { NavLink, Flex } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'
const Menu = () => (

  <div css={css`margin-bottom: -25px; margin-left: -30px;`}>

<Flex as='nav' aria-label="primary">
  <ul sx={{listStyleType: "none"}}>
    <li sx={{display: "inline-block"}}>
  <NavLink as={Link} to="/blog" p={2}>
    Blog
  </NavLink>
  </li>
  <li sx={{display: "inline-block"}}>
  <NavLink as={Link} to="/portfolio" p={2}>
    Portfolio
  </NavLink>
  </li>
  </ul>
</Flex>


  </div>

)

export default Menu
