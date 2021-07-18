interface IProps {
    className : string
}

const Project = ({className} : IProps) => {
  return (
    <section id="project" data-index="2" className={"project " + className}>
        Project
    </section>
  )
}

export default Project;
