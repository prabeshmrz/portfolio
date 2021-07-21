interface IProps {
    className : string
}

const SkillExperience = ({className} : IProps) => {
  return (
    <section id="skill" data-index="2" className={"skill " + className}>
        <h2>Skill & <span>Experience</span></h2>
    </section>
  )
}

export default SkillExperience;
