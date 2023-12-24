import React, { Fragment } from "react";
import styles from "./gallerycomp.module.css";

const galleryComp = ( {gallerydata} ) => {
    const {heading,image} = gallerydata
	return(
		<Fragment>
			<div className={styles.main}>
                <div className={styles.heading}>
                    <h1>{heading}</h1>
                </div>
                <div className={styles.outerinfo}>
					<div className={styles.info}>
                    	<div>
                    		{image.slice(1, 3).map((item, index) => {
                    			return (
									<a href="/" key={index}>
                            			<img src={item.img} alt={item.alt} />
                         			</a>
                    			);
                    		})}
                    	</div>
                	</div>
					<div className={styles.info}>
                    	<div>
                    		{image.slice(0, 1).map((item, index) => {
                    			return (
									<a href="/" key={index}>
                            			<img src={item.img} alt={item.alt} />
                         			</a>
                    			);
                    		})}
                    	</div>
                	</div>
                </div>
            </div>
		</Fragment>	)
}

export default galleryComp;