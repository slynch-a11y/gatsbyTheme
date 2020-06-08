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
    const [ariaPressed, setAriaPressed] = React.useState('false')

    return (
   
        <div sx={{display: "flex", justifyContent: "center"}}>
    
<Button aria-pressed={ariaPressed}
        sx={{width: "100%", borderRadius: "0", border: "none"}} onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
          setAriaPressed(colorMode === 'default' ? 'true' : 'false' )
        }}>
          { colorMode === 'default' ? <div><span sx={{marginRight: "2px"}}>Dark Mode  </span><FontAwesomeIcon icon={faMoon} aria-hidden="true" /></div> : <div><span sx={{marginRight: "2px"}}>Light Mode  </span><FontAwesomeIcon icon={faSun} aria-hidden="true" /></div>
} 



      </Button>
</div>
    )
}

   

