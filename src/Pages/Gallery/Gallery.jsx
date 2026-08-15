import React, { Fragment, useLayoutEffect } from "react";
import SEO from "../../Components/SEO";
import GalleryComp from "../../Components/GalleryComp/gallerycomp";
import Dots from "../../Components/dots/Dots";
import { gallery } from "../../data.mjs";
import { HeroData } from "../../data.mjs";
import styles from "./Gallery.module.css";

const Gallery = () => {



  const galleryimg = {
    heading: gallery.heading,
    image: gallery.images,
  };
  const { headline } = HeroData;

  return (
    <Fragment>
      <SEO title="Gallery" description="Take a look at the memorable moments and highlights from our chapter events." />
      <section id={styles.gallery}>
        <div className={styles.maincontent}>
          <div className={styles.upperpart}>
            <h3 className={styles.headline}>{headline}</h3>
            <div className={styles.circles}>
              <Dots />
            </div>
          </div>
          <div>
            <GalleryComp gallerydata={galleryimg} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Gallery;
