import React, { Fragment } from "react";
import Hero from "../../Components/Hero/Hero";
// import Projects from "../Projects/Projects";
import ProjectComp from "../../Components/ProjectComp/ProjectComp";
import BootcampComp from "../../Components/bootcampcomp/Bootcampcomp";
import Team from "../../Components/Team/Team";
import Sponser from "../../Components/Sponser/Sponser";



const Home = () => {
    return(
        <Fragment>
       <Hero />
       <ProjectComp />
       <BootcampComp />
       <Team />
        <Sponser />
       </Fragment>
    )
};

export default Home;