import React from "react"
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Styled, Button } from 'theme-ui'
import { Link } from "gatsby"
import { css } from '@emotion/core'
import { useColorMode } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default Logo => {

    
    const [colorMode, setColorMode] = useColorMode()

    return (
   
        <div sx={{display: "flex", justifyContent: "center"}}>
    
<Button
        sx={{width: "100%", borderRadius: "0", border: "none"}} onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}><span sx={{marginRight: "2px"}}>Toggle Colors  </span>
          { colorMode === 'default' ? <FontAwesomeIcon icon={faMoon} aria-hidden="true" /> : <FontAwesomeIcon icon={faSun} aria-hidden="true" />
} 



      </Button>
</div>
    )
}

   

