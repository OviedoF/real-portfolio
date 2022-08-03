import React from 'react';
import SubtitleSection from '../SubtitleSection';
import ContactForm from './ContactForm';
import styles from './ContactSection.module.scss';
import DirectContact from './DirectContact';

export default function ContactSection() {
  return (
    <section style={{marginTop: '70px'}} id='contact'>
        <SubtitleSection number={'04'} section={'Contact'} />

        <div className={styles.container}>
            <ContactForm />

            <DirectContact />
        </div>
    </section>
  )
}
