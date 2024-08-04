import React, { useState,Fragment } from "react";
import { ProjectData } from "../../data.mjs";
import style from "./project.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import Dots from "../../Components/dots/Dots";
const Projects = () => {
    const [numCardsToShow, setNumCardsToShow] = useState
    (4);
    const {project} = ProjectData;
    const [loading, setLoading] = useState(false);
    const cardsToShow = project.slice(0,        numCardsToShow);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
          setNumCardsToShow(prev => Math.min(prev + 4, project.length));
          setLoading(false);
        }, 1000); // delay of 1 second
      };
      
      const handleShowLess = () => {
        setLoading(true);
        setTimeout(() => {
          setNumCardsToShow(prev => Math.max(prev - 4, 4));
          setLoading(false);
        }, 1000); // delay of 1 second
      };
    return(
        <Fragment>
            <div className={style.main}>
                <Dots />
                <h1>Projects</h1>
                <p>At ACM Thapar, we take pride in transcending the boundaries of innovation through our tech projects. Every project is evidence of our members' dedication, commitment and prowess. Explore our portfolio of cutting-edge solutions and witness how our members are making an impact in the tech world.</p>
                <div className={style.cards}>
            {cardsToShow.map((project, index) => {
                return(
                        <ProjectCard project={project} key={index} />
                )
            })}
            </div>
            <div className={style.buttons}>
            <button onClick={handleShowMore} disabled={loading}>
            {loading ? 'Loading...' : 'Show more'}
          </button>
          <button onClick={handleShowLess} disabled={loading}>
            {loading ? 'Loading...' : 'Show less'}
          </button>
            </div>
            </div>
        </Fragment>
    )
};

export default Projects;