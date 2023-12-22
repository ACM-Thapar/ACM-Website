import { Fragment } from "react";
import style from "./Team.module.css";
import { Teamdata } from "../../data.mjs";

const Team = () => {
    const {EB} = Teamdata
    return ( 
        <Fragment>
        <div className={style.main}>
            <div className={style.headingdiv}>
                <h1>Meet The Team</h1>
            </div>
            <div className={style.innermain}>
            {EB.map ((item ,index)=> {
            return(
               
            <div className={style.card} key={index}>
                <div className={style.uppercontent}>
                <h3>{item.name}</h3>
                <h4>{item.position}</h4>
                </div>
                <div className={style.lowercontent}>
                    <div className={style.socials}>
                        <img src={item.linkdin.img}/>
                        <img src={item.insta.img} />
                    </div>
                    <img src={item.img} />
                </div>
            </div>
            
            )
          })}
          <div className={style.card}>
            <h1>Show all</h1>
          </div>
            </div>
        </div>
        </Fragment>
     );
}
 
export default Team;