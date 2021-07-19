interface IProps {
    className : string
}

const SkillExperience = ({className} : IProps) => {
  return (
    <section id="skill" data-index="2" className={"skill " + className}>
        Skill & Experience
    </section>
  )
}

export default SkillExperience;
