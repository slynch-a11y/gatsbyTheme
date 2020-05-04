import { faUnderline } from "@fortawesome/free-solid-svg-icons";

export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: "80%"
  },
  fonts: {
    body: 'sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: "black",
    background: "#CFC1E6", //light purple background color
    primary: "purple", //dark purple used for links in default light mode
    secondary: "orange",  //orange for hover in dark mode
    accent: "white",
    muted: "black",
    
    modes: {
      dark: {
        text: '#fff',  //white
        background: '#000',  //black
        primary: '#b19cd9',  //light purple used for links in dark mode
        secondary: 'yellow', //yellow for hover in dark mode
        accent: "black",
        muted: "white"
      }
    }
    
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: 'accent',
      ":hover, :focus": {
        outlineColor: "accent",
        outlineWidth: "3px",
        outlineStyle: "solid",
        textDecoration: "underline",
        color: "accent"
        
      },
      ":focus": {
        outline: "3px solid muted"
      },
    },
    socialNav: {
      px: 2,
      py: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: 'muted',
      ":hover, :focus": {
        outlineColor: "muted",
        outlineWidth: "3px",
        outlineStyle: "solid",
        textDecoration: "underline"
        
      },
      ":focus": {
        outline: "3px solid muted"
      },
    }
  },
  
  styles: {
    // the keys used here reference elements in MDX
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      // the style object for each element
      // can reference other values in the theme
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      fontSize: 5
    },
    a: {
      color: "primary",
      fontSize: 3,
      ":hover": {
        textDecoration: 'none',
        color: "muted"
      },
      ":focus": {
        outlineColor: "muted",
        outlineWidth: "3px",
        outlineStyle: "solid",
        textDecoration: 'none',
        
      },
        '&.active': {
          color: 'yellow',
          textDecoration: 'none'
        },
    },
    // more styles can be added as needed
  },
}