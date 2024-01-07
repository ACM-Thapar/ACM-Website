import React, { Fragment,useState,useEffect} from "react";
import Hero from "./Components/Hero/Hero";
// import Projects from "../Projects/Projects";
import ProjectComp from "./Components/ProjectComp/ProjectComp";
// import BootcampComp from "./Components/bootcampcomp/Bootcampcomp";
import Team from "../../Components/Team/Team";
import Sponser from "../../Components/Sponser/Sponser";
import { Teamdata } from "../../data.mjs";
import Homebrand from "./Components/homebrand/Homebrand";
import Bootmain from "./Components/bootcampcomp/Bootmain";

const Home = () => {
    const EBData = {
        homeheadline: Teamdata.homeheadline,
        EB: Teamdata.EB
    };

    return(
    <div style={{paddingTop:"2rem"}}>
       <Hero />
       <Homebrand />
       <ProjectComp />
       <Bootmain />
       <Team teamData={EBData} />
        <Sponser />
    </div>
    )
};

export default Home;