import React from "react";  
import BootcampComp from "./BootcampComp/BootcampComp";
import styles from "./Bootcamps.module.css";
import { Fragment } from "react";
import { Bootcampdata } from "../../data.mjs";
const Bootcamps = () => {
    const {Webdev} = Bootcampdata;
    return(
        <Fragment>
            <div className={styles.main}>
            <div className={styles.header}>
                <h1>Bootcamps</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.innerbody}>
                    <BootcampComp prop={Webdev} />
                </div>
            </div>
            </div>
        </Fragment>
    )
};

export default Bootcamps;