import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <div className={styles.navWrp}>
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/skills">Skills</Link>
            <Link className={styles.link} href="/projects">Projects</Link>
            <Link className={styles.link} href="/services">Servises</Link>
            <Link className={styles.link} href="/contact">Contact</Link>
        </div>
    )
}
