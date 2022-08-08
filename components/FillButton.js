import React from 'react'
import styles from './FillButton.module.scss';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { saveAs } from 'file-saver';

export default function FillButton() {
  const [t] = useTranslation("global");

  const saveFile = () => {
    saveAs(
      `${process.env.HOSTNAME}cv`,
      "federico-ov-cv.pdf"
    );
  };

  return (
    <button onClick={(e) => saveFile()} download className={styles.fill}>{t("About.download-cv")}</button>
  )
}
