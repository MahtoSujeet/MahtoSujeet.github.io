import "./css/general.css"
import "./css/App.css"

import CurvyLine from "./assets/svg/curvyLine.jsx"

import Nav from "./components/Nav.jsx"
import Hero from "./components/Hero.jsx"
import Skills from "./components/Skills.jsx"


function App() {

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Hero />
      <CurvyLine />
      <Skills />
    </div>
  )
}

export default App
