import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const print = () => {
    document.querySelector("header").classList.add("hidden")
    window.print()
    window.location.reload()
  }
  return (
    <header>
      <ul>
        <li>
          <h1>
            <Link>{siteTitle}</Link>
          </h1>
        </li>
        <li>
          <button onClick={print}>Cetak</button>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
