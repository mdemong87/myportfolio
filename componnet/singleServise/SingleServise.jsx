import styles from "./singleServise.module.css";

export default function SingleServise({ header, discription }) {
    return (
        <div className={styles.SingleserviseWrp}>
            <h1>{header}</h1>
            <p>{discription}</p>
        </div>
    )
}
