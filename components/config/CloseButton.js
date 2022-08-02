import React from 'react'
import styles from './CloseButton.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { quitScreen } from '../../redux/actions/screenActive.actions';

export default function CloseButton({screen}) {
  const icon = useRef();
  const dispatch = useDispatch();

  const handleColor = (e) => {
    if(e.type == 'mouseenter'){
      setTimeout(() => {
        if(icon.current !== null){
          icon.current.style.color = 'var(--color-vl)';
        }
      }, 250);
    } else {
      icon.current.style.color = 'inherit';
    }
  }

  return (
    <div className={styles.hover} 
      onMouseEnter={(e) => handleColor(e)} 
      onMouseLeave={(e) => handleColor(e)}
      onClick={screen ? () => dispatch(quitScreen(screen)) : ''}
    >
      <FontAwesomeIcon icon={faXmark} className={styles.close} ref={icon}/>
    </div>
  )
}
