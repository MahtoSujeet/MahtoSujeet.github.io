import React from "react"
import Logo from "./Logo.jsx"

import "../css/Nav.css"

export default function Nav(props) {
  return (
    <nav className="nav">
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
