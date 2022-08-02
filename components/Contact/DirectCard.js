import React from 'react';
import styles from './DirectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DirectCard({icon, color, link}) {
  return (
    <a href={link} className={styles.container} style={{backgroundColor: color}}>
        <FontAwesomeIcon icon={icon} className={styles.icon}/>
    </a>
  )
}
