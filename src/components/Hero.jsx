import "../css/Hero.css"

import sujeetImg from "../assets/img/sujeet.jpeg"
import { WhatsAppIcon } from "../assets/svg/whatsapp"
import GitHubIcon from "../assets/svg/github.jsx"
import InstagramIcon from "../assets/svg/instagram"


export default function Hero() {
  return (
    <section className="Hero">
      <div className="hero-text card">
        <h1 className="intro">Hi, I'm Sujeet,<br /> a Front-End developer.</h1>
        <p className="intro-desc">I love the challenge of creating interactive and dynamic websites that engage users and leave a lasting impression.</p>


        <CallToAction />
      </div>
      <img className="hero-img card" src={sujeetImg} />
    </section>
  )
}

function CallToAction() {
  return (
    <div className="CallToAction">
      <a className="btn cta-btn" href="mailto:sujeetmehta6@gmail.com">Contact Me</a>
      <WhatsAppIcon />
      <GitHubIcon />
      <InstagramIcon />
    </div>
  )
}
