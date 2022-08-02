import React, { useState, useEffect } from 'react';
import ThemeImage from './ThemeImage';
import styles from './ThemesScreen.module.scss';import CloseButton from '../CloseButton';
import { useSelector } from 'react-redux';

export default function ThemesScreen({themes, screen}) {
  const theme = useSelector(state => state.themeActive);
  console.log(theme)

  return (
    <div className={styles.menu}>

        <CloseButton screen={screen}/>

        <h2 id={styles.title}>
          <span>
            Choose a color theme
          </span>
        </h2>
        
        <div className={styles.images}>
            {themes.map((el, index) => {
                return <ThemeImage
                    image={el} 
                    key={el._id}
                    position={index}
                />
            })}
        </div>
    </div>
  )
}