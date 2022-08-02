import React, { useState, useEffect } from 'react';
import SubtitleSection from '../SubtitleSection';
import AboutMeInfo from './AboutMeInfo';
import Tecnologies from './Tecnologies';

const AboutMeSection = ({tecnologies}) => {
    return (
        <section>
            <SubtitleSection section={'About Me'} number={'02'}/>

            <AboutMeInfo />

            <Tecnologies tecnologies={tecnologies}/>
        </section>
    );
}

export default AboutMeSection;
