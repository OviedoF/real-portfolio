import React, { useState, useEffect } from 'react';
import SubtitleSection from '../SubtitleSection';
import AboutMeInfo from './AboutMeInfo';
import Tecnologies from './Tecnologies';
import { useTranslation } from 'react-i18next';

const AboutMeSection = ({tecnologies}) => {
    const [t, i18n] = useTranslation("global");

    return (
        <section id='aboutme'>
            <SubtitleSection section={t("About.subtitle")} number={'02'}/>

            <AboutMeInfo />

            <Tecnologies tecnologies={tecnologies}/>
        </section>
    );
}

export default AboutMeSection;
