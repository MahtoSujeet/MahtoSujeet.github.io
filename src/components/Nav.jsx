import "../css/Nav.css"
import { Spin as Hamburger } from 'hamburger-react'

import React, { useState } from "react"
import Logo from "./Logo.jsx"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="Nav">
      <Logo />
      <div className={`NavOpts ${isOpen && "open"}`}>
        <a className="navOpt" href="#" onClick={closeMenu}>Home</a>
        <a className="navOpt" href="#Skills" onClick={closeMenu}>Skills</a>
        <a className="navOpt" href="#ContactMe" onClick={closeMenu}>Contact Me</a>
      </div>
      <div className="hamburgerWrapper">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} rounded />
      </div>
    </nav >
  )
}

// #TODO add transtion time, and auto add class when button is clicked
