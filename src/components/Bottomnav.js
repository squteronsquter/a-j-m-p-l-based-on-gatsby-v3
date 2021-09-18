import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="bottom-nav-center"></div>
      <div className="bottom-nav-links">
        <Link
          to="/rodo"
          className="bottom-nav-link"
          activeClassName="active-link"
        >
          rodo
        </Link>

        <Link
          to="/szkolenia"
          className="bottom-nav-link"
          activeClassName="active-link"
        >
          szkolenia/warsztaty
        </Link>

        <Link
          to="/newsletter"
          className="nav-link"
          activeClassName="active-link"
        >
          newsletter
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
