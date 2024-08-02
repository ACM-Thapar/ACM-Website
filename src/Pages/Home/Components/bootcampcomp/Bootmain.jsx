import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from './Bootmain.module.css';
import { Bootcamp } from "../../../../data.mjs";

const Bootmain = () => {
    const { bootcamps } = Bootcamp;

    return (
        <Fragment>
            <div className={styles.main}>
                <div className={styles.headingdiv}>
                    <h1>Bootcamps</h1>
                </div>
                <div className={styles.maininner}>
                    {bootcamps.map((item, index) => {
                        return (
                            <div className={styles.card} key={index}>
                                <div className={styles.innercard}>
                                    <img src={item.img} alt={item.name} />
                                    {item.name === "Web Development" ? (
                                        <Link to="/bootcamps/web-development" className={styles.noUnderline}>
                                            <h3>{item.name}</h3>
                                        </Link>
                                    ) : (
                                        <h3>{item.name}</h3>
                                    )}
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
