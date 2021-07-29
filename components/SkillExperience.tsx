import { Skills } from "../contents/Skill";
import Bar from "./chartComponents/Bar";
import Timeline from "./chartComponents/Timeline";
import styles from "../styles/Skill.module.scss";

const SkillExperience = () => {
    const {tools} = Skills;

    return (
        <>
            <section id="skill" data-index="2" className={`skill`}>
                <h2>
                    <span className={styles.conditional_hide}>My </span>
                    <span className={styles.conditional_color}>Skill </span>
                    <span className={`${styles.conditional_color} ${styles.conditional_show}`}>& </span>
                    <span className={styles.conditional_show}>Experience</span>
                </h2>

                <div className={styles.description}>
                    <div className={styles.skill}>
                        <Bar/>
                        <div className={styles.chart}>
                            <h3>Tools Experienced With</h3>
                            <div className={styles.tools}>
                            {tools && tools.map((tool: string, idx: number) => (
                                <span key={idx}>{tool}</span>
                            ))}
                            </div>
                        </div>
                    </div>
                    <Timeline className={`${styles.experience} ${styles.conditional_show}`}/>
                </div>
            </section>
            <section id="experience" data-index="2.5" className={`experience ${styles.conditional_hide} ${styles.block}`}>
                <h2>My <span>Experience</span></h2>
                <Timeline className={styles.experience}/>
            </section>
        </>
    )
}

export default SkillExperience;
