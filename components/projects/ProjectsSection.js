import React from 'react';
import SubtitleSection from '../SubtitleSection';
import PrincipalProjectCard from './PrincipalProjectCard';
import styles from './ProjectsSection.module.scss';
import SecondaryProjectCard from './SecondaryProjectCard';
import { useTranslation } from 'react-i18next';

export default function ProjectsSection({projectsPrincipal, projectsSecundario}) {
  const [t, i18n] = useTranslation("global");

  const esPar= (number) => {
    return number % 2 == 0;
  }

  return (
    <section className={styles.section} id='work'>
        <SubtitleSection 
            section={t("Experience.subtitle")} 
            number={'03'}
        />

        <div className={styles.principalContainer}>
          {projectsPrincipal.map((el, index) => {
              return <PrincipalProjectCard project={el} key={el._id} reverse={ esPar(index + 1) }/>
          })}
        </div>

        <div className={styles.secondaryContainer}>
          {projectsSecundario.map(project => {
            return <SecondaryProjectCard project={project} key={project._id}/>
          })}
        </div>
    </section>
  )
}
