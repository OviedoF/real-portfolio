import React, { useState } from 'react';
import styles from './FormLogin.module.scss';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/actions/auth.actions';
import { useTranslation } from 'react-i18next';
import {useRouter} from 'next/router';

export default function FormLogin({setTimes, times}) {
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");
    const router = useRouter();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.name === process.env.USER && form.password === process.env.PASS){
            dispatch( login() );
            router.push('/admin/panel');
        } else{
            setTimes(times+1);
        }
    }
    
  return (
    <form action="" className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => handleChange(e)} type="text" name="name" placeholder={t("login.nameAdmin")}/>
        <input onChange={(e) => handleChange(e)} type="password" name="password" id="" placeholder={t("login.passAdmin")}/>

        <button type="submit" className={styles.fill}>{t("login.login")}</button>
    </form>
  )
}
