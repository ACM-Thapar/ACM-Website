import { Fragment } from "react";
import styles from './Bootcampcomp.module.css';
import { Bootcamp } from "../../../../data.mjs";
const BootcampComp = () => {
    const {bootcamps} = Bootcamp
    return ( 
        <Fragment>

            <div className={styles.main}>
                <div className={styles.headingdiv}>
                <h1>Bootcamps</h1>
                </div>
                <div className={styles.maininner}>
                {bootcamps.map ((item , index)=>{
                    return(
                        <div className={styles.card} key={index}>
                            <div className={styles.innercard}>
                            <img src={item.img}/>
                            <h3>{item.name}</h3>
                            </div>
                        </div>
                    )
                })
               

                }
                 </div>
            </div>
        </Fragment>
     );
}
 
export default BootcampComp;