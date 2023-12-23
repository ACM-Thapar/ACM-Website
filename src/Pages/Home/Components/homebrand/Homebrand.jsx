
import React, { useState, useEffect } from 'react';
import { homebrand } from '../../../../data.mjs';
import styles from "./Homebrand.module.css";
import progressbar from "../../../../assets/Images/progressbar.png"
const Homebrand = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {images,details} = homebrand
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.main}>
        <img src={progressbar} className={styles.progressbar}/>
        <div className={styles.content}>
            
            {details.map((items,index)=>{
                return( 
                <div className={styles.innercontent} key={index}>
                <h1 >{items.heading}</h1>
                <p > {items.data}</p>
                </div>
                )
            })}
        </div>
    <div className={styles.image}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        />
      ))}
    </div>
    </div>
  );
};

export default Homebrand;
