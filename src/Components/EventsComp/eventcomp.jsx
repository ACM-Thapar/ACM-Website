import React, { useState, useEffect, Fragment} from 'react';
import styles from "./eventcomp.module.css";
import { events } from "../../data.mjs";

const EventComp = ( {eventdata} ) => {
    const {heading1,heading2,image,details} = events;
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
		  setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
		}, 5000); // Change image every 5 seconds
	
		return () => clearInterval(interval);
	  }, [image.length]);

	return(
		<Fragment>
		<div className={styles.main}>
			<div className={styles.box1}>
                <div className={styles.heading}>
                    <h1>{heading1}</h1>
                </div>
				<div className={styles.content}>
            		{details.slice(0,1).map((items,index)=>{
                	return( 
                		<div className={styles.innercontent} key={index}>
               				<h3 >{items.subtitle}</h3>
							<h6>{items.description}</h6>
                			<p > {items.data}</p>
                		</div>
                	)
            		})}
					<div className={styles.imagebig}>
      				{image.slice(0,1).map((items, index) => (
        			<img key={index} src={items.img} style={{opacity: index === currentImageIndex ? 1 : 0, transition: 'opacity 1s ease',}} />
      				))}
    			</div>
        		</div>
            </div>
			<div className={styles.box2}>
				<div className={styles.heading}>
					<h2>{heading2}</h2>
				</div>
				<div className={styles.content}>
					{details.slice(1,2).map((items,index)=>{
                	return( 
                		<div className={styles.innercontent} key={index}>
               				<h3 >{items.subtitle}</h3>
							<h6>{items.description}</h6>
                			<p > {items.data}</p>
                		</div>
                	)
            		})}
					<div className={styles.image}>
      				{image.slice(1,2).map((items, index) => (
        			<img key={index} src={items.img} style={{opacity: index === currentImageIndex ? 1 : 0, transition: 'opacity 1s ease',}} />
      				))}
    			</div>
				</div>
			</div>
			<div className={styles.box2}>
				<div className={styles.content}>
					{details.slice(2,3).map((items,index)=>{
                	return( 
                		<div className={styles.innercontent} key={index}>
               				<h3 >{items.subtitle}</h3>
							<h6>{items.description}</h6>
                			<p > {items.data}</p>
                		</div>
                	)
            		})}
					<div className={styles.image}>
      				{image.slice(1,2).map((items, index) => (
        			<img key={index} src={items.img} style={{opacity: index === currentImageIndex ? 1 : 0, transition: 'opacity 1s ease',}} />
      				))}
    			</div>
				</div>
			</div>
			<div className={styles.box1}>
                <div>
                    <hr className={styles.line} />
                </div>
				<div className={styles.content}>
            		{details.slice(3,4).map((items,index)=>{
                	return( 
                		<div className={styles.innercontent} key={index}>
               				<h3 >{items.subtitle}</h3>
							<h6>{items.description}</h6>
                			<p > {items.data}</p>
                		</div>
                	)
            		})}
					<div className={styles.imagebig}>
      				{image.slice(0,1).map((items, index) => (
        			<img key={index} src={items.img} style={{opacity: index === currentImageIndex ? 1 : 0, transition: 'opacity 1s ease',}} />
      				))}
    			</div>
        		</div>
            </div>
		</div>
		</Fragment>
	)
}

export default EventComp;