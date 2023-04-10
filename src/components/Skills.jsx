import "../css/Skills.css"

import skillsData from "../assets/dataJson/skillImg"


export default function Skills() {
  return (
    <section className="Skills" id="Skills">
      <h2 className="skillsHeading">Skillset</h2>
      <div className="skillCards">
        {skillsData.map((data, idx) => <SkillCard key={idx} props={data} />)}
      </div>
    </section>
  )
}

// #TODO fix: relative path not working
export function SkillCard({ props }) {
  let style = {
    backgroundImage: `linear-gradient(${props.bgColor}, #fafdff)`,
  }
  return (
    <div className="card SkillCard" style={style}>
      <div className="skillIcons">
        {props.images.map((image, idx) => (
          <img className="skillIcon" key={idx} src={image.imgURL} alt={image.name} />
        )
        )}
      </div>
      <h3 className="skillTitle">{props.title}</h3>
      <p className="skillDesc">{props.desc}</p>
    </div>
  )
}
