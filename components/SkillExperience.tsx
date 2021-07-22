import { useEffect, useState } from "react";
import { Experiences, Skills } from "../contents/Skill";
import { Bar } from 'react-chartjs-2';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from "../styles/Skill.module.scss";

const initialState: any = {}

const SkillExperience = () => {
    const [skills, setSkills] = useState(initialState)
    const [experiences] = useState(Experiences)
    useEffect(() => {
        setSkills(Skills)
    }, [])
    return (
        <section id="skill" data-index="2" className={`skill`}>
            <h2>Skill & <span>Experience</span></h2>
            <div className={styles.description}>
                {skills &&
                    <div className={styles.skill}>
                        <div className={styles.chart}>
                            <Bar data={skills.language}/>
                        </div>
                        <div className={styles.chart}>
                            <h3>Tools Experienced With</h3>
                            <div className={styles.tools}>
                            {skills.tools && skills.tools.map((tool: string, idx: number) => (
                                <span key={idx}>{tool}</span>
                            ))}
                            </div>
                        </div>
                    </div>
                }
                <VerticalTimeline className={`${styles.experience}`}>
                    {experiences.map((experience, idx) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#08706c', color: '#ffffff99' }}
                            contentArrowStyle={{ borderRight: '7px solid  #08706c' }}
                            date={experience.duration}
                            iconStyle={{ background: '#a73e33', color: '#fff' }}
                            key={idx}>
                            <h3 className="vertical-timeline-element-title"><span>{experience.position}</span></h3>
                            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                            <ul>
                                {experience.roles.map((role, idx) => (
                                <li key={idx}>{role}</li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default SkillExperience;
