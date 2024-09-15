import React, { Fragment } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional: Import effects
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
					{image.map((item,index)=>{
						return(
						<div className={styles.images} key={index}>
							<div className={styles.left}>

								<div className={styles.two}>
								<LazyLoadImage
                                    src={item.img2}
                                    alt={`Image 2 - ${index}`}
                                    effect="blur" // Optional: adds a blur effect while loading
									
                                />
								</div>
								<div className={styles.two}>
                                <LazyLoadImage
                                    src={item.img3}
                                    alt={`Image 3 - ${index}`}
                                    effect="blur" // Optional: adds a blur effect while loading
                                   
									/>
									</div>

							</div>
							<div className={styles.right}>
								<div className={styles.one}>
                                <LazyLoadImage
                                    src={item.img1}
                                    alt={`Image 1 - ${index}`}
                                    effect="blur" // Optional: adds a blur effect while loading
									
									/>
									</div>
                            </div>
						</div>
						)
					})}

                </div>
            </div>
		</Fragment>
	)
}

export default galleryComp;