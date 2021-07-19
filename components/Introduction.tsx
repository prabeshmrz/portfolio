import Image from "next/image";
import { init } from 'ityped'
import Avatar from "../public/images/avatar.jpg";
import styles from "../styles/Introduction.module.scss";
import React, { useEffect } from "react";
import Button from "./Button";
import Particles from "react-tsparticles";
import  TsParticlesConfig from "../utils/TsParticlesConfig";

interface IProps {
    className: string,
}

const Introduction = ({className}: IProps) => {
    

    useEffect(() => {
        const myElement = document.querySelector("#"+styles.typings);
        if (myElement) {
            console.log("this")
            init(myElement, { showCursor: false, strings: ['Backend Engineer', 'Full Stack Developer', 'DevOps Engineer', 'Data Engineer', 'Linux Enthusiast'] })
        }
    },[])

    return (
        <section id='home' data-index="0" className={`home ${className} ${styles.home}`}>
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
