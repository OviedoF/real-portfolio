import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AboutMeText.module.scss';

export default function AboutMeText() {
  return (
    <div className={styles.info}>
        <h3>Full Stack Developer</h3>
        <p>
                    Soy un chico de 19 años al cual le gusta la programación, todo empezó desde que tenñia 16 años y descubrí el desarrollo web
                    mientras navegaba por internet. Lo que me llevó a estudiar de forma independiente todo lo relacionado a este nicho y así
                    fui queriendo más y más cada tecnología según avanzaba el tiempo, sobre todo en lo que tenga que ver con el ecosistema de 
                    React, pero sin dejar de lado Angular.
        </p>

        <ul>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>Birthday: 07 march 2003</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>Carrer: Computeer Engineering (in process)</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>Hobbies: Cars and Cats</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>Country: Argentina</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>Phone: +54 392 621665</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>Email: oviedofederico039@gmail.com</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>Freelancer: Available</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>Searching Job: Available</li>
        </ul>
    </div>
  )
}
