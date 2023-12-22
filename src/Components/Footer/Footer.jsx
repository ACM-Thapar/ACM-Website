import { Fragment } from "react";
import styles from './Footer.module.css';
import {HeroData} from '../../data.mjs';
import {Bootcamp} from '../../data.mjs';
import {ProjectData} from '../../data.mjs';

const Footer = () => {
    const {headline, keywords, copyright, subtitle, info, logos} = HeroData;
    const {subtitle1,bootcamps} = Bootcamp;
    const {subtitle2,projectcount} = ProjectData;

    return ( 
        <Fragment>
        <div className={styles.section}>
            <div className={styles.mainbox} >
                <div className={styles.info}>
                    <div>
                        <h2>{subtitle}</h2>
                        <p style={{width:'30vw'}}>{info}</p>
                    </div>
                </div>
                <div className={styles.outerinfo}>
                <div className={styles.info}>
                    <div>
                        <h2>{subtitle1}</h2>
                    </div>
                    <div>
                    {bootcamps.slice(0, 5).map((item, index) => {
                    return (
                    <p key={index}><a href="/">{item.name}</a></p>
                    );
                    })}

                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <h2>{subtitle2}</h2>
                    </div>
                    <div>
                    {projectcount.slice(0, 5).map ((item, index) => {
                        return (
                        <p key={index}><a href="/team">{item.name}</a></p>
                        );
                    })}
                    </div>  
                </div>
                </div>
            </div>
                <div className={styles.contact}>
                <div className={styles.logos}>
                    {logos.map ((item, index) => {
                        return (
                        <a href="/" key={index}>
                            <img src={item.img} alt={item.alt} />
                         </a>
                        );
                    })}
                    </div>
                    <div>
                        <p className={styles.ending}>{copyright}</p>
                </div>
            </div>
            </div>
        </Fragment>
     );
}
 
export default Footer;