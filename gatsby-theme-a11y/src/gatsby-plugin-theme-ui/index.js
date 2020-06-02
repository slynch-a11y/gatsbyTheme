import { faUnderline } from "@fortawesome/free-solid-svg-icons";


// dark orange/accent color: #EF6E4E

export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: "80%"
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  colors: {
    text: "black",  //black text in main region
    background: "#e0fbfc", //light blue background color of main region
    primary: "#3d5a80", //dark blue header color
    secondary: "#98c1d9",  //light blue color
    headerText: "#fff", //white header text
    accent: "white",
    muted: "#3d5a80",
    
    modes: {
      dark: {
        text: '#fff',  //white text in main region
        background: '#293241',  //dark blue background color of main region
        primary: '#98c1d9',  //light blue header color
        secondary: '#293241', //dark blue color
        headerText: "black", //black header text
        accent: "black",
        muted: "#98c1d9"
      }
    }
    
  },
  cards: {
    primary: {
      padding: 2,
      backgroundColor: "white",
      borderRadius: 2,
      boxShadow: '0 0 8px black',
    },
    
  },
    forms: {
      label: {
        fontSize: 1,
        fontWeight: 'bold',
        color: 'accent'
      },
      input: {
        borderColor: 'accent',
        borderWidth: '1px',
        backgroundColor: 'primary',
        ":hover, :focus": {
          outlineWidth: "3px",
          outlineColor: "accent",
          outlineStyle: "solid        "
        },
        '&::placeholder': {
          color: 'accent',
          fontWeight: '700'
         
          
        },
      },
    },
    buttons: {
      primary: {
        color: 'black',
        bg: '#F5AB98',
        borderColor: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
        ":hover, :focus": {
          outlineColor: "black",
        outlineWidth: "3px",
        outlineStyle: "solid",
        }
      },
      header: {
        color: 'text',
        bg: 'secondary',
        ":hover, :focus": {
          outlineColor: "headerText",
        outlineWidth: "3px",
        outlineStyle: "solid",
        }
      },
    },
  links: {
    nav: {
      px: 3,
      py: 2,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      color: 'accent',
      fontSize: '2',
     
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
      color: 'primary',
      fontSize: "5",
      px: 3,
      py: 2,
      ":hover, :focus": {
        outlineColor: "primary",
        outlineWidth: "3px",
        outlineStyle: "solid",
      },
    
    }
  },
  
  styles: {
    // the keys used here reference elements in MDX
    root: {
      
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      // the style object for each element
      // can reference other values in the theme
      
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      fontSize: 5
    },
    h2: {
      fontSize: 4
    },
    h3: {
      fontSize: 3
    },
    a: {
      color: "primary",
      
      ":hover": {
        textDecoration: 'none',
        
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