import styles from "./navbar.module.css";
import { NavData } from "../../data.mjs";

const Navbar = () => {
    const {navbar,img} = NavData;

    return ( 
        <div className={styles.section}>
            <div className={styles.navbox}>
                <div className={styles.navitem}>
                    {navbar.slice(0,3).map ((item, index) => {
                            return (
                                <p key={index}>{item.navitem}</p>
                            );
                    })}
                </div>
                <div>
                    {navbar.slice(3,4).map ((item, index) => {
                            return (
                                <a href="/" key={index}>
                                    <img className={styles.logo} src={item.img} alt={item.alt} />
                                </a>
                            );
                    })}
                </div>
                <div className={styles.navitem}>
                    {navbar.slice(4,6).map ((item, index) => {
                            return (
                                <p key={index}>{item.navitem}</p>
                            );
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;