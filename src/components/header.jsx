import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <ul>
      <li>
        <h1>
          <Link>{siteTitle}</Link>
        </h1>
      </li>
      <li>
        <Link>Hasil</Link>
      </li>
      <li>
        <Link>Settings</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
