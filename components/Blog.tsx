interface IProps {
    className : string
}

const Blog = ({className} : IProps) => {
  return (
    <section id="blog" data-index="4" className={"blog " + className}>
        Blog 
    </section>
  )
}

export default Blog;
