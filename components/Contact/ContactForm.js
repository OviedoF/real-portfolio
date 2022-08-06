import React from 'react'
import styles from './ContactForm.module.scss';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const [t] = useTranslation("global");

  return (
    <form 
    action="https://formsubmit.co/your@email.com" 
    method="POST" 
    className={styles.form}
    data-aos='fade-right'
    data-aos-offset="300"
    >
        <input type="text" name='name' placeholder={t("Contact.full-name")}/>

        <input type="email" name="email" id="" placeholder={t("Contact.e-mail")}/>

        <input type="text" name='query' placeholder={t("Contact.type-query")}/>
        <textarea name="description" id="" cols="30" rows="10" placeholder={t("Contact.details")}></textarea>

        <button type="submit">{t("Contact.send")}</button>
    </form>
  )
}
