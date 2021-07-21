import React, { useEffect, useState } from 'react';
import { AboutMeType, PersonalInfoType } from '../utils/Type/AboutMe';
import ReactMarkdown from 'react-markdown';
import Button from './Button';
import PdfModal from './PdfModal';
import matter from 'gray-matter';
import styles from '../styles/About.module.scss';


const initialState: AboutMeType = {content: "", infos: []};

const About = ({data}: any) => {

    const [aboutme, setAboutme] = useState(initialState)

    useEffect(() => {
        const {data: meta, content} = matter(data)
        const infos: PersonalInfoType[] = Object.keys(meta).map(key => {return {field: key, value: meta[key]}})
        setAboutme({content: content, infos})
    }, [])

    const togglePreviewCV = () => {
        const pdfmodal = document.querySelector('.'+styles.pdfmodal);
        pdfmodal?.classList.toggle(styles.show)
    }

  return (
    <section id="about" data-index="1" className={`about`}>
        <h2>ABOUT <span>ME</span></h2>
        { aboutme.infos.length ?
        <div className={styles.description}>
            <ReactMarkdown className={styles.content}>
                {aboutme.content}
            </ReactMarkdown>
            <div className={styles.info}>
                {aboutme.infos.map((info, key) => (
                    <div key={key}>
                        <label>{info.field}</label>
                        <span>{info.value}</span>
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                <Button className="primary small" label="Preview CV" action="#" callback={togglePreviewCV}/>
            </div>
        </div>
        : "Loading" }
        <PdfModal file='/pdf/resume.pdf' className={styles.pdfmodal} closeModal={togglePreviewCV}/>
    </section>
  )
}


export default About;
