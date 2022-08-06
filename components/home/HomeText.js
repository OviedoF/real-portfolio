import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";
import styles from './HomeText.module.scss';
import { useTranslation } from 'react-i18next';

export default function HomeText() {
  const [t] = useTranslation("global");

  return (
    <div className={styles.container}>

          <h1>Oviedo, 
            Federico
          </h1>

          

          <div className={styles.subtext}>
            <hr />
            
            <Typewriter

            options={{
              strings: [t("Home.subtitles.full-stack"),
                t("Home.subtitles.codder"),
                t("Home.subtitles.react-dev"), 
                t("Home.subtitles.web-designer"), 
                t("Home.subtitles.geek"),
                t("Home.subtitles.stacks"),
                t("Home.subtitles.nextjs")
              ],
              autoStart: true,
              loop: true,
              delay: 40
            }}

            />
          </div>

    </div>
  )
}
