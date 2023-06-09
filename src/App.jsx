import "./css/general.css"
import "./css/App.css"
import "./css/DarkMode.css"


import CurvyLine from "./assets/svg/curvyLine.jsx"

import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer"

import "./css/queries.css"

function App() {

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Hero />
      <CurvyLine />
      <Skills />
      <CurvyLine />
      <Footer />
    </div>
  )
}

export default App
