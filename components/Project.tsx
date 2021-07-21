interface IProps {
    className : string
}

const Project = ({className} : IProps) => {
  return (
    <section id="project" data-index="3" className={"project " + className}>
        <h2>My <span>Projects</span></h2>
    </section>
  )
}

export default Project;
