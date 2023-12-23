import styles from "./navbar.module.css";
import { NavData } from "../../data.mjs";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
const Navbar = () => {
    const {navbar,logo} = NavData;

    return ( 
        <div className={styles.section}>
                <div className={styles.image}>
                         <a href="/">
                                    <img className={styles.logo} src={logo.img} alt={logo.alt} />
                        </a>
                        
                </div>
                
            <div className={styles.navbox}>
                
                <div className={styles.navitem}>
                    {navbar.slice(0,3).map ((item, index) => {
                            return (
                                <li className={styles.navitem} key={index}>
                                <a  href={item.href}>{item.navitem}</a>
                                </li>
                            );
                    })}
                </div>
                 {/* <div className={styles.space}>
                </div> */}
                
               
                <div className={styles.navitem}>
                    {navbar.slice(3,5).map ((item, index) => {
                            return (
                                <li className={styles.navitem} key={index}>
                                <a  href={item.href} >{item.navitem}</a>
                                </li>
                            );
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;