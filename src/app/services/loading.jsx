import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from "./loading.module.css";

export default function loading() {
    return (
        <div className={styles.loadingWrp}>

            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
                <Skeleton className={styles.loading} />
            </SkeletonTheme>

        </div>
    )
}
