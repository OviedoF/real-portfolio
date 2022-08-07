import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TranslateButton.module.scss';
import { useDispatch } from 'react-redux';
import { activeScreen } from '../../redux/actions/screenActive.actions';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function TranslateButton(icon) {
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");


  return (
    <button 
        className={styles.button} 
        onClick={() => dispatch( activeScreen('language') )}
    >
        <FontAwesomeIcon icon={faGlobe} spin height={20}/>
        <p>{t(`LanguageScreen.${i18n.language}`)}</p>
    </button>
  )
}
