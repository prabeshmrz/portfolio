import React, { useEffect, useState } from 'react';
import { AboutMeType } from '../pages/api/aboutme';
import ReactMarkdown from 'react-markdown';
import Button from './Button';
import PdfModal from './PdfModal';
import styles from '../styles/About.module.scss';

const initialState: AboutMeType = {content: "", infos: []};

const About = () => {

    const [data, setData] = useState(initialState)

    useEffect(() => {
        fetch('/api/aboutme')
        .then((res: Response) => res.json().then((json: AboutMeType) => setData(json)))
    }, [])

    const togglePreviewCV = () => {
        const pdfmodal = document.querySelector('.'+styles.pdfmodal);
        pdfmodal?.classList.toggle(styles.show)
    }

  return (
    <section id="about" data-index="1" className={`about`}>
        <h2>ABOUT <span>ME</span></h2>
        { data.infos.length ?
        <div className={styles.description}>
            <ReactMarkdown className={styles.content}>
                {data.content}
            </ReactMarkdown>
            <div className={styles.info}>
                {data.infos.map((info, key) => (
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
