import React, { Fragment, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SEO from "../../Components/SEO";
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
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.animate-section').forEach(section => {
                gsap.fromTo(section, 
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const EBData = {
        homeheadline: Teamdata.homeheadline,
        EB: Teamdata.EB
    };

    return(
    <div ref={containerRef} style={{paddingTop:"2rem", overflow: "hidden"}}>
       <SEO title="Home" description="Welcome to ACM Thapar Student Chapter. Innovate, Elevate, Collaborate." />
       <div className="animate-section"><Hero /></div>
       <div className="animate-section"><Homebrand /></div>
       <div className="animate-section"><ProjectComp /></div>
       <div className="animate-section"><Bootmain /></div>
       <div className="animate-section"><Team teamData={EBData} /></div>
       <div className="animate-section"><Sponser /></div>
    </div>
    )
};

export default Home;