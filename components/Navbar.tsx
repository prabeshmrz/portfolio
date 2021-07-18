import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.scss";

const bubbleDirection = {
    height: 0,
    width: 0,
    top: 0,
    left: 0
}


const Navbar = () => {
    
    const [bubbleStyle, setBubbleStyle] = useState(bubbleDirection)

    let activeEntry: IntersectionObserverEntry;

    const checkActiveEntry = (entry: IntersectionObserverEntry) => {
        const className = entry ? entry.target.className.split(" ")[0] : "noclass";
        const activeAnchor = document.querySelector(`[data-page=${className}`)
        const coords = activeAnchor?.getBoundingClientRect();
        const directions: (typeof bubbleDirection) = {
            height: coords?.height ?? 0,
            width: coords?.width ?? 0,
            top: coords?.top ?? 0,
            left: coords?.left ?? 0
        }

        if (entry && entry.isIntersecting) {
            setBubbleStyle(directions)
            activeEntry = entry;
        }
    }

    const navCheck: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(checkActiveEntry)
    }

    const options: IntersectionObserverInit = {
        threshold: 0.7
    };

    const toggleAll = () => {
        const svg = document.querySelector("#svg_circle");
        const main = document.querySelector("main");
        const nav = document.querySelector("nav");

        main?.classList.toggle("off");
        nav?.classList.toggle("on");
        svg?.classList.toggle(styles.show);
    }

    const defaultToggles = () => {
        const svg = document.querySelector("#svg_circle");
        const main = document.querySelector("main");
        const nav = document.querySelector("nav");

        main?.classList.remove("off");
        nav?.classList.remove("on");
        svg?.classList.remove(styles.show);
    }

    if (typeof window=== 'object')
        defaultToggles();

    useEffect(() => {
        const sections = document.querySelectorAll('section')

        let observer = new IntersectionObserver(navCheck, options);

        sections.forEach(section => {
            observer.observe(section);
        })
    },[])

    useEffect(() => {
        window.addEventListener('resize', () => {checkActiveEntry(activeEntry)})
    }, [bubbleDirection])

    return (
        <>
            <nav id="#nav">
                <pre className={styles.alias}>
______          _               _      <br/>
| ___ \        | |             | |     <br/>
| |_/ / __ __ _| |__   ___  ___| |__   <br/>
|  __/  __/ _` |  _ \ / _ \/ __|  _ \  <br/>
| |  | | | (_| | |_) |  __/\__ \ | | | <br/>
\_|  |_|  \__,_|_.__/ \___||___/_| |_| <br/>
                       </pre>
                <div className={styles.nav}>
                    <Link href="#home">
                      <a data-page="home">Home</a>
                    </Link>
                    <Link href="#skill">
                      <a data-page="skill">Skill & Experience</a>
                    </Link>
                    <Link href="#project">
                      <a data-page="project">Projects</a>
                    </Link>
                    <Link href="#blog">
                      <a data-page="blog">Blog</a>
                    </Link>
                    <Link href="#contact">
                      <a data-page="contact">Contact</a>
                    </Link>
                    <div className={styles.bubble} style={bubbleStyle}></div>
                </div>
            </nav>
            <div className={styles.hamburger} onClick={toggleAll}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <svg id="svg_circle" className={`${styles.circle}`} xmlns="http://www.w3.org/2000/svg">
              <circle cx="0" fill="coral" cy="0" r="120%"/>
            </svg>
        </>
    )
}

export default Navbar;
