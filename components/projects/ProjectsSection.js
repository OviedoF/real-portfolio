import React from 'react';
import SubtitleSection from '../SubtitleSection';
import PrincipalProjectCard from './PrincipalProjectCard';
import styles from './ProjectsSection.module.scss';
import SecondaryProjectCard from './SecondaryProjectCard';

export default function ProjectsSection({projectsPrincipal, projectsSecundario}) {
  const esPar= (number) => {
    return number % 2 == 0;
  }

  return (
    <section className={styles.section} id='work'>
        <SubtitleSection 
            section={'Work'} 
            number={'03'}
        />

        {projectsPrincipal.map((el, index) => {
            return <PrincipalProjectCard project={el} key={el._id} reverse={ esPar(index + 1) }/>
        })}

        <div className={styles.secondaryContainer}>
          {projectsSecundario.map(project => {
            return <SecondaryProjectCard project={project} key={project._id}/>
          })}
        </div>
    </section>
  )
}
