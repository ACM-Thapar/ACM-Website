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
            <div className={styles.mainbox}>
                <div className={styles.info}>
                    <div>
                        <h2>{subtitle}</h2>
                        <p style={{width:'30vw'}}>{info}</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <h2>{subtitle1}</h2>
                    </div>
                    <div>
                    {bootcamps.map ((item, index) => {
                        return (
                        <p key={index}>{item.name}</p>
                        );
                    })}
                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <h2>{subtitle2}</h2>
                    </div>
                    <div>
                    {projectcount.map ((item, index) => {
                        return (
                        <p key={index}>{item.name}</p>
                        );
                    })}
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
        </Fragment>
     );
}
 
export default Footer;