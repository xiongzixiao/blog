import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import MobileSocialLinks from './MobileSocialLinks'
import MobilePageLinks from './MobilePageLinks'
import SocialLinks from './SocialLinks'
import MobileBio from './MobileBio'
import './header.css'

const Header = ({
  siteTitle, author, contacts,
}) => (
  <header
    className="head-main"
  >
    <div
      className="head-elements"
      style={{
        margin: '0',
        padding: '.75rem',
      }}
    >
      <h1 className="head-logo ml-4" style={{ margin: 0 }}>
        <Link
          to="/"
          className="head-logo-link"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <SocialLinks contacts={contacts} />
    </div>
    <MobileSocialLinks contacts={contacts} />
    <MobilePageLinks />
    <MobileBio author={author} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  // tagline: PropTypes.string,
  author: PropTypes.string,
  contacts: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
  // tagline: '',
  author: '',
  contacts: '',
}

export default Header
