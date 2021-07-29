import { Experiences } from '../../contents/Skill';
import styles from '../../styles/Timeline.module.scss';

const Timeline = ({className}: any) => {
    const experiences = Experiences;

    return (
        <div className={`${styles.timeline_items} ${className}`}>
            {experiences.map((experience, idx) => (
                <div className={styles.timeline_item} key={idx}>
                    <div className={styles.timeline_dot}></div>
                    <div className={styles.timeline_date}>{experience.duration}</div>
                    <div className={styles.timeline_content}>
                        <h3>{experience.company}({experience.position})</h3>
                        {experience.roles.map((role, idx) => (
                            <p key={idx}>{role}</p>
                        ))}
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Timeline;
