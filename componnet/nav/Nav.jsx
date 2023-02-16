"use client"

import Link from "next/link";
import { useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {

    const [active, setactive] = useState(1);


    return (
        <div className={styles.navWrp}>
            <Link onClick={() => setactive(1)} className={`${styles.link} ${active === 1 ? styles.active : null}`} href="/">Home</Link>
            <Link onClick={() => setactive(2)} className={`${styles.link} ${active === 2 ? styles.active : null}`} href="/skills">Skills</Link>
            <Link onClick={() => setactive(3)} className={`${styles.link} ${active === 3 ? styles.active : null}`} href="/projects">Projects</Link>
            <Link onClick={() => setactive(4)} className={`${styles.link} ${active === 4 ? styles.active : null}`} href="/services">Servises</Link>
            <Link onClick={() => setactive(5)} className={`${styles.link} ${active === 5 ? styles.active : null}`} href="/contact">Contact</Link>
        </div>
    )
}
