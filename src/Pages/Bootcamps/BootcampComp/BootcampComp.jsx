import { Fragment } from "react";
import styles from "./BootcampComp.module.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const BootcampComp = (prop) => {
    const {img,heading,tech,data,resourcs} = prop.prop;
    return ( 
        <Fragment>
            <div className={styles.main}>
            <div className={styles.header}
            style={{
                backgroundImage: `url(${img})`,
            }}>
                <div className={styles.overlay}>
                <h1> {heading}</h1>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.innerbody}>
                <h1>What you'll learn?</h1>
                <h2>{tech}</h2>
                <p>{data}</p>
                </div>
                <div className={styles.resources}>
                    <h1>Important Resources</h1>
                    <h2>100% Free</h2>
                    <div className={styles.links}>
                    {resourcs.map((item,index)=>{
                        return(
                            <div key={index}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <p>{item.name}</p>
                                </a>
                                <ArrowOutwardIcon />
                            </div>
                        )
                    }
                    )}
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
     );
}
 
export default BootcampComp;