import React, { useState, useEffect } from 'react';
import FormLogin from '../../components/login/FormLogin'
import ScrollIndicator from '../../components/ScrollIndicator/ScrollIndicator';
import { useSelector } from 'react-redux';
import ThemesScreen from '../../components/config/theme/ThemesScreen';
import LanguageScreen from '../../components/config/language/LanguageScreen';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function Login({themes}) {
    const screensActive = useSelector(state => state.screensActive); 
    const themeActive = useSelector(state => state.themeActive);
    const [times, setTimes] = useState(0);
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        if(localStorage.getItem('times')){
            setTimes(localStorage.getItem('times'));
        }

        if(times >= 5){
            localStorage.setItem('times', times);
        }
    }, [times]);

  return (
    <main>
        {screensActive.themes ? <ThemesScreen themes={themes} screen={'themes'}/> : ''}
        {screensActive.language ? <LanguageScreen /> : ''}
        <ScrollIndicator />

        {times < 5 ? 
        <div>
            {times === 0 ? <h2>{t("login.message")}</h2> : <h2>{t("login.opportunitiesMessage")} {5 - times} {t("login.moreAttemps")}</h2>}

            <FormLogin setTimes={setTimes} times={times} />
        </div>
        : <h2>{t("login.noMoreOpps")}</h2>}

        <style jsx>{`
            main{
                overflow: hidden;
                --color-vl: ${themeActive.color_vl} ;
                --color-l: ${themeActive.color_l};
                --color-md: ${themeActive.color_md};
                --color-ldark: ${themeActive.color_ldark};
                --color-dark: ${themeActive.color_dark};
                --color-verydark: ${themeActive.color_vdark};
                --text-color: ${themeActive.text_color};
                height: 100vh;
                width: 100vw;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: var(--color-ldark);
            }    

            main div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

            h2{
                text-align: center;
                width: 100%;
                font-size: 23px;
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