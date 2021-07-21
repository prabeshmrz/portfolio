import { GetServerSideProps, GetStaticProps } from 'next'
import { useEffect } from 'react'
import fs from 'fs';
import path from 'path';
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Project from '../components/Project'
import SkillExperience from '../components/SkillExperience'

const Home = ({data}: any) => {
    useEffect(() => {
        console.log(data);
    }, [])
    return (
        <>
            <Introduction/>
            <About/>
            <SkillExperience/>
            <Project/>
            <Blog/>
            <Contact/>
            <Footer/>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const aboutme = fs.readFileSync(path.join('contents/About/index.md'), 'utf-8')

    console.log(aboutme);

    return { props: {} }
}

export default Home;
