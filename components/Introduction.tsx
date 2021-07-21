import { useEffect } from "react";
import Image from "next/image";
import Particles from "react-tsparticles";
import { init } from 'ityped'
import Button from "./Button";
import Avatar from "../public/images/avatar.jpg";
import TsParticlesConfig from "../utils/TsParticlesConfig";
import styles from "../styles/Introduction.module.scss";

const Introduction = () => {
    

    useEffect(() => {
        const myElement = document.querySelector("#"+styles.typings);
        if (myElement)
            init(myElement, { showCursor: false, strings: ['Backend Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Data Engineer', 'Linux Enthusiast'] })
    },[])

    return (
        <section id='home' data-index="0" className={`home ${styles.home}`}>
            <Particles id={styles.tsparticles} options={TsParticlesConfig}/>
            <div className={styles.avatar}>
                <Image src={Avatar} alt="" layout={"responsive"} />
            </div>
            <div className={styles.description}>
                <h1>PRABESH <span>MAHARJAN</span></h1>
                <p>I am <span id={styles.typings}></span></p>
                <div className={styles.buttons}>
                    <Button className="primary" label="About Me" action="#about"/>
                    <Button className="secondary" label="My Projects" action="#project"/>
                </div>
            </div>
        </section>
    )
}

export default Introduction;
