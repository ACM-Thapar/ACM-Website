import React, { Fragment } from "react";
import AlumniComp from "../../Components/AlumniComp/AlumniComp";

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
        <Fragment>
        <Dots />
        <AlumniComp alumnidata={alumni21} />
        <AlumniComp alumnidata={alumni22} />
        </Fragment>
    )
};

export default Alumni;