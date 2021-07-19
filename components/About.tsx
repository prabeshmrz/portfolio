import styles from '../styles/About.module.scss';

interface IProps {
    className : string
}

const About = ({className} : IProps) => {
  return (
    <section id="about" data-index="1" className={`about ${className} ${styles.about}`}>
        <div>
            A fast learner, full-stack developer and data engineer; bringing brilliant analytical skills, extensive knowledge of operations, and superb data organizational abilities to help company and clients achieve their goals.
        </div>
        <div>
            Prabesh Maharjan
        </div>
    </section>
  )
}

export default About;
