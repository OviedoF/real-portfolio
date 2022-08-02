import { faLinkedin, faFacebook, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Footer.module.scss'
import { useSelector } from 'react-redux';
import Copy from './Copy';
import Redirects from './Redirects'

export default function Footer() {
  const themeActive = useSelector(state => state.themeActive);

  return (
    <footer className={styles.footer}>
        <div className={styles.presentation}>

            <Copy />

            <Redirects />
            
        </div>

        <style jsx>{`
          footer{
              --color-vl: ${themeActive.color_vl} ;
              --color-l: ${themeActive.color_l};
              --color-md: ${themeActive.color_md};
              --color-ldark: ${themeActive.color_ldark};
              --color-dark: ${themeActive.color_dark};
              --color-verydark: ${themeActive.color_vdark};
              --text-color: ${themeActive.text_color};
          }  
        `}</style>
    </footer>
  )
}
