import React, { useState, useEffect, Fragment} from 'react';
import styles from "./eventcomp.module.css";
import { events } from "../../data.mjs";

const EventComp = ( {eventdata} ) => {
    const {details} = events;
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	useEffect(() => {
		details.forEach((item) => {
		  const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.img.length);
		  }, 5000); // Change image every 5 seconds
	  
		  return () => clearInterval(interval);
		});
	  }, [details.length]);	  

	return(
		<Fragment>
		<div className={styles.main}>
		{details.slice(0,5).map((items,index)=>{
			return(
				<div className={styles.box1} key={index}>
                <div className={styles.heading}>
                    <h1>{items.heading}</h1>
                </div>
				<div className={styles.content}>
					<div className={styles.innercontent}>
               				<h3 >{items.subtitle}</h3>
							<h6>{items.description}</h6>
                			<p > {items.data}</p>
                	</div>
					<div className={styles.imagebig}>
						<div className={styles.innerimg}>
        						<img key={index} src={items.img}  />
						</div>
    				</div>
        		</div>
            </div>
		)
		})}

		<hr className={styles.line} />

		{/* {details.slice(3,6).map((items,index)=>{
			return(
				<div className={styles.box1} key={index}>
                <div className={styles.heading}>
                    <h1>{items.heading}</h1>
                </div>
				<div className={styles.content}>
					<div className={styles.innercontent}>
               				<h3 >{items.subtitle}</h3>
							<h6>{items.description}</h6>
                			<p > {items.data}</p>
                	</div>
					<div className={styles.imagebig}>
						<div className={styles.innerimg}>
        						<img key={index} src={items.img}  />
						</div>
    				</div>
        		</div>
            </div>
		)
		})} */}

		{/* <hr className={styles.line} /> */}
			
        {details.slice(5,6).map((items,index)=>{
			return(
				<div className={styles.box1} key={index}>
				<div className={styles.content}>
					<div className={styles.innercontent}>
               				<h3 >{items.subtitle}</h3>
							<h6>{items.description}</h6>
                			<p > {items.data}</p>
                	</div>
					<div className={styles.imagebig}>
						<div className={styles.innerimg}>
        						<img key={index} src={items.img}  />
						</div>
    				</div>
        		</div>
            </div>
		)
		})}    		
		</div>
		</Fragment>
	)
}

export default EventComp;