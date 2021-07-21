interface IProps {
    className : string
}

const Blog = ({className} : IProps) => {
  return (
    <section id="blog" data-index="4" className={"blog " + className}>
        <h2>My <span>Blogs</span></h2>
    </section>
  )
}

export default Blog;
