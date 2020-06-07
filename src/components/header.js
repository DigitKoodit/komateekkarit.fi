import { Link } from "gatsby"
import React from "react"
import "./styles.css"

const Header = () => (
  <header>
    <Link to="/">
      Orientaatioviikko
    </Link>
    <Link to="/tuutorit">
      Tuutorit
    </Link>
    <Link to="/muistilista">
      Muistilista
    </Link>
  </header>
)

export default Header
