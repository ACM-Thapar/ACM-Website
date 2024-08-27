import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from './Bootmain.module.css';
import { Bootcamp } from "../../../../data.mjs";

const Bootmain = () => {
    const { bootcamps } = Bootcamp;

    const createSlug = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
    };

    return (
        <Fragment>
            <div className={styles.main}>
                <div className={styles.headingdiv}>
                    <h1>Bootcamps</h1>
                    <br></br> <br></br>
                </div>
                <div className={styles.maininner}>
                    {bootcamps.map((item, index) => {
                        const bootcampLink = `/bootcamps/${createSlug(item.name)}`;
                        return (
                            <div className={styles.card} key={index}>
                                <div className={styles.innercard}>
                                    <img src={item.img} alt={item.name} />
                                    <Link to={bootcampLink} className={styles.noUnderline}>
                                        <h3>{item.name}</h3>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
}

export default Bootmain;
