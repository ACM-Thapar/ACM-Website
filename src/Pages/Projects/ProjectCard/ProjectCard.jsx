import { Fragment } from "react";
import style from "./ProjectCard.module.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const ProjectCard = ({project}) => {
    return ( 
        <Fragment>
            <div className={style.main}>
                <div className={style.details}>
                    <h1>{project.name}</h1>
                    <h3>Tech Used : {project.tech}</h3>
                    <p>{project.description}</p>
                    <div>
                    <a href={project.link}>Github Repository</a>
                    <ArrowOutwardIcon style={{color:"black",marginBottom:"-7px"}} />
                    </div>
                </div>
                <div className={style.image}>
                    <img src={project.img} alt="project image" />
                    
                </div>
            </div>
        </Fragment>
     );
}
 
export default ProjectCard;