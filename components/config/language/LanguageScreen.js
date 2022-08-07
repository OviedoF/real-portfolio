import React from 'react';
import styles from './LanguageScreen.module.scss';
import { useTranslation } from "react-i18next";
import CloseButton from '../CloseButton';

export default function LanguageScreen() {
  const [t, i18n] = useTranslation("global");

  const handleLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <div className={styles.container}>
        <CloseButton position="bottom" screen={'language'}/>

        <h3>{t("LanguageScreen.choose")}</h3>

        <ul>
            <li onClick={() => handleLanguage("es")}>{t("LanguageScreen.es")}</li>
            <li onClick={() => handleLanguage("en")}>{t("LanguageScreen.en")}</li>
        </ul>
    </div>
  )
};
