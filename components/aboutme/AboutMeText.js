import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AboutMeText.module.scss';
import { useTranslation } from 'react-i18next';

export default function AboutMeText() {
  const [t] = useTranslation("global");

  return (
    <div className={styles.info}>
        <h3>{t("About.title")}</h3>
        <p>
            {t("About.description")}
        </p>

        <ul>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>{t('About.birthday')}</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>{t('About.carrer')}</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>{t('About.hobbies')}</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>{t('About.country')}</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>{t('About.phone')}</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>{t('About.email')}</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>{t('About.freelancer')}</li>
            <li><FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>{t('About.searching-job')}</li>
        </ul>
    </div>
  )
}
