import React, { useRef, useState, useEffect, Fragment } from "react";
import BootcampComp from "./BootcampComp/BootcampComp";
import styles from "./BootcampPage.module.css";
import { Bootcampdata } from "../../data.mjs";
import Cardboot from "./CardBootcamp/Cardboot";
import { gsap } from "gsap";
import { HeroData } from "../../data.mjs";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Dots from "../../Components/dots/Dots";
import { useParams } from "react-router-dom";

const Bootcamp = () => {
  const { bootcampName } = useParams();
  const bootcamp = Bootcampdata[bootcampName];

  //


  if (!bootcamp) {
    return <div>Bootcamp not found</div>;
  }

  const { heading, img, tech, resourcs, roadmap } = bootcamp;
  const { headline } = HeroData;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isWideScreen = screenWidth > 1000;

  return (
    <Fragment>
      <div className={styles.main}>
        <div className={styles.upperpart}>
          <h3 className={styles.headline}>{headline}</h3>
          <div className={styles.circles}>
            <Dots />
          </div>
        </div>
        <div
          className={`${styles.header} ${
            isWideScreen ? styles.showHeader : styles.hideHeader
          }`}
        >
          <h1>{heading}</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.innerbody}>
            <BootcampComp prop={bootcamp} />
          </div>
          <section className={styles.section}>
            <div className={styles.heading}>
              <h1>Roadmap</h1>
            </div>
            {isWideScreen ? (
              <DesktopComponent roadmap={roadmap} />
            ) : (
              <MobileComponent roadmap={roadmap} />
            )}
          </section>
        </div>
      </div>
    </Fragment>
  );
};

const DesktopComponent = ({ roadmap }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1000);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (isWideScreen) {
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
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
    }
  }, [isWideScreen]);

  return (
    <Fragment>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.roadmap}>
          {roadmap.map((item, index) => (
            <Cardboot
              key={index}
              week={item.week}
              topic={item.topic}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const MobileComponent = ({ roadmap }) => {
  return (
    <Fragment>
      <div style={{ marginTop: "10rem" }}>
        {roadmap.map((item, index) => (
          <Cardboot
            key={index}
            week={item.week}
            topic={item.topic}
            link={item.link}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Bootcamp;
