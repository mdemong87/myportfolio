import Image from "next/image";
import Link from "next/link";
import img from "../../public/default-img.jpg";
import styles from "./SingleProject.module.css";


export default function SingleProject() {
    return (
        <div className={styles.SingleProjectWrp}>
            <div>
                <Image className={styles.image} src={img} alt={"project Photo"} />
            </div>
            <div>
                <h2 className={styles.h2}>Name of Project</h2>
                <p className={styles.p}>discriptions</p>
                <div className={styles.btngroup}>
                    <Link className={styles.btn} href={"/"}>Code</Link>
                    <Link className={styles.btn} href={"/"}>Live</Link>
                </div>
            </div>
        </div>
    )
}
