import React, { Fragment } from "react";
import SEO from "../../Components/SEO";
import AlumniComp from "../../Components/AlumniComp/AlumniComp";
import styles from "./alumni.module.css";
import { alumnid } from "../../data.mjs";
import Dots from "../../Components/dots/Dots";

const Alumni = () => {
    const alumni26 = {
        heading: alumnid.heading1,
        data: alumnid.data26,
    }
    const alumni25 = {
        heading: alumnid.heading2,
        data: alumnid.data25,
    }
    const alumni24 = {
        heading: alumnid.heading3,
        data: alumnid.data24,
    }
    const alumni23 = {
        heading: alumnid.heading4,
        data: alumnid.data23,
    }
    const alumni22 = {
        heading: alumnid.heading5,
        data: alumnid.data22,
    }
    const alumni21 = {
        heading: alumnid.heading6,
        data: alumnid.data21,
    }
    return(
        <div className={styles.main}>
        <SEO title="Alumni" description="Connect with the brilliant minds who have shaped ACM Thapar over the years." />
        <Dots />
        <div className={styles.header}>
            <h1>Alumni</h1>
        </div>
        <AlumniComp alumnidata={alumni26} />
        <AlumniComp alumnidata={alumni25} />
        <AlumniComp alumnidata={alumni24} />
        <AlumniComp alumnidata={alumni23} />
        <AlumniComp alumnidata={alumni22} />
        <AlumniComp alumnidata={alumni21} />
        </div>
    ) 
};

export default Alumni;