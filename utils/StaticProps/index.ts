import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../Type/Post';

export const GetAllStaticProps = () => {
    const { aboutme } = GetAboutMe();
    const { blogs } = GetBlogs();
    const { projects } = GetProjects();
    return {
        aboutme,
        blogs,
        projects
    }
}

export const GetAboutMe = () => {
    const aboutme = fs.readFileSync(path.join('contents/About/index.md'), 'utf-8')
    return { aboutme }
}

export const GetBlogs = () => {
    const files = fs.readdirSync(path.join('contents/Blog'))
    const blogs: Post[] = files.map(__filename => {
        const slug = __filename.split('.')[0];
        const markdownWithMeta = fs.readFileSync(path.join('contents/Blog', __filename), 'utf-8')
        const {data:metadata, content} = matter(markdownWithMeta);
        return {
            slug,
            metadata,
            content
        }
    })
    return { blogs }
}

export const GetProjects = () => {
    const files = fs.readdirSync(path.join('contents/Project'))
    const projects: Post[] = files.map(__filename => {
        const slug = __filename.split('.')[0];
        const markdownWithMeta = fs.readFileSync(path.join('contents/Project', __filename), 'utf-8')
        const {data:metadata, content} = matter(markdownWithMeta);
        return {
            slug,
            metadata,
            content
        }
    })
    return { projects }
}
