"use Client"
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillPhone, AiFillYoutube } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import styles from "./page.module.css";


export default function page() {
    return (
        <div className={styles.contactWrp}>
            <div className={styles.contactgroup}>
                <div className={styles.iconsGroup}>
                    <Link className={styles.link} href="https://www.facebook.com/mdemong87"><AiFillFacebook className={styles.icons} /></Link>
                    <Link className={styles.link} href="https://www.instagram.com/mdemong87"><AiFillInstagram className={styles.icons} /></Link>
                    <Link className={styles.link} href="https://www.youtube.com/@mdemong87"><AiFillYoutube className={styles.icons} /></Link>
                    <Link className={styles.link} href="https://www.linkedin.com/in/mdemong87"><AiFillLinkedin className={styles.icons} /></Link>
                    <Link className={styles.link} href="https://www.github.com/mdemong87"><AiFillGithub className={styles.icons} /></Link>
                    <Link className={styles.link} href="https://www.google.com/maps?q=konabri,gazipur,dakha,bangladesh"><MdLocationOn className={styles.icons} /></Link>
                    <Link className={styles.link} href="tel:+8801986404986"><AiFillPhone className={styles.icons} /></Link>
                    <Link className={styles.link} href="mailto:mdemong87@gmail.com"><SiGmail className={styles.icons} /></Link>


                </div>
                <div>
                    <p>Copyright © 2022-2023||All rights reserved by Md Emon Hossen</p>
                </div>
            </div>
        </div>
    )
}
