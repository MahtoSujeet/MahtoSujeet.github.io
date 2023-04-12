import htmlPng from "../img/html.png"
import cssPng from "../img/css.png"
import gitBlackPng from "../img/gitBlack.png"
import githubPng from "../img/github.png"
import reactPng from "../img/react.png"
import linuxPng from "../img/linux.png"

const skillsData = [
  {
    title: "HTML & CSS",
    images: [
      {
        name: "html icon",
        imgURL: htmlPng,
      },
      {
        name: "css icon",
        imgURL: cssPng,
      }
    ],
    desc: "SKILLED IN RESPONSIVE WEB DESIGN USING HTML & CSS, INCLUDING MODERN CSS FRAMEWORKS SUCH AS FLEXBOX AND GRID.",
    bgColor: "#ffeee9",
  },
  {
    title: "REACT JS",
    images: [
      {
        name: "react js icon",
        imgURL: reactPng,
      }
    ],
    desc: "PROFICIENT IN DEVELOPING SCALABLE WEB APPLICATIONS WITH REACT, INCLUDING COMPONENTS, STATE MANAGEMENT, AND API INTEGRATION.",
    bgColor: "#e2fbff",
    cssClass: "rotate",
  },
  {
    title: "GIT & GITHUB",
    images: [
      {
        name: "git blac icon",
        imgURL: gitBlackPng,
      },
      {
        name: "github icon",
        imgURL: githubPng,
      },
    ],
    desc: "EXPERIENCED WITH VERSION CONTROL USING GIT AND GITHUB FOR COLLABORATION AND PROJECT MANAGEMENT.",

    bgColor: "#ededed"
  },
  {
    title: "LINUX",
    images: [
      {
        name: "linux icon",
        imgURL: linuxPng,
      },
    ],
    desc: "FAMILIAR WITH LINUX COMMAND LINE INTERFACE (CLI) FOR FILE MANAGEMENT, PACKAGE INSTALLATION, AND SYSTEM CONFIGURATION.",
    bgColor: "#fff7db",
  },
]

export default skillsData
