import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavData } from "../../data.mjs";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {navbar,logo,logoss} = NavData;

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    const closeNav=()=>{
        setNavOpen(false)
    }

    return ( 
        <div className={`${styles.section} ${isNavOpen ? styles.Open : ''}`}>
                <div className={styles.image}>
                         <Link to="/">
                            <img className={styles.logo} src={logo.img} alt={logo.alt} />
                        </Link>
                        <div className={styles.closeButton} onClick={toggleNav}>
                            {isNavOpen ? <MenuOpenIcon /> : <MenuIcon />}
                        </div>
                </div>
            <div className={styles.navbox}>
                <div className={`${styles.navitem} ${styles.home}`}>
                    {navbar.slice(5,6).map ((item, index) => {
                            return (
                                <li className={styles.navitem} key={index}>
                                    <Link  to={item.href} onClick={closeNav}>{item.navitem}</Link>
                                </li>
                            );
                    })}
                </div>
                <div className={styles.navitem}>
                    {navbar.slice(0,3).map ((item, index) => {
                            return (
                                <li className={styles.navitem} key={index}>
                                    <Link  to={item.href} onClick={closeNav}>{item.navitem}</Link>
                                </li>
                            );
                    })}
                </div>
               
                <div className={styles.navitem}>
                    {navbar.slice(3,5).map ((item, index) => {
                            return (
                                <li className={styles.navitem} key={index}>
                                <Link  to={item.href} onClick={closeNav}>{item.navitem}</Link>
                                </li>
                            );
                    })}
                </div>
                <div className={`${styles.logos} ${styles.navitem}`} style={{flexDirection:'row'}}>
                    {logoss.map ((item, index) => {
                        return (
                        <Link to="/" key={index}>
                            <img src={item.img} alt={item.alt} />
                         </Link>
                        );
                    })}
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;
