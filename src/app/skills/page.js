import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import styles from "./page.module.css";


export default function page() {
    return (
        <div className={styles.skillWrp}>
            <div>
                <span><AiFillHtml5 className={styles.icons} /></span>
                <span>HTML</span>
            </div>
            <div>
                <span><FaCss3 className={styles.icons} /></span>
                <span>CSS</span>
            </div>
            <div>
                <span><FaBootstrap className={styles.icons} /></span>
                <span>Bootstrap</span>
            </div>
            <div>
                <span><SiTailwindcss className={styles.icons} /></span>
                <span>Tailwind CSS</span>
            </div>
            <div>
                <span><IoLogoJavascript className={styles.icons} /></span>
                <span>Javascript</span>
            </div>
            <div>
                <span><FaReact className={styles.icons} /></span>
                <span>React Js</span>
            </div>
            <div>
                <span><SiNextdotjs className={styles.icons} /></span>
                <span>Next Js</span>
            </div>
            <div>
                <span><FaNodeJs className={styles.icons} /></span>
                <span>Node Js</span>
            </div>
            <div>
                <span><SiExpress className={styles.icons} /></span>
                <span>Express Js</span>
            </div>
            <div>
                <span><SiMongodb className={styles.icons} /></span>
                <span>MongoDB</span>
            </div>
            <div>
                <span><SiFirebase className={styles.icons} /></span>
                <span>Firebase</span>
            </div>

            <div>
                <span><FaGithub className={styles.icons} /></span>
                <span>Github</span>
            </div>
        </div>
    )
}
