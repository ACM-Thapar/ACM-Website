import React, { Fragment } from "react";  
import BootcampComp from "./BootcampComp/BootcampComp";
import Dots from "../../Components/dots/Dots";
import styles from "./Bootcamps.module.css";
import {HeroData} from "../../data.mjs";
import { Bootcampdata } from "../../data.mjs";
const Bootcamps = () => {
    const {Webdev,title} = Bootcampdata;
    const {headline} = HeroData;
    return(
        <Fragment>
            <section id={styles.bootcamp}>
            <div className={styles.maincontent}>
                <div className={styles.upperpart}>
                    <h3 className={styles.headline}>
                        {headline}
                    </h3>
                    <div className={styles.circles}>
                        <Dots />
                    </div>
                </div>
                <div className={styles.header}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.body}>
                    <div className={styles.innerbody}>
                        <BootcampComp prop={Webdev} />
                    </div>
                </div>
            </div>
            </section>
        </Fragment>
    )
};

export default Bootcamps;