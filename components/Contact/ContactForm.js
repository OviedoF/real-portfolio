import React from 'react'
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  return (
    <form 
    action="https://formsubmit.co/your@email.com" 
    method="POST" 
    className={styles.form}
    data-aos='fade-right'
    data-aos-offset="300"
    >
        <input type="text" name='name' placeholder='Full Name'/>

        <input type="email" name="email" id="" placeholder='E-Mail'/>

        <input type="text" name='query' placeholder='Type of query'/>
        <textarea name="description" id="" cols="30" rows="10" placeholder='Details'></textarea>

        <button type="submit">Send</button>
    </form>
  )
}
