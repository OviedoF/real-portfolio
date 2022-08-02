import React from 'react';
import styles from './DirectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DirectCard({icon, color, link, transition}) {
  return (
    <a 
      href={link} 
      className={styles.container} 
      style={{backgroundColor: color}}
      data-aos-duration={transition}    
    >
        <FontAwesomeIcon icon={icon} className={styles.icon}/>
    </a>
  )
}
