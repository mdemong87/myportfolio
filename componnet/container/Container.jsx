import Nav from 'componnet/nav/Nav';
import '../../src/app/global.css';
import Header from "../header/Header";
import styles from "./Container.module.css";


export default function Container({ children }) {
    return (
        <div className={styles.containerWrper}>
            <Header />
            <div className={styles.navAndbody}>
                <Nav />
                {children}
            </div>
        </div >
    )
}
