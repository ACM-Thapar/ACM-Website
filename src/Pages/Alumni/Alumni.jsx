import React, { Fragment } from "react";
import AlumniComp from "../../Components/AlumniComp/AlumniComp";
import styles from "./alumni.module.css";
import { alumnid } from "../../data.mjs";
import Dots from "../../Components/dots/Dots";

const Alumni = () => {
    const alumni23 = {
        heading : alumnid.heading1,
        data : alumnid.data23,
    }
    const alumni22 ={
        heading:alumnid.heading2,
        data:alumnid.data22,
    }
    const alumni21 ={
        heading:alumnid.heading3,
        data:alumnid.data21,
    }
    return(
        <div className={styles.main}>
        <Dots />
        <div className={styles.header}>
            <h1>Alumni</h1>
        </div>
        <AlumniComp alumnidata={alumni23} />
        <AlumniComp alumnidata={alumni22} />
        <AlumniComp alumnidata={alumni21} />
        </div>
    ) 
};

export default Alumni;