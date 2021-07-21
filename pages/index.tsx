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

const Home = ({aboutme}: any) => {
    return (
        <>
            <Introduction/>
            <About data={aboutme}/>
            <SkillExperience/>
            <Project/>
            <Blog/>
            <Contact/>
            <Footer/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const aboutme = fs.readFileSync(path.join('contents/About/index.md'), 'utf-8')
    return { props: {aboutme} }
}

export default Home;
