import React, { Fragment } from "react";
import Hero from "../../Components/Hero/Hero";
// import Projects from "../Projects/Projects";
import ProjectComp from "../../Components/ProjectComp/ProjectComp";
import BootcampComp from "../../Components/bootcampcomp/Bootcampcomp";
import Team from "../../Components/Team/Team";
import Sponser from "../../Components/Sponser/Sponser";
import { Teamdata } from "../../data.mjs";
import Homebrand from "../../Components/homebrand/Homebrand";

const Home = () => {
    const EBData = {
        homeheadline: Teamdata.homeheadline,
        EB: Teamdata.EB
    };
    return(
        <Fragment>
       <Hero />
       <Homebrand />
       <ProjectComp />
       <BootcampComp />
       <Team teamData={EBData} />
        <Sponser />
       </Fragment>
    )
};

export default Home;