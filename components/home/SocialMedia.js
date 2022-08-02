import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SocialMedia.module.scss';
import { faGithub, faLinkedin, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div className={styles.social_media}>
        <ul>
          <li><FontAwesomeIcon icon={faGithub} height={19}/></li>
          <li><FontAwesomeIcon icon={faLinkedin} height={19}/></li>
          <li><FontAwesomeIcon icon={faWhatsapp} height={19}/></li>
          <li><FontAwesomeIcon icon={faFacebook} height={19}/></li>
        </ul>

        <hr />
    </div>
  )
}
