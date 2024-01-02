import React, { useRef, useEffect } from "react";  
import BootcampComp from "./BootcampComp/BootcampComp";
import Dots from "../../Components/dots/Dots";
import styles from "./Bootcamps.module.css";
import {HeroData} from "../../data.mjs";
import { Bootcampdata } from "../../data.mjs";
import Cardboot from "./CardBootcamp/Cardboot";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { roadmap } from "../../data.mjs";
const Bootcamps = () => {
    const {Webdev} = Bootcampdata;
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
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

    return(
        <Fragment>
            <div className={styles.main}>
            <div className={styles.header}>
                <h1>Bootcamps</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.innerbody}>
                    <BootcampComp prop={Webdev} />
                </div>
                <section className={styles.section}>
                   
                <div ref={triggerRef}>
                <div  className={styles.heading}>
                        <h1>Roadmap</h1>
                        <h3>lorem ipsum dotor sit amet</h3>
                    </div>
                <div ref={sectionRef} className={styles.roadmap}>
                
                {Webdev.roadmap.map((item,index)=>{
                    return(
                        <Cardboot key={index} week={item.week} topic={item.topic} link={item.link} />
                    )
                })}
                </div>
                </div>
                </section>
            </div>
        </div>
        </Fragment>
    )
};

export default Bootcamps;