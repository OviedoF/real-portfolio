import ThemeScreen from '../../components/config/theme/ThemesScreen';
import axios from 'axios';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import AddProjectForm from '../../components/projects/add/AddProjectForm';
import { useRouter } from 'next/router';

export default function Index({themes, setThemes}) {
  const router = useRouter();
  const screensActive = useSelector(state => state.screensActive);
  const themeActive = useSelector(state => state.themeActive);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth){
      router.push('/');
    }
  }, []);
  
  return (
    <main style={{padding: '0px 15%', backgroundColor: 'var(--color-dark)'}} theme={themeActive._id} >
      {screensActive.themes ? <ThemeScreen themes={themes} screen={'themes'}/> : ''}

      <AddProjectForm />

      <style jsx>{`
        main{
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
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
 
  return {
      props: {
          themes
      }
  };
}