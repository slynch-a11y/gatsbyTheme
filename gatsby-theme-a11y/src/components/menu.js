import React from "react"
import { Grid, Styled } from 'theme-ui'
import { Link } from "gatsby"
import { NavLink, Flex } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { css } from '@emotion/core'
const Menu = () => (

  <div css={css`margin-left: -25px; margin-top: -25px;`}>

<Flex as='nav' aria-label="primary">
  <ul sx={{listStyleType: "none"}}>
    <li sx={{display: "inline-block"}}>
  <NavLink as={Link} to="/blog" p={20}>
    Blog
  </NavLink>
  </li>
  <li sx={{display: "inline-block"}}>
  <NavLink as={Link} to="/portfolio" p={20}>
    Portfolio
  </NavLink>
  </li>
  </ul>
</Flex>


  </div>

)

export default Menu
