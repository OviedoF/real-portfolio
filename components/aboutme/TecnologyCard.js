import React from 'react';
import Image from 'next/image';
import styles from './TecnologyCard.module.scss';

export default function TecnologyCard({el, index}) {
  return (
    <a 
    href={el.documentation_link} 
    className={styles.a} 
    id={el.name} 
    data-aos="fade-right"
    data-offset='300'
    data-aos-duration={`${600 * (index + 1/2)}`}
    >
        <picture className={styles.picture}>
            <Image src={el.imageUrl[0]} layout='fill' objectFit='contain' alt={el.name + ' logo'}/>
        </picture>
        <span className={styles.span}>{el.name}</span>
    </a>
  )
}
