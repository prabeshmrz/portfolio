import React from 'react'
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Project from '../components/Project'
import SkillExperience from '../components/SkillExperience'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
        <Introduction className={`${styles.section} section`}/>
        <About className={`${styles.section} section`}/>
        <SkillExperience className={`${styles.title} ${styles.section} section`}/>
        <Project className={`${styles.title} ${styles.section} section`}/>
        <Blog className={`${styles.title} ${styles.section} section`}/>
        <Contact className={`${styles.title} ${styles.section} section`}/>
        <Footer className={`footer`}/>
    </>
  )
}
