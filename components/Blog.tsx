import { useEffect } from "react";
import { Post } from "../utils/Type/Post";
import Card from "./Card";
import styles from "../styles/Blog.module.scss";

const Blog = ({data}: {data: Post[]}) => {
  return (
    <section id="blog" data-index="4" className={`blog`}>
        <h2>My <span>Blogs</span></h2>
        <div className={styles.bloglist}>
            {data.map((post, idx) => (
                <Card metadata={post.metadata} key={idx}/>
            ))}
        </div>
    </section>
  )
}

export default Blog;
