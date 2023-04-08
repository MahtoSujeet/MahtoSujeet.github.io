import "../css/Footer.css"

import memojiImg from "../assets/img/memoji-contact.png"

import { CallToAction } from "./Hero.jsx"
export default function Footer() {
  return (
    <section className="Footer card">
      <div className="footerContent">
        <div className="footerText">
          <h2 className="footerHeading">Want to Work together?</h2>
          <p className="footerDesc">Feel feel to reach me out for collabaration or just a friendly Hello.</p>
        </div>
        <div className="connectMeWrapper">
          <a className="footerEmail" href="mailto:sujeetmehta6@gmail.com">SujeetMehta6@gmail.com</a>
          <CallToAction />
        </div>
      </div>
      <img className="memojiImg" src={memojiImg} alt="memoji contact image" />
    </section >
  )
}
