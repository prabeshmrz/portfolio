interface IProps {
    className : string
}

const Contact = ({className} : IProps) => {
  return (
    <section id="contact" data-index="5" className={"contact " + className}>
        Contact 
    </section>
  )
}

export default Contact;
