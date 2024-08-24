import { Fragment } from "react";
import styles from './Footer.module.css';
import {HeroData, Bootcampdata, ProjectData} from '../../data.mjs';

const Footer = () => {
    const {headline, keywords, copyright, subtitle, info, logos} = HeroData;
    const { title, ...bootcamps } = Bootcampdata;
    const {subtitle2,projectcount} = ProjectData;

    return ( 
        <Fragment>
        <div className={styles.section}>
            <div className={styles.mainbox} >
                <div className={styles.info}>
                    
                        <h2>{subtitle}</h2>
                        <p className={styles.context}>{info}</p>
                    
                </div>
                <div className={styles.outerinfo}>
                <div className={styles.info}>
                    
                        <h2>{title}</h2>
                    {Object.keys(bootcamps).map((key) => {
                                const bootcamp = bootcamps[key];
                    return (
                            <p key={key}>
                                <a href={`/bootcamps/${key}`}>{bootcamp.heading}</a>
</p>
                    );
                    })}
                </div>
                <div className={styles.info}>
                        <h2>{subtitle2}</h2>
                            {projectcount && projectcount.slice(0, 5).map((item, index) => {
                        return (
                        <p key={index}><a href='/team'>{item.name}</a></p>
                        );
                    })}
                </div>
                </div>
            </div>
                <div className={styles.contact}>
                <div className={styles.logos}>
                    {logos.map ((item, index) => {
                        return (
                        <a href={item.link} target="_blank" key={index}>
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