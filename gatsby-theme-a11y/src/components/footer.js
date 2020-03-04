import React from "react"
//  import { FaTwitter, FaLinkedinIn, FaRegEnvelope } from "react-icons";
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
class Footer extends React.Component {
  render() {
    console.log("this.props", this.props)
    const { email, twitter, linkedIn } = this.props.data.site.siteMetadata.social
 

    return (
  <footer>
    <div class="content-wrap">
      <div class="tagline">Connect with me!</div>
        <nav class="contact-info" aria-label="social">
          <ul>
            <li>
              <a href={"mailto:" + email} aria-label="Email">{email}
              {/* <FaRegEnvelope aria-hidden="true" /> */}
              </a>
            </li>
            <li>
              <a href={"https://twitter.com/" + twitter} aria-label="Twitter">Twitter
              {/* <FaTwitter aria-hidden="true" /> */}
              </a>
            </li>
            <li>
              <a href={"https://www.linkedin.com/in/" + linkedIn} aria-label="LinkedIn">LinkedIn
              {/* <FaLinkedinIn aria-hidden="true" /> */}
              </a>
            </li>
          </ul>
      </nav>
    <div>
      © {new Date().getFullYear()} Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </div>
  </footer>
)

}
}


export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            social
            {
              twitter
              linkedIn
              email
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)
Footer.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}