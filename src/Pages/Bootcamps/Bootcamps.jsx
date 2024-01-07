import React, { useRef,useState, useEffect } from "react";  
import BootcampComp from "./BootcampComp/BootcampComp";
import styles from "./Bootcamps.module.css";
import { Fragment } from "react";
import { Bootcampdata } from "../../data.mjs";
import Cardboot from "./CardBootcamp/Cardboot";
import { gsap } from "gsap";
import {HeroData} from "../../data.mjs";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Dots from "../../Components/dots/Dots";
// import { roadmap } from "../../data.mjs";
const {Webdev} = Bootcampdata;
const Bootcamps = () => {
  const {headline} = HeroData;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
      const isWideScreen = screenWidth > 1000;
    return(
        <Fragment>
            <div className={styles.main}>
            <div className={styles.upperpart}>
                        <h3 className={styles.headline}>
                            {headline}
                        </h3>
                        <div className={styles.circles}>
                            <Dots />
                        </div>
                    </div>
            <div className={styles.header}>
                <h1>Bootcamps</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.innerbody}>
                    <BootcampComp prop={Webdev} />
                </div>
                <section className={styles.section}>
                <div  className={styles.heading}>
                        <h1>Roadmap</h1>
                        <h3>lorem ipsum dotor sit amet</h3>
                    </div>
                    {isWideScreen && (<DesktopComponent />)}
                    {!isWideScreen && (<MobileComponent />)}
                </section>
            </div>
        </div>
        </Fragment>
    )
};


const DesktopComponent = () => {
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
          scrub: 0.4,
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
       <div ref={triggerRef}>
                
                <div ref={sectionRef} className={styles.roadmap}>
                
                {Webdev.roadmap.map((item,index)=>{
                    return(
                        <Cardboot key={index} week={item.week} topic={item.topic} link={item.link} />
                    )
                })}
                </div>
                </div>
    </Fragment>
  )
}

const MobileComponent = () => {
  return(
    <Fragment>
      <div style={{marginTop:"10rem"}}>
                {Webdev.roadmap.map((item,index)=>{
                    return(
                        <Cardboot key={index} week={item.week} topic={item.topic} link={item.link} />
                    )
                })}
                </div>
    </Fragment>
  );
};

export default Bootcamps;