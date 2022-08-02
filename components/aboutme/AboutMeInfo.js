import React from 'react';
import styles from './AboutMeInfo.module.scss';
import AboutMeText from './AboutMeText';
import CardCv from './CardCv';


export default function AboutMeInfo() {

  return (
    <div className={styles.card} data-aos="fade-left">
        <CardCv />
        <AboutMeText />
    </div>
  )
}
