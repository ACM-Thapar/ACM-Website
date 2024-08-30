import React,{Suspense} from "react";
import style from "./Team.module.css";
// import Linkedin from '../../assets/Images/LinkedIn (1).svg';



const Team = ({ teamData }) => {
    const { homeheadline, EB, core } = teamData;

    return (
        <div className={style.main}>
            <div className={style.headingdiv}>
                <h1>{homeheadline}</h1>
            </div>
            <div className={style.innermain}>
                {EB && EB.length > 0 && EB.map((item, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <img src={item.img} className={style.profileimg}/>
                            <div className={style.details}>
                                <h3>{item.name}</h3>
                                <h4>{item.position}</h4>
                            <div className={style.socials}></div>
                                <a href={item.linkdin.link} target="_blank" className={style.link}><img src={item.linkdin.img}  /></a>
                                <a href={item.insta.link} target="_blank" className={style.link}><img src={item.insta.img}  /></a>
                            </div>
                        </div>
                    );
                })}
                {core && core.length > 0 && core.map((item, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <img src={item.img} className={style.profileimg} />
                            <div className={style.details}>
                                <h3>{item.name}</h3>
                                <h4>{item.position}</h4>
                            <div className={style.socials}></div>
                                <a href={item.linkdin.link} target="_blank" className={style.link}><img src={item.linkdin.img}  /></a>
                                <a href={item.insta.link} target="_blank" className={style.link}><img src={item.insta.img}  /></a>
                            </div>
                        </div>
                    );
                })}
                {/* <div className={style.card}>
                <h3><a href='/team'>Show all</a></h3>
                </div> */}
            </div>
        </div>
    );
};

export default Team;
