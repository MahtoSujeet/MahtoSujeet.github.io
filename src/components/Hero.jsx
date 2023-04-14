import "../css/Hero.css"

import sujeetImg from "../assets/img/sujeet-min.jpg"
import sujeetWebp from "../assets/img/sujeet.webp"
import { WhatsAppIcon } from "../assets/svg/whatsapp"
import GitHubIcon from "../assets/svg/github.jsx"
import TelegramIcon from "../assets/svg/telegram"
import InstagramIcon from "../assets/svg/instagram.jsx"


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
        <picture>
          <source srcSet={sujeetWebp} type="image/webp" />
          <img className="hero-img card" src={sujeetImg} />
        </picture>
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
      <InstagramIcon />
      <TelegramIcon />
    </div>
  )
}


