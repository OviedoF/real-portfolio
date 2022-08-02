import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import styles from './HomeText.module.scss';

export default function HomeText() {

  return (
    <div className={styles.container}>

          <h1>Oviedo, 
            Federico
          </h1>

          

          <div className={styles.subtext}>
            <hr />
            
            <Typewriter

            options={{
              strings: ['Full-Stack developer', 'Codder', 'React developer', 'Web designer', ' Geek'],
              autoStart: true,
              loop: true,
              delay: 40
            }}

            />
          </div>

    </div>
  )
}
