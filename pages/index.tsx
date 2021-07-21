import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const host = context.req.headers.host;
    const protocol = host?.includes('localhost') ? 'http' : 'https';
    const res = await fetch(`${protocol}://${host}/api/aboutme`);
    const data = await res.json();

    return { props: { data } }
}

export default Home;
