import React from 'react';
import styles from './ThemePicture.module.scss';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import {changeTheme } from '../../../redux/actions/themeActive.actions';

export default function ThemePicture({image}) {
  const dispatch = useDispatch();

  return (
    <picture className={styles.picture} onClick={() => dispatch( changeTheme(image) ) }>
        <div className={styles.hover}>
            <div className={styles.effect1} style={{backgroundColor: `${image.color_l}60`}}/>
            <div className={styles.effect2} style={{backgroundColor: `${image.color_md}60`}}/>
        </div>

        <Image src={`${image.imageUrl}`} layout='fill' objectFit='cover' alt={image.name}/>
    </picture>
  )
}
