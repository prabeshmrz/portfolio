interface IProps {
    className : string
}

const Contact = ({className} : IProps) => {
  return (
    <section id="contact" data-index="5" className={"contact " + className}>
        <h2>Contact <span>Me</span></h2>
    </section>
  )
}

export default Contact;
