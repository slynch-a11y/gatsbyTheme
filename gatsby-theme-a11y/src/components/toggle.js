import React from "react"
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Grid, Styled, Button } from 'theme-ui'
import { Link } from "gatsby"
import { css } from '@emotion/core'
import { useColorMode } from 'theme-ui'


export default Logo => {

    
    const [colorMode, setColorMode] = useColorMode()

    return (
   
        <div sx={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
    
<Button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}>Toggle Colors
        {/* Toggle {colorMode === 'default' ? 'Dark' : 'Light'} */}
      </Button>
</div>
    )
}

   

