import React from 'react'
import styles from './FillButton.module.scss';
import { useTranslation } from 'react-i18next';

export default function FillButton() {
  const [t] = useTranslation("global");

  return (
    <button type="button" className={styles.fill}>{t("About.download-cv")}</button>
  )
}
