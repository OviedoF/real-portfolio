import React from 'react';
import Image from 'next/image';
import styles from './TecnologyCard.module.scss';

export default function TecnologyCard({el}) {
  return (
    <a href={el.documentation_link} className={styles.a} id={el.name}>
        <picture className={styles.picture}>
            <Image src={el.imageUrl[0]} layout='fill' objectFit='contain' alt={el.name + ' logo'}/>
        </picture>
        <span className={styles.span}>{el.name}</span>
    </a>
  )
}
