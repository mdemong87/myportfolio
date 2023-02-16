import Image from "next/image";
import Link from "next/link";
import styles from "./SingleProject.module.css";


export default function SingleProject({ img, name, dis, code, live }) {
    return (
        <div className={styles.SingleProjectWrp}>
            <div>
                <Image className={styles.image} src={img} alt={"project Photo"} />
            </div>
            <div>
                <h2 className={styles.h2}>{name}</h2>
                <p className={styles.p}>{dis}</p>
                <div className={styles.btngroup}>
                    <Link className={styles.btn} href={code}>Code</Link>
                    <Link className={styles.btn} href={live}>Live</Link>
                </div>
            </div>
        </div>
    )
}
