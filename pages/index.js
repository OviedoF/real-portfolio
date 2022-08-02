import ThemeScreen from '../components/config/theme/ThemesScreen';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Home from '../components/home/Home';
import React from 'react';
import SocialMedia from '../components/home/SocialMedia';
import AboutMeSection from '../components/aboutme/AboutMeSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import ContactSection from '../components/Contact/ContactSection';

export default function Index({themes, projectsPrincipal, projectsSecundario, tecnologies}) {
  const screensActive = useSelector(state => state.screensActive);
  const themeActive = useSelector(state => state.themeActive);
  console.log(tecnologies);
  
  return (
    <main style={{padding: '0px 15%', backgroundColor: 'var(--color-dark)'}} theme={themeActive._id} >
      {screensActive.themes ? <ThemeScreen themes={themes} screen={'themes'}/> : ''}

      <SocialMedia />

      <Home />

      <AboutMeSection tecnologies={tecnologies}/>

      <ProjectsSection projectsPrincipal={projectsPrincipal} projectsSecundario={projectsSecundario}/>

      <ContactSection/>

      <style jsx>{`
        main{
            --color-vl: ${themeActive.color_vl} ;
            --color-l: ${themeActive.color_l};
            --color-md: ${themeActive.color_md};
            --color-ldark: ${themeActive.color_ldark};
            --color-dark: ${themeActive.color_dark};
            --color-verydark: ${themeActive.color_vdark};
            --text-color: ${themeActive.text_color};
        }  
      `}</style>
    </main>
  )
}

export async function getServerSideProps(){
  const themes = await axios(`${process.env.HOSTNAME}api/themes`)
      .then(response => response.data)
      .catch(err => console.log(err));

  const projectsPrincipal = await axios(`${process.env.HOSTNAME}api/projects/type/principal`)
      .then(res => res.data)
      .catch(err => console.log(err));

  const projectsSecundario = await axios(`${process.env.HOSTNAME}api/projects/type/secundario`)
  .then(res => res.data)
  .catch(err => console.log(err));

  const tecnologies = await axios(`${process.env.HOSTNAME}api/tecnologies`)
  .then(res => res.data)
  .catch(err => console.log(err));
 
  return {
      props: {
          themes,
          projectsPrincipal,
          projectsSecundario,
          tecnologies
      }
  };
}