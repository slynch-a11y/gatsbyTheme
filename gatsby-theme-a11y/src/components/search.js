  
import React from "react"  
import { graphql, StaticQuery, Link } from "gatsby"   
import { Index } from "elasticlunr" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Grid, Styled, Input, Button, Box } from 'theme-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

  class Search extends React.Component {
    state = {
      query: "",
      results: [],
      showSearch: false
    }
    getOrCreateIndex = () => {  
        return this.index  
          ? this.index  
          : 
          Index.load(this.props.searchIndex)  
      }  
    search = event => {  
        const query = event.target.value  
        this.index = this.getOrCreateIndex()  
        this.setState({  
          query,  
          results: this.index  
            .search(query, { expand: true })  
            .map(({ ref }) => {  
              return this.index.documentStore.getDoc(ref)  
            }),  
        })  
      }  
      showResults = event => {
          event.preventDefault()
        this.setState({showSearch: true})
      }
    
    render() {  
        return (  
            <div class="search-region">
            <Box as="form" class="search" id="js-search" role="search">
              <div sx={{whiteSpace: "nowrap"}}>
            <Input sx={{display: "inline", width: "auto", marginLeft: "20px", marginRight: "5px"}} type="text" placeholder="Search this site" aria-label="search" name="search" value={this.state.query} onChange={this.search} />  
            <Button sx={{backgroundColor: "white", color: "purple"}} type="submit" class="search-button" aria-label="submit" onClick={this.showResults}>
            
            <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
            </Button>
            </div>
            </Box>
              {this.state.showSearch ? 
                (<div sx={{marginTop: "20px"}}><div sx={{marginLeft: "25px"}} role="alert">Search Results:<ul sx={{listStyleType: "none"}}>  
                {this.state.results.map(page => (  
                <li key={page.id} sx={{marginLeft: "-40px"}}>  
                <Styled.a sx={{color: "accent"}} as={Link} to={"/" + page.slug}>{page.title}</Styled.a> 
                </li> 
                ))}  
                </ul> 
                </div></div>
                ) : null}
            </div>  
        )  
    }
}

export default props =>  (  
    <StaticQuery  
      query={graphql`  
          query SearchIndexQuery {  
            siteSearchIndex {  
              index  
            }  
          }  
        `}  
      render={data => (  
        <Search searchIndex={data.siteSearchIndex.index} {...props}/>  
      )}  
    />  
  )  


