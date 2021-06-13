// import * as React from "react"
import React, { useState, useEffect } from "react"
import "./header.css"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  return (
    <div className={hasScrolled ? "Header HeaderScrolled" : "Header"}>
      <div className="HeaderGroup">
        <Link to="/">
          <img src={"/images/logo-designcode.svg"} width="30" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy">
          <button>Buy</button>
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
