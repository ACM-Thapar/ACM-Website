import { Fragment } from "react";
import sponsers from "../../assets/Images/sponsor.png"
import style from './Sponser.module.css';
const Sponser = () => {
    return ( 
        <Fragment>
            <div className={style.main}>
            <div className={style.headingdiv}>
                <h1>Sponsors</h1>
            </div>
            <img src={sponsers}></img>
            {/* <button >Become a Sponsor!</button> */}
            </div>
           
        </Fragment>
     );
}
 
export default Sponser;