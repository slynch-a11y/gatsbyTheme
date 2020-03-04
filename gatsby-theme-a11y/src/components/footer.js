import React from "react"
//  import { FaTwitter, FaLinkedinIn, FaRegEnvelope } from "react-icons";
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


class Footer extends React.Component {
  render() {
    console.log("this.props", this.props)
    const { myEmail, myTwitter, myLinkedIn } = this.props.data.site.siteMetadata.social
 

    return (
  <footer>
    <div class="content-wrap">
      <div class="tagline">Connect with me!</div>
        <nav class="contact-info" aria-label="social">
          <ul>
            <li>
              <a href={"mailto:" + myEmail} aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={"https://twitter.com/" + myTwitter} aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={"https://www.linkedin.com/in/" + myLinkedIn} aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
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
              myTwitter
              myLinkedIn
              myEmail
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