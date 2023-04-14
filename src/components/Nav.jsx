import "../css/Nav.css"
import { Spin as Hamburger } from 'hamburger-react'

import React, { useState } from "react"
import Logo from "./Logo.jsx"
import DarkThemeIcon from "../assets/svg/darkTheme"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const handleDarkClick = () => {
    document.body.classList.toggle("dark-mode")

    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <nav className={`Nav ${isOpen && "open"}`}>
      <Logo />
      <button className="darkModeBtn" onClick={handleDarkClick} >
        <DarkThemeIcon onClick={handleDarkClick} />
      </button>
      <div className="NavOpts">
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
