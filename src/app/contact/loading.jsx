import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from "./loading.module.css";

export default function loading() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className={styles.contactWrp}>
                <div className={styles.contactgroup}>
                    <div className={styles.iconsGroup}>
                        <div><Skeleton className={styles.loading} /></div>
                        <div><Skeleton className={styles.loading} /></div>
                        <div><Skeleton className={styles.loading} /></div>
                        <div><Skeleton className={styles.loading} /></div>
                        <div><Skeleton className={styles.loading} /></div>
                        <div><Skeleton className={styles.loading} /></div>
                        <div><Skeleton className={styles.loading} /></div>
                        <div><Skeleton className={styles.loading} /></div>


                    </div>
                    <div>
                        <Skeleton className={styles.loading} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}
