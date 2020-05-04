import React from "react"
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Styled } from 'theme-ui'
import { Link } from "gatsby"
import { css } from '@emotion/core'
import { useColorMode } from 'theme-ui'
import LogoDefault from './logo-default'
import LogoDark from './logo-dark'
import Menu from './menu'
import Search from './search'

export default Logo => {

    
    const [colorMode, setColorMode] = useColorMode()

    return (
   
        <div sx={{marginBottom: "20px"}}>
       {colorMode === 'default' ? <LogoDark /> : <LogoDefault />}

</div>
    )
}

   

