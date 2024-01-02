import React, { useRef, useEffect, Fragment } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./ProjectComp.css"
import { ProjectData } from "../../../../data.mjs";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ProjectComp() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const {project} = ProjectData

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <Fragment>
     
    <section className="scroll-section-outer" >
    
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner" >
          {project.slice(0,4).map ((item ,index)=> {
            return(
            <div className="scroll-section"  key={index}>
            <div className="scroll-section-div"><h3>{item.name}</h3>
            </div>
            <img src={item.img}></img>
            </div>
            )
          })}
          <div className="scroll-section">
            <div className="scroll-section-div" style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <h3 style={{width:"100%",textAlign:"center"}}>And Many More</h3>
              <div>
              <p>View All</p>
              <ArrowForwardIcon style={{color:"black",marginTop:"6px"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  );
}

export default ProjectComp;