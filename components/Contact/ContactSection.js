import React from 'react';
import SubtitleSection from '../SubtitleSection';
import ContactForm from './ContactForm';
import styles from './ContactSection.module.scss';
import DirectContact from './DirectContact';
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const [t, i18n] = useTranslation("global");

  return (
    <section style={{marginTop: '70px'}} id='contact'>
        <SubtitleSection number={'04'} section={t("Contact.subtitle")} />

        <div className={styles.container}>
            <ContactForm />

            <DirectContact />
        </div>
    </section>
  )
}
