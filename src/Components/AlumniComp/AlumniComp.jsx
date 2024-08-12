import { Fragment } from "react";
import styles from "./alumnicomp.module.css";

import Linkedin from '../../assets/Images/LinkedIn (1).svg';
const AlumniComp = ( {alumnidata} ) => {
    const {heading,data} = alumnidata
    return ( 
        <Fragment>
            <div className={styles.main}>
                <div className={styles.heading}>
                    {heading}
                </div>
                <div className={styles.cards}>
                    {data.map((item,index)=>{
                        return(
                        <div className={styles.card} key={index}>
                            <img src={item.img} className={styles.profileimg}/>
                            <div className={styles.details}>
                            <h3>{item.name}</h3>
                            <h4>{item.position}</h4>
                            <p>{item.job}</p>
                            <a href={item.linkedin} target="_blank" className={styles.link}><img src={Linkedin}  /></a>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
     );
}
 
export default AlumniComp;