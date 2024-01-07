import React, { Fragment } from "react";
import AlumniComp from "../../Components/AlumniComp/AlumniComp";
import styles from "./alumni.module.css";
import { alumnid } from "../../data.mjs";
import Dots from "../../Components/dots/Dots";

const Alumni = () => {
    const alumni21 = {
        heading : alumnid.heading1,
        data : alumnid.data21,
    }
    const alumni22 ={
        heading:alumnid.heading2,
        data:alumnid.data22,
    }
    return(
        <div className={styles.main}>
        <Dots />
        <div className={styles.header}>
            <h1>Alumni</h1>
        </div>
        <AlumniComp alumnidata={alumni21} />
        <AlumniComp alumnidata={alumni22} />
        </div>
    )
};

export default Alumni;