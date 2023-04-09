import "../css/Nav.css"

import React from "react"
import Logo from "./Logo.jsx"

export default function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <div className="NavOpts">
        <NavOpt link="#" name="Home" />
        <NavOpt link="#" name="Contact Me" />
      </div>
    </nav >
  )
}

function NavOpt(props) {
  return (
    <a className="NavOpt" href={props.link}>{props.name}</a>
  )
}
