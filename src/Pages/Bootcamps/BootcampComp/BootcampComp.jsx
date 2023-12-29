import { Fragment } from "react";
import styles from "./BootcampComp.module.css";
const BootcampComp = (prop) => {
    const {img,heading,tech,data,resourcs} = prop.prop;
    return ( 
        <Fragment>
            <div className={styles.header}
            style={{
                backgroundImage: `url(${img})`,
            }}>
                <h1>{heading}</h1>
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
                            <div className={styles.logo}key={index}>
                                <img src={item.image}/> 
                                <p>{item.name}</p>
                                <img src={item.img}/>
                            </div>
                        )
                    }
                    )}
                    </div>
                </div>
                <div className={styles.roadmap}>
                <h1>Roadmap</h1>
                <h2>lorem ipsum dotor sit amet</h2>
                </div>
            </div>
        </Fragment>
     );
}
 
export default BootcampComp;