import "../css/Hero.css"

import sujeetImg from "../assets/img/sujeet-width-reduced.jpeg"
import { WhatsAppIcon } from "../assets/svg/whatsapp"
import GitHubIcon from "../assets/svg/github.jsx"
import TelegramIcon from "../assets/svg/telegram"


export default function Hero() {
  return (
    <section className="Hero">
      <div className="hero-text card">
        <div className="introWrapper">
          <h1 className="intro">Hi, I'm Sujeet,<br />a Front-End developer.</h1>
          <p className="intro-desc">I love the challenge of creating interactive and dynamic websites that engage users and leave a lasting impression.</p>
        </div>

        <CallToAction />
      </div>

      {/* Adding a wrapper div for media query to maintain aspect ratio */}
      <div className="heroImgWrapper card">
        <img className="hero-img card" src={sujeetImg} />
      </div>
    </section>
  )
}

export function CallToAction() {
  return (
    <div className="CallToAction">
      <a className="btn cta-btn" href="mailto:programmersujeet@gmail.com">Contact Me</a>
      <WhatsAppIcon />
      <GitHubIcon />
      <TelegramIcon />
    </div>
  )
}


