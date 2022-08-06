import React from 'react'
import styles from './Copy.module.scss';
import { useTranslation } from 'react-i18next';

export default function Copy() {
  const [t] = useTranslation("global");

  return (
    <div className={styles.copy}>
        <h2>{t("Footer.title")}</h2>
        <p>Rafaela, Santa Fe, Argentina</p>

        <p className={styles.copyright}>
        {t("Footer.copyright")}
        </p>
    </div>
  )
}
