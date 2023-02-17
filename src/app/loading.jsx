import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from "./loading.module.css";

export default function loading() {
    return (
        <div className={styles.loadingWrp}>
            <SkeletonTheme baseColor="#202020" highlightColor="#444" className={styles.SkeletonTheam}>
                <Skeleton className={styles.one} />
                <Skeleton className={styles.two} />
                <Skeleton className={styles.three} />
                <Skeleton className={styles.four} />
                <Skeleton className={styles.five} />
                <Skeleton className={styles.six} />
                <Skeleton className={styles.seven} />
            </SkeletonTheme>
        </div>
    )
}
