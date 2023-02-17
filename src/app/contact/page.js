"use Client"
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillPhone, AiFillYoutube } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import styles from "./page.module.css";


export default function page() {
    return (
        <div className={styles.contactWrp}>
            <div className={styles.contactgroup}>
                <div className={styles.iconsGroup}>
                    <div><AiFillFacebook className={styles.icons} /></div>
                    <div><AiFillInstagram className={styles.icons} /></div>
                    <div><AiFillYoutube className={styles.icons} /></div>
                    <div><AiFillLinkedin className={styles.icons} /></div>
                    <div><AiFillGithub className={styles.icons} /></div>
                    <div><MdLocationOn className={styles.icons} /></div>
                    <div><AiFillPhone className={styles.icons} /></div>
                    <div><SiGmail className={styles.icons} /></div>


                </div>
                <div>
                    <p>Copyright © 2022-2023||All rights reserved by Md Emon Hossen</p>
                </div>
            </div>
        </div>
    )
}
