import { Fragment } from "react";
import style from "./dots.module.css"
import dots from '../../assets/Images/dots.png';
const Dots = () => {
    return ( 
        <Fragment>
            <div className={style.dot}>
            <img src={dots}/>
            </div>
        </Fragment>
     );
}
 
export default Dots;