import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SocialMedia.module.scss';
import { faGithub, faLinkedin, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div className={styles.social_media}>
        <ul>
          <li>
            <a target='_blank' rel={'noreferrer'} href='https://github.com/OviedoF'><FontAwesomeIcon icon={faGithub} height={19}/></a>
          </li>

          <li>
            <a target='_blank' rel={'noreferrer'} href='https://www.linkedin.com/in/federico-oviedo-98663221a/'><FontAwesomeIcon icon={faLinkedin} height={19}/></a>
          </li>

          <li>
            <a target='_blank' rel={'noreferrer'} href='https://api.whatsapp.com/send/?phone=543492621665&text&type=phone_number&app_absent=0'><FontAwesomeIcon icon={faWhatsapp} height={19}/></a>
          </li>

          <li>
            <a target='_blank' rel={'noreferrer'} href='https://www.facebook.com/profile.php?id=100079103160814'><FontAwesomeIcon icon={faFacebook} height={19}/></a>
          </li>

        </ul>

        <hr />
    </div>
  )
}
