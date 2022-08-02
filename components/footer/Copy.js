import React from 'react'
import styles from './Copy.module.scss';

export default function Copy() {
  return (
    <div className={styles.copy}>
        <h2>OvDev by Federico Oviedo</h2>
        <p>Rafaela, Santa Fe, Argentina</p>

        <p className={styles.copyright}>
        © All Rights Reserved by Oviedo, Federico. 2022
        </p>
    </div>
  )
}
