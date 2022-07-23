import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ConfigButton.module.scss';

export default function ConfigButton({icon, action}) {
  return (
    <button id={styles.button} onClick={() => action()}>
        <FontAwesomeIcon icon={icon} spin height={20}/>
        <div className="border" />

        <style jsx>{`
                button{
                    cursor: pointer;
                    height: 100%;
                    width: 20%;
                    display: flex;
                    align-items: center;
                    background: none;
                    position: relative;
                    border: none;
                    padding: 18px;
                    color: var(--text-color);
                }

                .border{
                    height: 0%;
                    width:3%;
                    background: var(--normal-color);
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transition: all .2s ease-in-out;
                }
        `}</style>
    </button>
  )
}
