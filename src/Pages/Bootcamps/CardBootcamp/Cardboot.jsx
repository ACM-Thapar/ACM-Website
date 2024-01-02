import { Fragment } from "react";
import styles from "./Cardboot.module.css";
const Cardboot = ({week,topic,link}) => {
    return ( 
        <Fragment>
            <div className={styles.main}>
            <div className={styles.innermain}>
                <div className={styles.card}>
                    <h4>Week</h4>
                    <h1>{week}</h1>
                    <h2>{topic}</h2>
                    <h3><a href={link}>Start Learning</a></h3>
                </div>
                <div className={styles.innercard}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Cardboot;