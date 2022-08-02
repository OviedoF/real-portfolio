import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import Image from 'next/image';
import HomeText from './HomeText';
import { useSelector } from 'react-redux';

export default function Home() {
  const themeActive = useSelector(state => state.themeActive);

  return (
    <section className={styles.home} id='homeSection'>

      <div className={styles.presentation} >
        <div className={styles.overlay} style={{backgroundColor: `${themeActive.color_dark}40`}}/>
        <Image src={themeActive.link_gif} alt='gif theme' layout='fill' objectFit='cover'/>

        <HomeText />
      </div>

    </section>
  )
}
