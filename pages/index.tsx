import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Project from '../components/Project'
import SkillExperience from '../components/SkillExperience'

export default function Home() {
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
