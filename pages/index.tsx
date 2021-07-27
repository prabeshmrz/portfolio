import { GetStaticProps } from 'next'
import fs from 'fs';
import path from 'path';
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Project from '../components/Project'
import SkillExperience from '../components/SkillExperience'
import { GetAllStaticProps } from '../utils/StaticProps';
import { Post } from '../utils/Type/Post';

const Home = ({aboutme, blogs}: {aboutme: string, blogs: Post[]}) => {
    return (
        <>
            <Introduction/>
            <About data={aboutme}/>
            <SkillExperience/>
            <Project/>
            <Blog data={blogs}/>
            <Contact/>
            <Footer/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { aboutme, blogs } = GetAllStaticProps();
    return { props: { aboutme, blogs } }
}

export default Home;
