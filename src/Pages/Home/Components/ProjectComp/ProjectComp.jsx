import React, { useRef, useEffect, useState, Fragment } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./ProjectComp.module.css";
import { ProjectData } from "../../../../data.mjs";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const { project } = ProjectData;

function ProjectComp() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
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
  return (
    <Fragment>
      {isWideScreen && <DesktopComponent />}
      {!isWideScreen && <MobileComponent />}
    </Fragment>
  );
}

const DesktopComponent = () => {
  const navigate = useNavigate();
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
  const handleViewAllClick = () => {
    navigate("/Projects");
  };
  

  return (
    <Fragment>
      <div className={styles.scrollsectionouter}>
        <div ref={triggerRef}>
          <div ref={sectionRef} className={styles.scrollsectioninner}>
            {project.slice(0, 4).map((item, index) => {
              return (
                <div className={styles.scrollsection} key={index}>
                  <div className={styles.scrollsectiondiv}>
                    <a  href={item.link}
                     className={styles.githubLink}> 
                    <h3>{item.name}</h3>
                    </a>
        
                  </div>
                  <img src={item.img} alt={item.name}></img>
                  
                </div>
              );
            })}
            <div className={styles.scrollsection}>
              <div
                className={styles.scrollsectiondiv}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:"pointer"
                }}
                onClick={handleViewAllClick}
              >
                <h3 style={{ width: "100%", textAlign: "center" }}>
                  And Many More
                </h3>
                <div>
                  <p>View All</p>
                  <ArrowForwardIcon style={{ color: "black", marginTop: "6px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const MobileComponent = () => {
  return (
    <Fragment>
      <div>
        <div className={styles.row}>
          {project.slice(0, 4).map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.innercard}>
                  <a href={item.link}
                     className={styles.githubLink}>
                  <h3>{item.name}</h3>
                </a>
                </div>
                <img src={item.img} alt={item.name}></img>
                
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectComp;
