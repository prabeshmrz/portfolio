import { useEffect } from "react";
import { Skills } from "../../contents/Skill";

const Bar = ({className}: any) => {
    const {skill} = Skills;

    const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
        const skill_animation = document.querySelectorAll('.skill-animation')

        skill_animation.forEach(skill => {
            skill?.classList.toggle("on");
        })
    }

    useEffect(() => {

        const skill_animation = document.querySelector('.skill-bar')

        let observer = new IntersectionObserver(callback, options);

        if (skill_animation !== null)
            observer.observe(skill_animation);

    }, [])

    const options: IntersectionObserverInit = {
        threshold: 0.7
    };

    return (
        <div className={`skill-bar ${className}`}>
            {skill.map((skill, idx) => (
                <div className="bar" key={idx}>
                    <h3>{skill.label}</h3>
                    <div className={`progress-line data-${skill.data}`}>
                        <span className='skill-animation'></span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Bar;
