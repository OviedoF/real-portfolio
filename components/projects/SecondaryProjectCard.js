import React from 'react'
import styles from './SecondaryProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import 'react-awesome-slider/dist/styles.css';


export default function SecondaryProjectCard({project}) {
  const [t, i18n] = useTranslation("global");

  return (
    <picture 
    className={styles.card} 
    data-aos="fade-up"
    data-aos-offset="300"
    >
        <h4>{project.name}</h4>
        <ul className={styles.toolsContainer}>
          {project.tools.map(el => {
            return <li key={el}>{el}</li>
          })}
        </ul>

        <p>{project[`description_${i18n.language}`]}</p>

        <ul className={styles.links}>
          <li><FontAwesomeIcon icon={faGithub} className={styles.icon} height={30}/></li>
          <li><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon} height={30}/></li>
        </ul>
    </picture>
  )
}
