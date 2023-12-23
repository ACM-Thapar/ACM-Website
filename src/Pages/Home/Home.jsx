import React, { Fragment,useState,useEffect} from "react";
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
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
    setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);

    const isWideScreen = screenWidth > 1000;

    return(
        <Fragment>
       <Hero />
       <Homebrand />
       {isWideScreen && (<ProjectComp />)}
       
       <BootcampComp />
       <Team teamData={EBData} />
        <Sponser />
       </Fragment>
    )
};

export default Home;