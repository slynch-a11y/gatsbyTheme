import React from "react"
//  import { FaTwitter, FaLinkedinIn, FaRegEnvelope } from "react-icons";

const Footer = () => (
  <footer>
    <div class="content-wrap">
      <div class="tagline">Connect with me!</div>
        <nav class="contact-info" aria-label="social">
          <ul>
            <li>
              <a href="mailto:" aria-label="Email">Email
              {/* <FaRegEnvelope aria-hidden="true" /> */}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" aria-label="Twitter">
              {/* <FaTwitter aria-hidden="true" /> */}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
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

export default Footer
