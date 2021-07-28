import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Experiences } from "../contents/Skill";

const Experience = ({className}: any) => {
    const [experiences] = useState(Experiences)
    return (
        <VerticalTimeline className={className}>
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
    )
}

export default Experience;
