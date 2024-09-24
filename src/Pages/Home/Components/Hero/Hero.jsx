import {Fragment} from 'react';
import styles from './Hero.module.css';
import {HeroData} from '../../../../data.mjs';
// import Navbar from './../Navbar/Navbar';

const Hero = () => {
  const {headline, keywords, subtitle, info, logos} = HeroData;

  return (
    <Fragment>
     
      <section id={styles.hero}>
          
        <div className={styles.maincontent}>
        <div className={styles.upperpart}>
            <h3 className={styles.headline}>
              {headline}
            </h3>
        <div className={styles.circles}>
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>
        </div>
        
        <main>

          
          
          <div className={styles.title}>
            <div className={styles.innertext}>
            <h4 className={styles.lsb}>
            <span>2</span>
            <span>0</span>
            <span>2</span>
            <span>4</span>
            </h4>
            <div className={styles.innercontent}>
            <header>
              <h1>
                <span>ACM</span>
                <br />
                Student
                <br />
                Chapter
              </h1>
            </header>
            
            <div className={styles.keywords}>
              {keywords.map ((item, index) => {
                return (
                  <div className={styles.keyword} key={index}>
                    <h3>{item}</h3>
                  </div>
                );
              })}
            </div>
            </div>
            </div>
          </div>

          <div className={styles.info}>
            <div>
              <h2>{subtitle}</h2>
              <p>{info}</p>
            </div>
            <div className={styles.logos}>
              {logos.map ((item, index) => {
                return (
                  <a href={item.link} target="_blank" key={index}>
                    <img src={item.img} alt={item.alt} />
                  </a>
                );
              })}
            </div>
          </div>


        </main>
        </div>
       
      </section>
    </Fragment>
  );
};
export default Hero;
