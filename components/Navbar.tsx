import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
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
        const nav = document.querySelector("nav");

        nav?.classList.toggle("on");
    }

    const defaultToggles = () => {
        const nav = document.querySelector("nav");

        nav?.classList.remove("on");
    }

    if (typeof window=== 'object')
        defaultToggles();

    useEffect(() => {
        const sections = document.querySelectorAll('section')

        let observer = new IntersectionObserver(navCheck, options);

        sections.forEach(section => {
            observer.observe(section);
        })
        // eslint-disable-next-line
    },[])

    useEffect(() => {
        window.addEventListener('resize', () => {checkActiveEntry(activeEntry)})
        // eslint-disable-next-line
    }, [bubbleDirection])

    return (
        <>
            <nav id="#nav">
                <Logo className={styles.alias}/>
                <div className={styles.nav}>
                    <Link href="#home">
                      <a data-page="home">Home</a>
                    </Link>
                    <Link href="#about">
                      <a data-page="about">About</a>
                    </Link>
                    <Link href="#skill">
                      <a data-page="skill">Skill</a>
                    </Link>
                    <Link href="#experience">
                      <a data-page="experience" className={styles.conditional_hide}>Experience</a>
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
        </>
    )
}

export default Navbar;
