import React from 'react';
import DirectCard from './DirectCard';
import styles from './DirectContact.module.scss';
import { faLinkedin, faFacebook, faGithub, faPatreon, faWhatsapp, faDev } from '@fortawesome/free-brands-svg-icons';

export default function DirectContact() {
  return (
    <div 
    className={styles.container}     
    data-aos='fade-left'
    data-aos-offset="0"
    >
        <DirectCard 
        icon={faLinkedin}
        color='#0e76a8'
        link='https://www.linkedin.com/in/federico-oviedo-98663221a/'
        transition='500'
        />
        
        <DirectCard 
        icon={faFacebook}
        color='#3b5998'
        link='https://www.facebook.com/profile.php?id=100079103160814'
        transition='700'
        />
        
        <DirectCard 
        icon={faGithub}
        color='#171515'
        link='https://github.com/OviedoF'
        transition='900'
        />
        
        <DirectCard 
        icon={faPatreon}
        color='#f96854'
        link='https://www.patreon.com/user?u=77647395'
        transition='1100'
        />

        <DirectCard 
        icon={faWhatsapp}
        color='#25d366'
        link='https://api.whatsapp.com/send/?phone=543492621665&text&type=phone_number&app_absent=0'
        transition='1300'
        />
        
        <DirectCard
        icon={faDev}
        color='#2f7fc1'
        link={'https://www.freelancer.com.ar/u/oviedofederico03'}
        transition='1500'
        />
    </div>
  )
}
