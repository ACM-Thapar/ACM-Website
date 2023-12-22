import React from "react";
import style from "./Team.module.css";

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
                            <div className={style.uppercontent}>
                                <h3>{item.name}</h3>
                                <h4>{item.position}</h4>
                            </div>
                            <div className={style.lowercontent}>
                                <div className={style.socials}>
                                    <img src={item.linkdin.img} alt="LinkedIn" />
                                    <img src={item.insta.img} alt="Instagram" />
                                </div>
                                <img src={item.img} alt="Team Member" />
                            </div>
                        </div>
                    );
                })}
                {core && core.length > 0 && core.map((item, index) => {
                    return (
                        <div className={style.card} key={index}>
                            <div className={style.uppercontent}>
                                <h3>{item.name}</h3>
                                <h4>{item.position}</h4>
                            </div>
                            <div className={style.lowercontent}>
                                <div className={style.socials}>
                                    <img src={item.linkdin.img} alt="LinkedIn" />
                                    <img src={item.insta.img} alt="Instagram" />
                                </div>
                                <img src={item.img} alt="Team Member" />
                            </div>
                        </div>
                    );
                })}
                <div className={style.card}>
                    <h1>Show all</h1>
                </div>
            </div>
        </div>
    );
};

export default Team;
