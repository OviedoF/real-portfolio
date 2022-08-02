import React from 'react';
import styles from './ThemeImage.module.scss';
import ThemePicture from './ThemePicture';

export default function ThemeImage({image, position}) {
    const time = parseInt((position + 2) * 2);
    const id = `picture${time}`;

  return (
    <div className={styles.container} id={id}>
        <h2>{image.name}</h2>

        <ThemePicture image={image} />

        <a href={`${image.link_image}`} target='_BLANK' rel='noreferrer'>Art created by {image.autor_image}</a>

        <style jsx>{`
          #${id}{
            animation: appear ${time/6}s ease; 
          }

          @keyframes appear{
              0%{
                  bottom: -200%;
              }

              100%{
                  bottom: 0;
              }
          }
        `}</style>
    </div>
  )
}

