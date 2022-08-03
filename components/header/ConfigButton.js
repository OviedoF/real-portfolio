import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ConfigButton.module.scss';
import { useDispatch } from 'react-redux';
import { activeScreen } from '../../redux/actions/screenActive.actions';

export default function ConfigButton({icon, action, screen, activator, setIsMobileNavActive, isMobileNavActive}) {
  const dispatch = useDispatch();

  return (
    <button 
      id={styles.button} 
      onClick={screen ? () => dispatch( activeScreen(screen) ) : () => setIsMobileNavActive(!isMobileNavActive)}
    >
        <FontAwesomeIcon icon={icon} spin height={20}/>
        <div className={styles.border} />
    </button>
  )
}
