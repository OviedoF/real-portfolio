import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { activeScreen } from '../../redux/actions/screenActive.actions';
import { quitScreen } from '../../redux/actions/screenActive.actions';

export default function ContactForm() {
  const [t] = useTranslation("global");
  const [form, setForm] = useState({
    _subject: "Email recibido desde el portafolio!!",
    _cc: "oviedofederico39@gmail.com",
    _template: "table"
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( activeScreen('isLoading') );

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/oviedofederico039@gmail.com', form)
        .then(response => {
          console.log(response);
          dispatch( quitScreen('isLoading') );
        })
        .catch(error => console.log(error));
  }

  return (
    <form 
      action="https://formsubmit.co/oviedofederico039@gmail.com" 
      method="POST" 
      className={styles.form}
      data-aos='fade-right'
      data-aos-offset="300"
      onSubmit={(e) => handleSubmit(e)}
    >
        <input type="text" name='name' placeholder={t("Contact.full-name")} onChange={(e) => handleChange(e)} />

        <input type="email" name="email" id="" placeholder={t("Contact.e-mail")} onChange={(e) => handleChange(e)} />

        <input type="text" name='query' placeholder={t("Contact.type-query")} onChange={(e) => handleChange(e)} />

        <textarea name="description" id="" cols="30" rows="10" placeholder={t("Contact.details")}  onChange={(e) => handleChange(e)} />

        <button type="submit">{t("Contact.send")}</button>
    </form>
  )
}
