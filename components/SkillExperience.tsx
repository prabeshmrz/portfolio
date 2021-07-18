interface IProps {
    className : string
}

const SkillExperience = ({className} : IProps) => {
  return (
    <section id="skill" data-index="1" className={"skill " + className}>
        SkillExperience
    </section>
  )
}

export default SkillExperience;
