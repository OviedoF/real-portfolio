import React from 'react'
import styles from './PrincipalProjectCard.module.scss';
import Image from 'next/image';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function PrincipalProjectCard({project, reverse}) {
    const [t, i18n] = useTranslation("global");

  return (
    <div 
        className={styles.card} 
        direction={reverse ? 'reverse' : 'normal'}
        data-aos={reverse ? 'fade-left' : 'fade-right'}
        data-aos-offset="200"
    >
            <div className={styles.slide_container} >
                <AwesomeSlider mobileTouch bullets={false} className={styles.awesomeSlider}>
                    {project.imagesUrls.map((el, index) => {
                        return ( <picture className={styles.pictureCard} key={el + index}>
                                <Image src={el} layout='fill' alt={'image ' + index} />
                            </picture> )
                    })}
                </AwesomeSlider>
            </div>

            <div className={styles.text} direction={reverse ? 'reverse' : 'normal'}>
                <p>{t("Experience.featured")}</p>
                <h3>{project.name}</h3>

                <div className={styles.description}>
                    {project[`description_${i18n.language}`]}
                </div>

                <ul className={styles.tools} direction={reverse ? 'reverse' : 'normal'}>
                    {project.tools.map(el => {
                        return <li key={el + ' li'}>{el}</li>
                    })}
                </ul>

                <ul className={styles.links} direction={reverse ? 'reverse' : 'normal'}>
                    <li><FontAwesomeIcon icon={faGithub} className={styles.icon}/></li>
                    <li><FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.icon}/></li>
                </ul>
            </div>
        </div>
  )
}
