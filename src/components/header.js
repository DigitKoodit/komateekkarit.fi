import { Link } from "gatsby"
import React from "react"
import "./styles.css"

const Header = () => (
  <header>
    <Link to="/">
      Etusivu
    </Link>
    <Link to="/tuutorit">
      Tuutorit
    </Link>
    <Link to="/muistilista">
      Muistilista
    </Link>
    <Link to="/fuksipassi">
      Fuksipassi
    </Link>
  </header>
)

export default Header
