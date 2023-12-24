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
					{image.map((item,index)=>{
						return(
						<div className={styles.images} key={index}>
							<div className={styles.left}>
							<div style={
								{
									backgroundImage:`url(${item.img2})`
								}
							}>
								</div>
								<div style={
								{
									backgroundImage:`url(${item.img3})`
								}
							}>
								</div>
							</div>
							<div className={styles.right} style={
								{
									backgroundImage:`url(${item.img1})`
								}}>
								
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