import React, { Fragment } from "react";
import SEO from "../../Components/SEO";
import EventComp from "../../Components/EventsComp/eventcomp";
import Dots from "../../Components/dots/Dots";
// import { events } from "../../data.mjs";
import {HeroData} from "../../data.mjs";
import styles from './Events.module.css';
import Sponser from "../../Components/Sponser/Sponser";

    const Events = () => {
        const {headline} = HeroData;

    return(
        <Fragment>
            <SEO title="Events" description="Explore our flagship events, hackathons, and sub-events like Hacklipse, Flamingo, and CodeSprint." />
            <section id={styles.events}>
                <div className={styles.maincontent}>
                    <div className={styles.upperpart}>
                        <h3 className={styles.headline}>
                            {headline}
                        </h3>
                        <div className={styles.circles}>
                            <Dots />
                        </div>
                    </div>
                    <div>
                        <EventComp  />
                    </div>
                    <Sponser />
                </div>
            </section>
        </Fragment>
    )
};

export default Events;